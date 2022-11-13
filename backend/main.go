package main

import (
    "net/http"
	"github.com/gin-gonic/gin"

    "context"
    "fmt"
    "log"

    "github.com/ignite/cli/ignite/pkg/cosmosclient"

	bankTypes "github.com/cosmos/cosmos-sdk/x/bank/types"

	cosmosTypes "github.com/cosmos/cosmos-sdk/types"

	cosmosMath "cosmossdk.io/math"
)

// middleware to allow incoming requests from all ports
func CORSMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {

        c.Header("Access-Control-Allow-Origin", "*")
        c.Header("Access-Control-Allow-Credentials", "true")
        c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
        c.Header("Access-Control-Allow-Methods", "POST,HEAD,PATCH, OPTIONS, GET, PUT")

        // we do not allow options
        if c.Request.Method == "OPTIONS" {
            c.AbortWithStatus(204)
            return
        }

        // forward request to next handler
        c.Next()
    }
}

// Get the address of onboarding-program account
var addressPrefix = "mito"
   
var cosmos, err = cosmosclient.New(
    context.Background(),
    cosmosclient.WithAddressPrefix(addressPrefix),
)

var accountName = "onboarding-program"
  
var account, accounterr = cosmos.Account(accountName)

var addr, addrerr = account.Address(addressPrefix)

// mitocell tx struct
type mitocellTx struct {
	ToAddress       string `json:"to_address"`
	Amount          int64  `json:"amount"`  
}

// broadcast the tx to transfer funds in mitocell
func broadcastMitocellTx(c *gin.Context) {

	// request body from frontend/user
	var newMitocellTx mitocellTx

	if err := c.BindJSON(&newMitocellTx); err != nil {
		return
	}

	// create coin amount from amount field of request body
	coinAmount := cosmosMath.NewInt(newMitocellTx.Amount)

	// convert it to mitocell amount/coin
	coin := cosmosTypes.NewCoin("mitocell", coinAmount)

	// create a array/list of coins
	coins := cosmosTypes.NewCoins(coin)

	// create a msg to transfer mitocell from onboarding-program account to the startup account
	msg := &bankTypes.MsgSend{
		FromAddress:     addr,
		ToAddress:       newMitocellTx.ToAddress,
		Amount:          coins,
	}

	// broadcast the tx
	txResp, transerr := cosmos.BroadcastTx(account, msg)
	if transerr != nil {
		log.Fatal(transerr)
	}

	// print the response
	fmt.Print("MsgSend:\n\n")
	fmt.Println(txResp)

	c.IndentedJSON(http.StatusOK, txResp)

}

// get the address of onboarding-program account
func getAddr(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, addr)
}

func main() {

	// if unable to create cosmosClient
	if err != nil {
        log.Fatal(err)
    }

	// if unable to find the account
	if accounterr != nil {
        log.Fatal(accounterr)
    }

	// if unable to find the address
	if addrerr != nil {
        log.Fatal(addrerr)
    }
	
	router := gin.Default()
	router.Use(CORSMiddleware())

	// endpoints for getting an addr and posting a new tx 
	router.GET("/addr", getAddr)
	router.POST("/mitocell", broadcastMitocellTx)
	router.Run("localhost:8080")
}
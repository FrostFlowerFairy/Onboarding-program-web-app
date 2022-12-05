# Onboarding program web app

This app is used by internal team to reward or transfer funds to eligilble startups.

**There are two programs as follows:**
1. **Intial Launch program** - Eligibilty based on industry, services (primary and secondary), number of users, annual revenue, how you plan to utilize reward module and interest in WASM smart contracts
2. **Referral program** - If you are already part of the mitoblock network and you successfully refer a startup to join the mitoblock network.  

## Technologies
**Frontend:** HTML, Bootstrap, Angular,  
**Backend:** Gin, Cosmos SDK and Cosmos client (Ignite)

## Contributors
Daljeet Singh

## Installation and Setup Instructions 

### Frontend (Angular) -

**Note: You will need [npm](https://nodejs.org/en/) and [Angular CLI](https://angular.io/cli) installed globally on your machine.**

#### Installation:

`npm install`   

#### To start a server:

`ng serve` or  `npm start` 

#### To visit the app:

Open `http://localhost:4200/` to view it in the browser  

### Backend (Gin) -

**Note: You will need [go](https://go.dev/doc/install) installed on your machine.**

**Import types from local mitoblockchain / mitoblockchaindev or from remote github repo. Please see the 'replace' declaration in go.mod file. Moreover, make sure that blockchain is running**

#### Ensure the go.mod file matches the source code in module:

`go mod tidy`

#### Run:

`go run .` or `go run main.go`

## Gif of the web app

![f](https://github.com/Dev-Daljeet/Screenshots/blob/master/onboarding_program_app/program-app.gif?raw=true)

# License
MIT License
Copyright (c) 2022 Daljeet Singh

Refer to **LICENSE** file for full information.


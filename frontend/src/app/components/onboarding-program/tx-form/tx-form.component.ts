import { Component } from '@angular/core';
import { TX } from 'src/app/models/tx.model';
import { TxService } from 'src/app/service/tx.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tx-form',
  templateUrl: './tx-form.component.html',
  styleUrls: ['./tx-form.component.css']
})
export class TxFormComponent {

  constructor(private txService: TxService) {}

  programs: string[] = ["Initial Launch", "Referral"]
  
  amounts: number[] = [5000, 2000];

  selectedProgram: string = '';

  amount: number = 0;

  address: string = "";

  addressBalanceTxt: string = "";

  changeAmount() {
    this.amount = this.selectedProgram === "Initial Launch"?this.amounts[0]:this.amounts[1];
  }

  getAccountBalance(address: string)
  {
    this.txService.getBalance(address).subscribe(
      (res: any) => {
        this.addressBalanceTxt = address + "'s balance: " + res.balance.amount + " " + res.balance.denom;
        Swal.fire("TX Successful!", this.addressBalanceTxt, 'success')
      }
    );
  }

  resetForm()
  {
    this.amount = 0;
    this.selectedProgram = "";
    this.address = "";
  }

  broadcastTX()
  {
    let tx: TX = {
      to_address: this.address,
      amount: this.amount
    }; 
    this.txService.broadcastTx(tx).subscribe(
      (res: any) => {
        console.log(res);
        this.getAccountBalance(this.address);
        this.resetForm();
      }
    );
  }
}

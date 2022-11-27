// Code originality: 90 % 
// I wrote it from scratch (component, model and service). There is only one external statement (Swal - line 49) taken from a third party lib.
// Third-party libraries: Swal (Sweet Alert 2)

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

  // dependency injection
  constructor(private txService: TxService) {}

  // onboarding programs
  programs: string[] = ["Initial Launch", "Referral"]
  
  // amount for programs. Alternative way is to use hashmap if there are lot of programs
  amounts: number[] = [5000, 2000];

  // selectedProgram which is binded to select html element
  selectedProgram: string = '';

  // amount which is binded to input text html element
  amount: number = 0;

  // address which is binded to input text html element
  address: string = "";

  // addressBalanceTxt which will display the new balance of account after tx
  addressBalanceTxt: string = "";

  // change amount for programs in accordance with select (dropdown)
  changeAmount() {
    this.amount = this.selectedProgram === "Initial Launch"?this.amounts[0]:this.amounts[1];
  }

  // get the balance of account 
  getAccountBalance(address: string)
  {
    this.txService.getBalance(address).subscribe(
      (res: any) => {
        this.addressBalanceTxt = address + "'s balance: " + res.balance.amount + " " + res.balance.denom;
        Swal.fire("TX Successful!", this.addressBalanceTxt, 'success')
      }
    );
  }

  // reset the form after tx
  resetForm()
  {
    this.amount = 0;
    this.selectedProgram = "";
    this.address = "";
  }

  // broadcast the tx 
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

import { Component } from '@angular/core';
import { TX } from 'src/app/models/tx.model';
import { TxService } from 'src/app/service/tx.service';

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

  changeAmount() {
    if(this.selectedProgram === "Initial Launch")
    {
      this.amount = this.amounts[0];
    }
    else if (this.selectedProgram === "Referral")
    {
      this.amount = this.amounts[1];
    }
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
      }
    );
    this.address = "";
    this.amount = 0;
  }
}

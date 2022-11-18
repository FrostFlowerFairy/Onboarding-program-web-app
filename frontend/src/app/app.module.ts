import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingProgramComponent } from './components/onboarding-program/onboarding-program.component';
import { TxFormComponent } from './components/onboarding-program/tx-form/tx-form.component';
import { HeaderComponent } from './components/onboarding-program/header/header.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TxService } from './service/tx.service';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingProgramComponent,
    TxFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TxService],
  bootstrap: [AppComponent]
})
export class AppModule { }

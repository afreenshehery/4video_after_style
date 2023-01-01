import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Vdo1Component } from './components/vdo1/vdo1.component';
import { Vdo2Component } from './components/vdo2/vdo2.component';
import { Vdo3Component } from './components/vdo3/vdo3.component';
import { Vdo4Component } from './components/vdo4/vdo4.component';
import { MainComponent } from './components/main/main.component';


// scanner
// import { ScanFolioCitaComponent } from './scan-folio-cita/scan-folio-cita.component';
// import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    Vdo1Component,
    Vdo2Component,
    Vdo3Component,
    Vdo4Component,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScannerQrcodeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

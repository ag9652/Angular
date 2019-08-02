import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UPdateEmpComponent } from './update-emp/update-emp.component';


@NgModule({
  declarations: [
    AppComponent,
    UPdateEmpComponent
 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
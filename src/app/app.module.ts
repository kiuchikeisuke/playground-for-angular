import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from './api.module';
import { DefaultService } from './api/default.service'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApiModule
  ],
  providers: [DefaultService],
  bootstrap: [AppComponent]
})
export class AppModule { }

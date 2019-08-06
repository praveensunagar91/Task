import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserprofileComponent } from './usermanager/userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

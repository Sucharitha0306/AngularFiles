import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployComponent } from './employ/employ.component';
import { EmploySearchComponent } from './employ-search/employ-search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployComponent,
    EmploySearchComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
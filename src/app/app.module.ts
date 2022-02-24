import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//material

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import {
  ApiRequestService,
  UsersListComponent,
  FormEntryComponent,
  PreloaderComponent,
  ModalErrComponent,
} from './index';




@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    FormEntryComponent,
    PreloaderComponent,
    ModalErrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //material

    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [ApiRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

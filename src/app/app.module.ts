import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { DetectLinkPipe } from './pipes/detect-link.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from './@share/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DetectLinkPipe,
    
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

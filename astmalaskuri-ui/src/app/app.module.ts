import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { AnnoksiaJaljellaComponent } from './annoksia-jaljella/annoksia-jaljella.component';
import { ViimeksiKaytetytComponent } from './viimeksi-kaytetyt/viimeksi-kaytetyt.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetoiLaakkeetComponent } from './resetoi-laakkeet/resetoi-laakkeet.component';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    AnnoksiaJaljellaComponent,
    ViimeksiKaytetytComponent,
    ResetoiLaakkeetComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

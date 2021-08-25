import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { VoitureComponent } from './voiture/voiture.component';
import { VoitureNewComponent } from './voiture-new/voiture-new.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    VoitureNewComponent,
    VoitureEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

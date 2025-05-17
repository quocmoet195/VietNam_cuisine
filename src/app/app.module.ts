import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SouthComponent } from './components/south/south.component';
import { NorthComponent } from './components/north/north.component';
import { CentralComponent } from './components/central/central.component';



@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        AppComponent,

        BrowserAnimationsModule,
        //AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NorthComponent,
        CentralComponent,
        SouthComponent,

    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }

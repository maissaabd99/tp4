import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterielComponent } from './ex2/materiel/materiel.component';
import { MaterielListComponent } from './ex2/materiel-list/materiel-list.component';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterielComponent,
    MaterielListComponent,
    ParentComponent,
    EnfantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

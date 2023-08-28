import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameControlComponent } from './game/game-control/game-control.component';
import { OddComponent } from './game/odd/odd.component';
import { EvenComponent } from './game/even/even.component';
import { UserItemComponent } from './users/user-item/user-item.component';

@NgModule({
  declarations: [AppComponent, GameControlComponent, OddComponent, EvenComponent, UserItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShoppingcartComponent } from './Events/components/shoppingcart/shoppingcart.component';
import { ViewhomeComponent } from './Events/views/viewhome/viewhome.component';
import { SliderComponent } from './Events/components/slider/slider.component';
import { ViewbooksComponent } from './Events/views/viewbooks/viewbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockComponent } from './Events/components/block-books/block.component';
import { ViewfilmsComponent } from './Events/views/viewfilms/viewfilms.component';
import { BlockFilmsComponent } from './Events/components/block-films/block-films.component';
import { BlockGamesComponent } from './Events/components/block-games/block-games.component';
import { ViewgamesComponent } from './Events/views/viewgames/viewgames.component';
import { ViewbiographyComponent } from './Events/views/viewbiography/viewbiography.component';
import { ViewformComponent } from './Events/views/viewform/viewform.component';
import { FormComponent } from './Events/components/form/form.component';
import { ViewrecommendedComponent } from './Events/views/viewrecommended/viewrecommended.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingcartComponent,
    ViewhomeComponent,
    SliderComponent,
    ViewbooksComponent,
    BlockComponent,
    ViewfilmsComponent,
    BlockFilmsComponent,
    BlockGamesComponent,
    ViewgamesComponent,
    ViewbiographyComponent,
    ViewformComponent,
    FormComponent,
    ViewrecommendedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

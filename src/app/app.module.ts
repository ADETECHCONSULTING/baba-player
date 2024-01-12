import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeatureComponent } from './feature/feature.component';
import { MusicListComponent } from './music-list/music-list.component';
import { AppStateModule } from './app-state.module';
import { AppEffectsModule } from './app.effect.module';
import { GoogleApiKeyModalComponent } from './google-api-key-modal/google-api-key-modal.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FeatureComponent,
    MusicListComponent,
    AppStateModule,
    AppEffectsModule,
    GoogleApiKeyModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

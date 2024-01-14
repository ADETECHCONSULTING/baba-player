import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffectsModule } from './app.effect.module';
import { FeatureComponent } from './feature/feature.component';
import { GoogleApiKeyModalComponent } from './google-api-key-modal/google-api-key-modal.component';
import { HeaderComponent } from './header/header.component';
import { MusicListComponent } from './music-list/music-list.component';
import { StorageEffects } from './store/effects/storage.effects';
import { storageReducer } from './store/reducers/storage.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FeatureComponent,
    MusicListComponent,
    AppEffectsModule,
    GoogleApiKeyModalComponent,
    EffectsModule.forRoot([StorageEffects]),
    StoreModule.forRoot({ storage: storageReducer }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

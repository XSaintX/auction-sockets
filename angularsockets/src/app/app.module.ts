import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './pages/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductRowComponent } from './pages/product-row/product-row.component';

import { SubastaListComponent } from './pages/subasta-list/subasta-list.component';
import { SubastaRowComponent } from './pages/subasta-row/subasta-row.component';
import { SubastaComponent } from './pages/subasta/subasta.component';
import { CountdownModule } from 'ngx-countdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    LoginComponent,
    PanelComponent,
    ProductListComponent,
    ProductRowComponent,
    MainComponent,
    SubastaListComponent,
    SubastaRowComponent,
    SubastaComponent,
  ],
  imports: [
    BrowserModule,
    CountdownModule,
    HttpClientModule,

    FormsModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

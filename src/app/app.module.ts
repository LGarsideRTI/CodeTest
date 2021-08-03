import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './Launches/launches-component';
import { LaunchesService } from './Launches/launches-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxGridModule } from 'igniteui-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PresskitModalComponent } from './Launches/modals/presskit-modal-component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent, 
    PresskitModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    IgxGridModule, NgbModule
  ],
  providers: [LaunchesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

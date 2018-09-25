import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListViewComponent } from './modules/list-view/list-view.component';
import { DetailViewComponent } from './modules/detail-view/detail-view.component';
import { ApiService} from './services/api.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

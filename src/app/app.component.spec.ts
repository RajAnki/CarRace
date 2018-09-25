import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ListViewComponent} from './modules/list-view/list-view.component';
import {DetailViewComponent} from './modules/detail-view/detail-view.component';
import {ApiService} from './services/api.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListViewComponent,
        DetailViewComponent
      ],
      providers: [ApiService, HttpClient, HttpHandler]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

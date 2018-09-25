import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListViewComponent } from './list-view.component';
import {ApiService} from '../../services/api.service';
import {DetailViewComponent} from '../detail-view/detail-view.component';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;
  let apiService: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewComponent, DetailViewComponent],
      providers: [ApiService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    apiService = new ApiService(null);
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    component.detailViewComponent = new DetailViewComponent();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('toggleDetailView function verification', () => {
    component.showDetail = [];
    spyOn(component, 'getSeasons');
    spyOn(component, 'getWorldChampion');
    component.toggleDetailView(0);
    expect(component.showDetail[0]).toBe(true);
  });

  it('getRaceYear function verification', () => {
    const year = component.getRaceYear(0);
    expect(year).toBe(2005);
  });

  it('setSeasonsList function verification', () => {
    component.raceYearIndex = 0;
    component.seasonsList = [];
    const testResponse = {
      'MRData': {
        'RaceTable': {
          'Races' : ['test1', 'test']
        }
      }
    };
    component.setSeasonsList(testResponse);
    expect(component.seasonsList[component.raceYearIndex]).toBe(testResponse.MRData.RaceTable.Races);
  });

  it('setChampion function verification', () => {
    component.raceYearIndex = 0;
    component.worldChampionDetail = [];
    const testResponse = {
      'MRData': {
        'StandingsTable': {
          'StandingsLists' : ['test1', 'test']
        }
      }
    };
    component.setChampion(testResponse);
    expect(component.worldChampionDetail[component.raceYearIndex]).toBe(testResponse.MRData.StandingsTable.StandingsLists);
  });
});

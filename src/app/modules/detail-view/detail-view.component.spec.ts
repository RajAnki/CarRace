import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailViewComponent } from './detail-view.component';

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('getHighlightClass function verification', () => {
    const raceObj = {
      'Results' : [
        {
          'Driver' : {
            'driverId': 'testId'
         }
        }
      ]
    };
    component.worldChampionDetail = [{
      'DriverStandings': [{
        'Driver' : {
          'driverId': 'testId'
        }
      }]
    }];
    const highlightClass = component.getHighlightClass(raceObj);
    expect(highlightClass).toBe('row-highlight');
  });

  it('getWinnerFullName function verification', () => {
    const raceObj = {
      'Results' : [
        {
          'Driver' : {
            'givenName': 'testGivenName',
            'familyName': 'testFamilyName'
          }
        }
      ]
    };

    const winnerFullName = component.getWinnerFullName(raceObj);
    expect(winnerFullName).toBe('testGivenName testFamilyName');
  });
});

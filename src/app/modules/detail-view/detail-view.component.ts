/**
 * @description Component to Show details of race result and world champion
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  @Input('seasonsList')
  public seasonsList: Array<any>;
  @Input('worldChampionDetail')
  public worldChampionDetail: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  /**
   * @description high light the world champion
   * @param raceObj - object of race result
   */
  getHighlightClass(raceObj) {
    if (raceObj !== undefined && this.worldChampionDetail !== undefined) {
      if (raceObj.Results[0].Driver.driverId === this.worldChampionDetail[0].DriverStandings[0].Driver.driverId) {
        return 'row-highlight';
      }
    }
  }

  /**
   * @description get full name of winner
   * @param raceObj - object of race result
   */
  getWinnerFullName(raceObj) {
    return raceObj.Results[0].Driver.givenName + ' ' + raceObj.Results[0].Driver.familyName;
  }
}

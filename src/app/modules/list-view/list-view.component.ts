/**
 * @description Component to Show list of years and get API response for Race results
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {DetailViewComponent} from '../detail-view/detail-view.component';
import {ApiService} from '../../services/api.service';
import {AppConstants} from '../../../assets/app-constant';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  @ViewChild(DetailViewComponent) detailViewComponent;
  public listCount = 11;
  public raceYearIndex: number;
  public seasonsList = [];
  public worldChampionDetail = [];
  public collapseImgSrc = AppConstants.collapseImg;
  public expandImgSrc = AppConstants.expandImg;
  public showDetail = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  /**
   * @description get array for years
   * @param n - number to convert into array item
   */
  getArray(n: number): any[] {
    return Array(n);
  }

  /**
   * @description toggle the view of race details
   * @param index - index of the year for which race result is being shown
   */
  toggleDetailView(index) {
    this.showDetail[index] = !this.showDetail[index];
    if (this.showDetail[index]) {
      this.raceYearIndex = index;
      this.getSeasons(index);
      this.getWorldChampion(index);
    }
  }

  /**
   * @description get the year of Race starting form 2005
   * @param index - index of the year for which race result is being shown
   */
  getRaceYear(index) {
    return (AppConstants.startingYear + index);
  }
  /**
   * @description get the Race results from API for particular year
   * @param index - index of the year for which race result is being shown
   */
  getSeasons(index) {
    const year = this.getRaceYear(index);
    this.apiService.httpGet(year + AppConstants.resultURL).subscribe(res =>
      this.setSeasonsList(res));
  }

  /**
   * @description set the Race result response to show the race details for particular year
   * @param response - response from API
*/
  setSeasonsList(response) {
    this.seasonsList[this.raceYearIndex] = response.MRData.RaceTable.Races;
  }

  /**
   * @description get the world champion from API
   * @param index - index of the year for which race result is being shown
   */
  getWorldChampion(index) {
    const year = this.getRaceYear(index);
    this.apiService.httpGet(year + AppConstants.worldChampionURL) .subscribe(res =>
      this.setChampion(res));
  }

  /**
   * @description set the world champion response
   * @param response - response for API
   */
  setChampion(response) {
    this.worldChampionDetail[this.raceYearIndex] = response.MRData.StandingsTable.StandingsLists;
  }
}

import { HelperService } from 'src/app/services/helper.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit , OnDestroy {

  constructor( public helperService: HelperService) { }


  ngOnInit() {

    this.helperService.navType = 'nav-color';
  }

  ngOnDestroy(): void {
    this.helperService.navType = '';

  }

}

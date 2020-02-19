import { HelperService } from 'src/app/services/helper.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit , OnDestroy {

  constructor( public helperService: HelperService) { }


  ngOnInit() {

    this.helperService.navType = 'nav-color';
  }

  ngOnDestroy(): void {
    this.helperService.navType = '';

  }

}

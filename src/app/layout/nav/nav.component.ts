import { HelperService } from 'src/app/services/helper.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  constructor(public helper: HelperService) {
  }

  public closeNav() {
    $('.check').prop('checked', false);
    console.log('quealquer')
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}

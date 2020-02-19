import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  constructor(public helperService: HelperService) { }

  ngOnInit() {

    this.helperService.navType = 'nav-color';
  }

  ngOnDestroy(): void {
    this.helperService.navType = '';

  }

}

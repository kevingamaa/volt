import { HelperService } from 'src/app/services/helper.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit, OnDestroy {

  constructor(public helperService: HelperService) { }

  ngOnInit() {


    this.helperService.hasFooter = false;

  }

  ngOnDestroy(): void {
    this.helperService.hasFooter = true;

  }

}

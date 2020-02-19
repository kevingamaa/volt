import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelperService } from './../../services/helper.service';



@Component({
  selector: 'app-simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.scss']
})
export class SimulacaoComponent implements OnInit, OnDestroy {


  constructor(public helperService: HelperService) { }

  ngOnInit() {


    this.helperService.hasFooter = false;

  }

  ngOnDestroy(): void {
    this.helperService.hasFooter = true;

  }
}

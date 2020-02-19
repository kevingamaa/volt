import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-escritorios-personalizados',
  templateUrl: './escritorios-personalizados.component.html',
  styleUrls: ['./escritorios-personalizados.component.scss']
})
export class EscritoriosPersonalizadosComponent implements OnInit , OnDestroy {

  constructor(public helperService: HelperService) { }

  ngOnInit() {

    this.helperService.navType = 'nav-color';
  }

  ngOnDestroy(): void {
    this.helperService.navType = '';

  }

}

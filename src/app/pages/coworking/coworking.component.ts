import { HelperService } from 'src/app/services/helper.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-coworking',
  templateUrl: './coworking.component.html',
  styleUrls: ['./coworking.component.scss']
})
export class CoworkingComponent implements OnInit, OnDestroy {
  // public servicos: any[] = [
  //   {
  //     id: 1,
  //     title: 'Posições de Coworking',
  //     description: `
  //     Para profissionais autônomos, pequenas empresas e times enxutos,
  //     oferecemos posições de trabalho compartilhadas, que dão acesso ao ecossistema VOLT,
  //     contemplando serviços completos para seu dia a dia.
  //     `,
  //     cont: `
  //     Aqui você pode optar por uma mesa só sua,
  //     posições rotativas ou até o Work Day.`,
  //     valor: `R$0000,00`
  //   },
  //   {
  //     id: 2,
  //     title: 'Salas Privativas',
  //     description: `
  //     Para profissionais autônomos, pequenas empresas e times enxutos,
  //     oferecemos posições de trabalho compartilhadas, que dão acesso ao ecossistema VOLT,
  //     contemplando serviços completos para seu dia a dia.
  //     `,
  //     cont: `
  //     Aqui você pode optar por uma mesa só sua,
  //     posições rotativas ou até o Work Day.`,
  //     valor: `R$0000,00`
  //   },
  //   {
  //     id: 3,
  //     title: 'Salas de Reunião',
  //     description: `
  //     Para profissionais autônomos, pequenas empresas e times enxutos,
  //     oferecemos posições de trabalho compartilhadas, que dão acesso ao ecossistema VOLT,
  //     contemplando serviços completos para seu dia a dia.
  //     `,
  //     cont: `
  //     Aqui você pode optar por uma mesa só sua,
  //     posições rotativas ou até o Work Day.`,
  //     valor: `R$0000,00`
  //   },
  //   {
  //     id: 4,
  //     title: 'Salas Privadas',
  //     description: `
  //     Para profissionais autônomos, pequenas empresas e times enxutos,
  //     oferecemos posições de trabalho compartilhadas, que dão acesso ao ecossistema VOLT,
  //     contemplando serviços completos para seu dia a dia.
  //     `,
  //     cont: `
  //     Aqui você pode optar por uma mesa só sua,
  //     posições rotativas ou até o Work Day.`,
  //     valor: `R$0000,00`
  //   },
  // ];

  constructor( public helperService: HelperService) { }


  ngOnInit() {

    this.helperService.navType = 'nav-color';
  }

  ngOnDestroy(): void {
    this.helperService.navType = '';

  }

}

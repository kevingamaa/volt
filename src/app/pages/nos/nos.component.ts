import { HelperService } from 'src/app/services/helper.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nos',
  templateUrl: './nos.component.html',
  styleUrls: ['./nos.component.scss']
})
export class NosComponent implements OnInit, OnDestroy {

  public stories: any[] = [
    {
      id: 1,
      image: './assets/photos/marina_belardi.png',
      title: `#VOLTstories`,
      description: `“Fazer parte de uma equipe com espírito jovem
      é aprender algo novo todos os dias. Estamos sempre curiosos
      e atentos, em busca por inovação.”`,
      name: `Marina Belardi`,
      carg: `Arquiteta`
    },
    {
      id: 2,
      image: './assets/photos/valeria_rodrigues.png',
      title: `#VOLTstories`,
      description: `“O VOLT é o meu todo dia - minha casa, minha família”`,
      name: `Valéria Rodrigues`,
      carg: `Administrativo`
    },
    {
      id: 3,
      image: './assets/photos/carolina_carvalho.png',
      title: `#VOLTstories`,
      description: `“Para mim, muito mais que um ambiente agradável para se trabalhar,
      é importante se sentir acolhida e respeitada. No VOLT, sinto que posso ser eu
      mesma e me desafio a me tornar a melhor versão de mim todos os dias.”`,
      name: `Carolina Carvalho`,
      carg: `CMO - Chief Marketing Officer`
    }
  ];

  public activeStorie: any = {};

  storieConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
  };

  constructor( public helperService: HelperService) { }

  public clicouNoSlide(slide: any) {
    console.log(slide);
    this.activeStorie = slide;
  }

  ngOnInit() {

    this.helperService.navType = 'nav-color';
    this.activeStorie = this.stories[0];
  }

  teste() {
    console.log('teste');
  }

  slickInit(e) {
      console.log('slick initialized');
  }

  breakpoint(e) {
      console.log('breakpoint');
  }

  afterChange(e) {
      this.activeStorie = this.stories[e.currentSlide];
  }

  beforeChange(e) {
  }

  ngOnDestroy(): void {
    this.helperService.navType = '';

  }

}

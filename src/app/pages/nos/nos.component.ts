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
      image: './assets/photos/volt-stories.png',
      title: `#VOLTstories`,
      description: `“Lorem ipsum dolor
      sit amet, consectetur
      adipiscing elit.”`,
      name: `Danilo Mendes`,
      carg: `Diretor de Marketing na VOLT`
    },
    {
      id: 2,
      image: './assets/photos/estrutura-volt.png',
      title: `#VOLTstories`,
      description: `“!Lorem ipsum dolor
      sit amet, consectetur
      adipiscing elit.!”`,
      name: `Danilo M.`,
      carg: `VOLT`
    }
  ];

  public activeStorie: any = {};

  storieConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
    console.log('teste')
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

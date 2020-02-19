import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public historias: any[] = [  // atributo
        {
            id: 1,
            logo: './assets/logos/rappi-logo.png',
            nome: `Diego Navarro`,
            tittle: `Diretor de Marketing na Rappi`,
            description: `
      “Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer
            consequat tincidunt urna ullamcorper vehicula. Donec tincidunt, lacus
            sit amet efficitur dapibus, ex augue consequat erat."
      `,
            image: './assets/photos/escritorio-rappi-volt.png'
        },
        {
            id: 2,
            logo: './assets/logos/rappi-logo.png',
            nome: `Diego Navarro`,
            tittle: `Diretor de Marketing na Rappi`,
            description: `
            “!Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer
            consequat tincidunt urna ullamcorper vehicula. Donec tincidunt, lacus
            sit amet efficitur dapibus, ex augue consequat erat!"
      `,
            image: './assets/photos/escritorio-rappi-volt.png'
        }

    ];

    public activeHistoria: any  = {};  // atributo

    historiaConfig = {  // atributo
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    // atributos acima do construtor
    constructor() { }
    // metodos abaixo do construtor


    public clicouNoSlide(slide: any) {  // metodo
        console.log(slide);
        this.activeHistoria = slide;
    }

    ngOnInit() {  // metodo
        this.activeHistoria = this.historias[0]
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
        this.activeHistoria = this.historias[e.currentSlide];
    }

    beforeChange(e) {
    }
}

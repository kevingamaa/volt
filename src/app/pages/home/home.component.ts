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
            // nome: `Diego Navarro`,
            // tittle: `Diretor de Marketing na Rappi`,
            description: `
      “Primeiro escritório Rappi Brasil, entrega em 21 dias.
      Empresas com operações dinâmicas precisam de uma estrutura
      simples, mas funcional. Após a entrega das chaves,
      realizamos a gestão do escritório para impulsionar a
      produtividade de uma equipe que exige foco total."
      `,
            image: './assets/photos/escritorio-rappi-volt.png'
        },
        {
            id: 2,
            logo: './assets/logos/mar-logo.png',
            // nome: `Diego Navarro`,
            // tittle: `Diretor de Marketing na Rappi`,
            description: `
            “Escritório MAR Ventures, modelo Potencial. Reunimos o desejo
            por qualidade do cliente versus seus recursos e o resultado
            foi uma solução custo benefício, sem perder o conforto e a
            estética."
      `,
            image: './assets/photos/escritorio-mar-ventures.png'
        },
        {
          id: 3,
          logo: './assets/logos/arvore-logo.png',
          // nome: `Diego Navarro`,
          // tittle: `Diretor de Marketing na Rappi`,
          description: `
          “Escritório Arvore, empresa que desenvolve experiências
          interativas usando tecnologias imersivas, como Realidade
          Virtual, Aumentada e Mista. Em conjunto com fornecedores
          indicados pelo cliente, buscamos refletir o propósito da
          empresa no escritório, criando espaços customizados para
          experimentação de seus produtos. O resultado foi um
          escritório inovador e tecnológico, com investimento dentro
          do budget estipulado."
    `,
          image: './assets/photos/escritorio-arvore.png'
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

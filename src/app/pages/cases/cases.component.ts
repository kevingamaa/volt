import { HelperService } from 'src/app/services/helper.service';
import { Component, OnInit, OnDestroy, HostListener, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { SlickItemDirective, SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
    selector: 'app-cases',
    templateUrl: './cases.component.html',
    styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit, OnDestroy {
    public cases: any[] = [
        {
            title: 'Diego Navarro',
            subtitle: 'Diretor de marketing Rappy',
            description: ' "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"',
            images: [{ url: './assets/photos/autor.png' }]
        },
        {
            title: 'Teste',
            subtitle: 'Diretor de marketing Marketing Manager',
            description: ' "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"',
            images: [{ url: './assets/photos/autor.png' }]
        },
        {
            title: 'Teste 1',
            subtitle: 'Diretor de marketing Volt',
            description: ' "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"',
            images: [{ url: './assets/photos/autor.png' }]
        },
    ];

    public slideConfig = {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
    };
    public scrollCount: number = 0;
    public oppacityCtrl = 1;
    public body: HTMLElement;
    public breakPoints: any[] = [413, 250, 600]
    constructor(public helper: HelperService) { }


    ngOnInit() {
        this.body = document.querySelector('body');
        // this.body.classList.add('paralax');
        this.helper.navType = 'nav-color';
        // this.helperService.hasFooter = false;
    }

  
    onscroll(event: any) {
        // this.scrollCount = window.pageYOffset;
        this.scrollCount = event.srcElement.scrollTop;
    }

 


    ngOnDestroy(): void {
        this.helper.navType = '';
        this.body.classList.remove('paralax')
        this.helper.hasFooter = true;
    }



    slickInit(e) {
        console.log(e.slick.slickNext());
    }

    breakpoint(e) {
        console.log('breakpoint');
    }

    afterChange(e) {
        console.log('afterChange');
    }

    beforeChange(e) {
        console.log('beforeChange');
    }
}

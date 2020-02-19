import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';


@Injectable({
    providedIn: 'root'
})
export class HelperService {

    public navType = 'nav-trasparent';
    public hasFooter = true;
    public hasNav = true;
    public isMobile: boolean;
    public loading = new BehaviorSubject(false);
    public navOpen: boolean;
    public content = 'nav';

    public userToLogin: any;
    public drawer: MatDrawer;
    constructor(
        private breakpointObserver: BreakpointObserver,

    ) {
        this.breakpointObserver.observe(['(min-width: 767px)'])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.isMobile = false;
                } else {
                    this.isMobile = true;
                }
            });
    }

    get isLoading() {
        return this.loading.getValue();
    }
    public scroll(id, effect = true): void {
        const el = document.getElementById(id);
        if (effect) {
            el.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            el.scrollIntoView();
        }
    }


    public async startLoading() {
        this.loading.next(await true);
    }

    public async stopLoading() {
        this.loading.next(await false);
    }


    public toggleNav(content: any = 'nav', close: boolean = true) {
        if (close) {
            this.navOpen = this.navOpen ? false : true;
        }
        if (this.content) {
            this.content = content;
        }
    }


    public closeNav(e) {
        // console.log(e.target);
        if (e.target.id === 'menu') {
            this.toggleNav();
        }
    }


    // date(date: any = new Date()) {
    //     return moment(date)
    //     .parseZone()
    //     .locale(window.navigator.language);
    // }

}

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CmsService {
    private apiUrl = environment.cms.url;
    private key: string;
    private domain: string;
    private httpOptions: any = {
        headers: new HttpHeaders({
            Authorization: `Bearer ${environment.cms.key}`,
            domain: environment.cms.domain,
            'cache-control': 'no-cache',
        })
    };
    public event: any;
    public route: string;
    constructor(private http: HttpClient) {
        this.route = '';
    }


    setCredentials(key: string, domain: string) {
        this.domain = domain;
        this.key = key;
    }

    pullItems(route: string) {
        this.route = route;
        return this;
    }

    getAll(options = {}): Observable<any> {
        this.checkRoute();
        let url = '';
        url = `${this.apiUrl}/${this.route}/listar?${this.buildParans(options)}`;
        // console.log(url)
        return this.http.get<any>(url, this.httpOptions)
            .pipe(
                retry(10),
                map((response: any) => {
                    if (response.data !== undefined) {
                        return this.mapRespose(response, true);
                    } else {
                        return this.mapRespose(response);
                    }
                })
            );
    }



    find(id, options = { count_view: 0, tags: true }): Observable<any> {
        // console.log('dsadsa')
        return this.http.get<any>(`${this.apiUrl}/${this.route}/detalhes?id=[${id}]&tags=${options.tags}&new_view=${options.count_view}`,
            this.httpOptions)
            .pipe(
                retry(10),
                map((response: any) => {
                    return this.mapRespose(response);
                })
            );
    }

    customGet(options = {}): Observable<any> {
        this.checkRoute();
        return this.http.get<any>(`${this.apiUrl}/${this.route}?${this.buildParans(options)}`, this.httpOptions)
            .pipe(
                retry(10),
                map((response: any) => {
                    return this.mapRespose(response);
                })
            );
    }

    public mapRespose(response, paginate?) {
        if (paginate) {
            response.data.map((item: any) => {
                if (item.images) {
                    item.images = JSON.parse(item.images);
                    item.thumbs = JSON.parse(item.thumbs);
                }
            });
        } else {
            if (Array.isArray(response)) {
                response.map((item: any) => {
                    if (item.images) {
                        item.images = JSON.parse(item.images);
                        item.thumbs = JSON.parse(item.thumbs);
                    }
                });
            } else {
                if (response.images) {
                    response.images = JSON.parse(response.images);
                    response.thumbs = JSON.parse(response.thumbs);
                }
            }
        }
        return response;
    }

    send(data) {
        return this.http.post(`${this.apiUrl}/contato/send`, data, this.httpOptions);
    }

    public download(url, name) {
        const ext = url.split('.');
        window.open(
            `${this.defaultURL}/downloadImage?path=${url}&name=${name.replace(/ /g, '-')}&ext=.${ext[ext.length - 1]}`,
            '_blank' // <- This is what makes it open in a new window.
        );
    }

    checkRoute() {
        if (!this.route) {
            console.error(`Declarar rota com cmsService. exemplo: cmsService.route('exemplo') `);
        }
    }


    get defaultURL() {
        return this.apiUrl;
    }
    buildParans(options: any) {
        let parans = '';
        for (const key in options) {
            if (key) {
                parans += `${key}=${JSON.stringify(options[key])}&`;
            }
        }
        return parans;
    }

}

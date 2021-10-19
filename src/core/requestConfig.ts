import { HttpHeaders, HttpParams } from "@angular/common/http";

export class RequestConfig {

    url: string;
    body?: any;
    params?: HttpParams | { [param: string]: string | string[]; };
    headers?: HttpHeaders | { [header: string]: string | string[]; };
    responseType?: 'json';
    observe: 'response';
    responseKey: string;
    onlyHttpStatus: boolean;

    constructor() {
        this.observe = 'response';
    }

    public set(key: string, value: any) {
        this[key] = value;
        return this;
    }
}
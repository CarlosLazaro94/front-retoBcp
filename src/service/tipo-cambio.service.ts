import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { TipoCambioList } from "src/administrar-tipoCambio/Model/tipoCambioList";
import { Rest } from "src/core/rest";
import { environment } from "src/environments/environment";
import { ErrorHandler } from "./error-handler";
import { TipoCambio } from "src/administrar-tipoCambio/Model/tipoCambio";
import { TipoCambioRequest } from "src/administrar-tipoCambio/Model/tipoCambioRequest";

const BASE_URL = environment.postTipoCambio;
const token = environment.token;

@Injectable({
    providedIn: "root",
})

export class TipoCambioService {
    constructor(private http: HttpClient) { }

    public async getTipoCambio(tipoCambio: TipoCambioRequest): Promise<TipoCambioList> {
        
        const headers = {headers: new HttpHeaders({Authorization: token})};

        return this.http
            .post(BASE_URL, tipoCambio, headers)
            .pipe(map((response: TipoCambioList) => response))
            .toPromise()
            .catch(ErrorHandler.handlerHttpError);
    }

}
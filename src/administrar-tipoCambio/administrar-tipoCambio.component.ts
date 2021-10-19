import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { TipoCambioService } from "src/service/tipo-cambio.service";
import { TipoCambio } from "./Model/tipoCambio";
import { TipoCambioRequest } from "./Model/tipoCambioRequest";

@Component({
    selector: 'app-tipoCambio',
    templateUrl: './administrar-tipoCambio.component.html',
    styleUrls: ['./administrar-tipoCambio.component.css']
  })

export class AdministrarTipoCambio implements OnInit {
    initialFormGroup: FormGroup;
    dataSource: MatTableDataSource<TipoCambio>
    headers = ['amount','amountExchangeRate','originCoin','destinyCoin','exchangeRate'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('detailTable', {read: MatTableDataSource}) dataSourceDetails: MatTableDataSource<TipoCambio>;
    @ViewChild(MatSort) sort: MatSort

    constructor(
        private _formBuilder: FormBuilder,
        private service: TipoCambioService,
    ){}
    
    ngOnInit() {
        this.setTipCambioDataSource().then(r => {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
      }
    
      private async setTipCambioDataSource() {
        const tipoCambio = Object.create(TipoCambioRequest);
        tipoCambio.amount = "1";
        tipoCambio.originCoin = "PEN"
        tipoCambio.destinyCoin = "USD"
        const response = await this.service.getTipoCambio(tipoCambio);
        console.log(response)
        const arrayitem = [];

        arrayitem.push(response);
        console.log(arrayitem)

        this.dataSource = new MatTableDataSource(arrayitem.map(item => item['exchangeRate']));
      }
    
    
}
import {MatTableDataSource} from '@angular/material';
import { TipoCambio } from './tipoCambio';
import { TipoCambioList } from './tipoCambioList';

export class BlackListOperation {
  private pathVariable: TipoCambioList;
  private index: number;
  private title: string;
  private operation: string;
  private dataSource: MatTableDataSource<TipoCambio>;
}

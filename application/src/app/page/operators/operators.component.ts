import { Component, OnInit } from '@angular/core';
import { OperatorsService } from './operator.service';
import { IOperator } from './IOperator';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.scss',
  providers: [OperatorsService],
})
export class OperatorsComponent implements OnInit {
  operators!: IOperator[];

  constructor(private operatorService: OperatorsService) {}

  ngOnInit() {
    this.operatorService.getProducts().then((data) => {
      this.operators = data;
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'MANAGER':
        return 'success';
      case 'VIEWER':
        return 'danger';
      default:
        throw new Error('Input non valido');
    }
  }
}

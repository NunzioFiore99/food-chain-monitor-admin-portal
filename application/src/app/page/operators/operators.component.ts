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
  visible: boolean = false;

  operator = {
    name: '',
    code: '',
    company: '',
    role: null,
  };

  roles = [
    { label: 'Manager', value: 'manager' },
    { label: 'Viewer', value: 'viewer' },
  ];

  constructor(private operatorService: OperatorsService) {}

  ngOnInit() {
    this.operatorService.getOperators().then((data) => {
      this.operators = data;
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'MANAGER':
        return 'info';
      case 'VIEWER':
        return 'warning';
      default:
        throw new Error('Input non valido');
    }
  }

  addOperator() {
    this.visible = !this.visible;

    this.clearBox();
  }

  clearBox() {
    this.operator.name = '';
    this.operator.code = '';
    this.operator.company = '';
    this.operator.role = null;
  }
}

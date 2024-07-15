import { Component, OnInit } from '@angular/core';
import { OperatorsService } from './operator.service';
import { IOperator } from './IOperator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.scss',
  providers: [OperatorsService],
})
export class OperatorsComponent implements OnInit {
  operators!: IOperator[];
  private subscription!: Subscription;
  visible: boolean = false;

  operator: IOperator = {
    id: '',
    image: '',
    code: '',
    name: '',
    company: '',
    role: '',
  };
  roles = [
    { label: 'Manager', value: 'MANAGER' },
    { label: 'Viewer', value: 'VIEWER' },
  ];

  constructor(private operatorService: OperatorsService) {}

  ngOnInit() {
    this.subscription = this.operatorService.operators$.subscribe(
      (operators) => {
        console.log(operators);
        this.operators = operators;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getSeverity(status: string) {
    switch (status) {
      case 'MANAGER':
        return 'info';
      case 'VIEWER':
        return 'warning';
      default:
        return 'secondary';
    }
  }

  showModal() {
    this.visible = !this.visible;
  }

  addOperator() {
    this.visible = !this.visible;
    this.operatorService.addOperator(this.operator);
    this.clearBox();
  }

  deleteOperator(id: string) {
    this.operatorService.removeOperator(id);
  }

  clearBox() {
    this.operator.name = '';
    this.operator.code = '';
    this.operator.company = '';
    this.operator.role = '';
  }
}

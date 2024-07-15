import { Injectable } from '@angular/core';
import { IOperator } from './IOperator';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OperatorsService {
  private operatorsSubject = new BehaviorSubject<IOperator[]>([]);
  public operators$ = this.operatorsSubject.asObservable();
  public operatorList: IOperator[] = [
    {
      id: '1',
      image: '../../../../assets/img/manager1.jpg',
      code: 'OP001',
      name: 'John Doe',
      company: 'Food Company SPA',
      role: 'MANAGER',
    },
    {
      id: '2',
      image: '../../../../assets/img/operaio1.jpg',
      code: 'OP002',
      name: 'Alice Smith',
      company: 'Food Company SPA',
      role: 'VIEWER',
    },
    {
      id: '3',
      image: '../../../../assets/img/operaio2.jpg',
      code: 'OP003',
      name: 'Bob Johnson',
      company: 'Food Company SPA',
      role: 'VIEWER',
    },
    {
      id: '4',
      image: '../../../../assets/img/operaio3.jpg',
      code: 'OP004',
      name: 'Mary Brown',
      company: 'Food Company SPA',
      role: 'VIEWER',
    },
    {
      id: '5',
      image: '../../../../assets/img/manager2.jpeg',
      code: 'OP005',
      name: 'David Wilson',
      company: 'Box Enterprises SRL',
      role: 'MANAGER',
    },
    {
      id: '6',
      image: '../../../../assets/img/operaio1.jpg',
      code: 'OP006',
      name: 'Sarah Lee',
      company: 'Box Enterprises SRL',
      role: 'VIEWER',
    },
    {
      id: '7',
      image: '../../../../assets/img/operaio2.jpg',
      code: 'OP007',
      name: 'James Miller',
      company: 'Box Enterprises SRL',
      role: 'VIEWER',
    },
    {
      id: '8',
      image: '../../../../assets/img/manager3.png',
      code: 'OP008',
      name: 'Emily Davis',
      company: 'GreenHarvest SPA',
      role: 'MANAGER',
    },
    {
      id: '9',
      image: '../../../../assets/img/operaio4.jpg',
      code: 'OP009',
      name: 'Michael White',
      company: 'GreenHarvest SPA',
      role: 'VIEWER',
    },
    {
      id: '10',
      image: '../../../../assets/img/operaio3.jpg',
      code: 'OP010',
      name: 'Linda Taylor',
      company: 'GreenHarvest SPA',
      role: 'VIEWER',
    },
    {
      id: '11',
      image: '../../../../assets/img/manager1.jpg',
      code: 'OP011',
      name: 'John Doe',
      company: 'Food Company SPA',
      role: 'MANAGER',
    },
    {
      id: '12',
      image: '../../../../assets/img/operaio1.jpg',
      code: 'OP012',
      name: 'Alice Smith',
      company: 'Food Company SPA',
      role: 'VIEWER',
    },
    {
      id: '13',
      image: '../../../../assets/img/operaio2.jpg',
      code: 'OP013',
      name: 'Bob Johnson',
      company: 'Food Company SPA',
      role: 'VIEWER',
    },
    {
      id: '14',
      image: '../../../../assets/img/operaio4.jpg',
      code: 'OP014',
      name: 'Mary Brown',
      company: 'Food Company SPA',
      role: 'VIEWER',
    },
    {
      id: '15',
      image: '../../../../assets/img/manager2.jpeg',
      code: 'OP015',
      name: 'David Wilson',
      company: 'Box Enterprises SRL',
      role: 'MANAGER',
    },
    {
      id: '16',
      image: '../../../../assets/img/operaio1.jpg',
      code: 'OP016',
      name: 'Sarah Lee',
      company: 'Box Enterprises SRL',
      role: 'VIEWER',
    },
    {
      id: '17',
      image: '../../../../assets/img/operaio2.jpg',
      code: 'OP017',
      name: 'James Miller',
      company: 'Box Enterprises SRL',
      role: 'VIEWER',
    },
    {
      id: '18',
      image: '../../../../assets/img/manager3.png',
      code: 'OP018',
      name: 'Emily Davis',
      company: 'GreenHarvest SPA',
      role: 'MANAGER',
    },
    {
      id: '19',
      image: '../../../../assets/img/operaio4.jpg',
      code: 'OP019',
      name: 'Michael White',
      company: 'GreenHarvest SPA',
      role: 'VIEWER',
    },
    {
      id: '20',
      image: '../../../../assets/img/operaio3.jpg',
      code: 'OP020',
      name: 'Linda Taylor',
      company: 'GreenHarvest SPA',
      role: 'VIEWER',
    },
  ];

  constructor() {
    // Inizializza la lista di operatori
    this.operatorsSubject.next(this.operatorList);
  }

  addOperator(operator: IOperator) {
    operator.id = (this.operatorList.length + 1).toString();
    operator.image =
      operator.role == 'MANAGER'
        ? '../../../../assets/img/manager1.jpg'
        : '../../../../assets/img/operaio1.jpg';

    var op: IOperator = {
      id: operator.id,
      image: operator.image,
      code: operator.code,
      name: operator.name,
      company: operator.company,
      role: operator.role,
    };
    const currentOperators = this.operatorsSubject.value;
    this.operatorsSubject.next([...currentOperators, op]);
  }

  updateOperator(updatedOperator: IOperator) {
    const currentOperators = this.operatorsSubject.value.map((operator) =>
      operator.id === updatedOperator.id ? updatedOperator : operator
    );
    this.operatorsSubject.next(currentOperators);
  }

  removeOperator(operatorId: string) {
    const currentOperators = this.operatorsSubject.value.filter(
      (operator) => operator.id !== operatorId
    );
    this.operatorsSubject.next(currentOperators);
  }
}

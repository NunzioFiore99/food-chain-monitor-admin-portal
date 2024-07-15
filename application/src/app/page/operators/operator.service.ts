import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOperator } from './IOperator';

@Injectable()
export class OperatorsService {
  IOperator: IOperator = {
    id: '',
    image: '',
    code: '',
    name: '',
    company: '',
    role: '',
  };

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

  getOperatorsData() {
    return this.operatorList;
  }

  getOperators() {
    return Promise.resolve(this.getOperatorsData());
  }

  addOperator(name: string, code: string, company: string, role: string) {
    let operator: IOperator = {
      id: (this.operatorList.values.length + 1).toString(),
      image:
        role == 'MANAGER'
          ? '../../../../assets/img/manager1.jpg'
          : '../../../../assets/img/operaio1.jpg',
      code: code,
      name: name,
      company: company,
      role: role,
    };

    this.operatorList.push(operator);
  }
}

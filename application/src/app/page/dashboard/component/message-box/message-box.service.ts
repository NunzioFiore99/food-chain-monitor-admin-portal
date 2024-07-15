import { Injectable } from '@angular/core';

@Injectable()
export class MessageBoxService {
  getData() {
    return [
      {
        id: 1000,
        representative: {
          name: 'John Doe',
          image: '../../../../assets/img/manager1.jpg',
        },
        message:
          'The production line has been experiencing intermittent downtime due to power fluctuations.',
        country: {
          name: 'Italy',
          code: 'it',
        },
        company: 'Food Company SPA',
        date: '2024-01-15',
        status: 'HIGH',
      },
      {
        id: 1001,
        representative: {
          name: 'David Wilson',
          image: '../../../../assets/img/manager2.jpeg',
        },
        message:
          'There is a shortage of raw materials, and we may need to halt production temporarily.',
        country: {
          name: 'Italy',
          code: 'it',
        },
        company: 'Box Enterprises SRL',
        date: '2024-03-10',
        status: 'MEDIUM',
      },
      {
        id: 1002,
        representative: {
          name: 'Emily Davis',
          image: '../../../../assets/img/manager3.png',
        },
        message:
          'The packaging machine is malfunctioning, causing delays in the packing process.',
        country: {
          name: 'Italy',
          code: 'it',
        },
        company: 'GreenHarvest SPA',
        date: '2024-04-05',
        status: 'HIGH',
      },
      {
        id: 1003,
        representative: {
          name: 'John Doe',
          image: '../../../../assets/img/manager1.jpg',
        },
        message:
          'There is a need for additional training sessions for the new staff on the night shift.',
        country: {
          name: 'Italy',
          code: 'it',
        },
        company: 'Food Company SPA',
        date: '2024-02-20',
        status: 'LOW',
      },
      {
        id: 1004,
        representative: {
          name: 'John Doe',
          image: '../../../../assets/img/manager1.jpg',
        },
        message:
          'We have received several complaints about the quality of the pasta from our recent batches.',
        country: {
          name: 'Italy',
          code: 'it',
        },
        company: 'Food Company SPA',
        date: '2023-12-30',
        status: 'MEDIUM',
      },
      {
        id: 1005,
        representative: {
          name: 'Emily Davis',
          image: '../../../../assets/img/manager3.png',
        },
        message:
          'The quality control system needs an urgent software update to avoid incorrect readings.',
        country: {
          name: 'Italy',
          code: 'it',
        },
        company: 'GreenHarvest SPA',
        date: '2024-05-12',
        status: 'HIGH',
      },
      {
        id: 1006,
        representative: {
          name: 'John Doe',
          image: '../../../../assets/img/manager1.jpg',
        },
        message:
          'Our warehouse is almost at full capacity; we need to expedite shipments.',
        country: {
          name: 'Italy',
          code: 'it',
        },
        company: 'Food Company SPA',
        date: '2024-01-28',
        status: 'MEDIUM',
      },
      {
        id: 1007,
        representative: {
          name: 'John Doe',
          image: '../../../../assets/img/manager1.jpg',
        },
        message:
          'The conveyor belts need maintenance; they are making unusual noises.',
        country: {
          name: 'Italy',
          code: 'it',
        },
        company: 'Food Company SPA',
        date: '2024-03-15',
        status: 'HIGH',
      },
      {
        id: 1008,
        representative: {
          name: 'David Wilson',
          image: '../../../../assets/img/manager2.jpeg',
        },
        message:
          'We have observed a decline in the efficiency of the milling machines.',
        country: {
          name: 'Italy',
          code: 'it',
        },
        company: 'Box Enterprises SRL',
        date: '2024-02-25',
        status: 'MEDIUM',
      },
    ];
  }

  getMessagesLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  }
}

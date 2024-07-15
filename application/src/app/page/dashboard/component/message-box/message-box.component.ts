import { Component, OnInit } from '@angular/core';
import { MessageBoxService } from './message-box.service';
import { Table } from 'primeng/table';
import { IMessage, IRepresentative } from './message';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.scss',
  providers: [MessageBoxService],
})
export class MessageBoxComponent implements OnInit {
  messages!: IMessage[];

  representatives!: IRepresentative[];
  selectedRepresentatives: any[] = [];

  statuses!: any[];
  selectedStatus: any;

  loading: boolean = true;

  constructor(private messageBoxService: MessageBoxService) {}

  ngOnInit() {
    this.messageBoxService.getMessagesLarge().then((messages) => {
      this.messages = messages;
      this.loading = false;

      this.messages.forEach(
        (message) => (message.date = new Date(<Date>message.date))
      );
    });

    this.representatives = [
      { name: 'John Doe', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
    ];

    this.statuses = [
      { label: 'HIGH', value: 'HIGH' },
      { label: 'MEDIUM', value: 'MEDIUM' },
      { label: 'LOW', value: 'LOW' },
    ];
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: string) {
    switch (status) {
      case 'HIGH':
        return 'danger';
      case 'MEDIUM':
        return 'warning';
      case 'LOW':
        return 'success';
      default:
        return 'danger';
    }
  }
}

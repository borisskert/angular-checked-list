import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Item {
  id: string;
  title: string;
  description: string;
  isChecked: boolean
}

export interface ItemChange {
  id: string;
  hasBeenChecked: boolean;
}

@Component({
  selector: 'app-checked-list',
  templateUrl: './checked-list.component.html',
  styleUrls: ['./checked-list.component.scss']
})
export class CheckedListComponent implements OnInit {

  @Input() items: Item[] = [];

  @Output() itemsChanged: EventEmitter<ItemChange> = new EventEmitter<ItemChange>();

  ngOnInit(): void {
  }

  onCheck($event: boolean, id: string) {
    this.itemsChanged.emit({
      id,
      hasBeenChecked: $event
    });
  }
}

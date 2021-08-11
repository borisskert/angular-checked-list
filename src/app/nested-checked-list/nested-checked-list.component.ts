import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item, ItemChange} from "../checked-list/checked-list.component";

export interface ParentItem {
  id: string;
  title: string;
  description: string;
  subItems: Item[];
  isChecked: boolean;
}

export interface SubItemsChange {
  id: string;
  subItemId: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-nested-checked-list',
  templateUrl: './nested-checked-list.component.html',
  styleUrls: ['./nested-checked-list.component.scss']
})
export class NestedCheckedListComponent implements OnInit {

  @Input() items: ParentItem[] = [];

  @Output() itemsChanged: EventEmitter<ItemChange> = new EventEmitter<ItemChange>();
  @Output() subItemsChanged: EventEmitter<SubItemsChange> = new EventEmitter<SubItemsChange>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubItemsChanged($event: ItemChange, id: string) {
    this.subItemsChanged.emit({
      id,
      subItemId: $event.id,
      isChecked: $event.isChecked,
    });
  }

  onCheck($event: boolean, id: string) {
    this.itemsChanged.emit({
      id,
      isChecked: $event
    });
  }
}

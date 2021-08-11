import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Item {
  id: string;
  title: string;
  description: string;
  isChecked: boolean
}

export interface Changes {
  [id: string]: boolean
}

@Component({
  selector: 'app-checked-list',
  templateUrl: './checked-list.component.html',
  styleUrls: ['./checked-list.component.scss']
})
export class CheckedListComponent implements OnInit {

  @Input() items: Item[] = [];

  @Output() itemsChanged: EventEmitter<Changes> = new EventEmitter<{}>();

  private changes: Changes = {};

  ngOnInit(): void {
    this.changes = this.items.map(item => ({
      [item.id]: item.isChecked
    })).reduce(
      (p, c) => ({...p, ...c}),
      {}
    );
  }

  onCheck($event: boolean, id: string) {
    this.changes = {
      ...this.changes,
      [id]: $event
    };

    this.itemsChanged.emit(this.changes);
  }
}

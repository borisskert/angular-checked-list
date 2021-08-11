import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item, ItemChange} from "../checked-list/checked-list.component";


@Component({
  selector: 'app-nested-checked-list-item',
  templateUrl: './nested-checked-list-item.component.html',
  styleUrls: ['./nested-checked-list-item.component.scss']
})
export class NestedCheckedListItemComponent implements OnInit {

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() subItems: Item[] = []
  @Input() isChecked: boolean = false;

  @Output() check: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() subItemsChange: EventEmitter<ItemChange> = new EventEmitter<ItemChange>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCheck($event: any) {
    const hasBeenChecked = $event.target.checked;

    this.subItems = this.subItems.map(subItem => ({
      ...subItem,
      isChecked: hasBeenChecked
    }));

    this.check.emit(hasBeenChecked);
  }

  onSubItemChanged($event: ItemChange) {
    this.subItemsChange.emit($event);
  }
}

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

  @Output() itemChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() subItemsChange: EventEmitter<ItemChange> = new EventEmitter<ItemChange>();

  public isIndeterminate: boolean = false;
  public isCollapsed: boolean = true;

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

    this.itemChange.emit(hasBeenChecked);
  }

  onSubItemChanged($event: ItemChange) {
    this.subItems = this.subItems.map(subItem => {
      if (subItem.id === $event.id) {
        return {
          ...subItem,
          isChecked: $event.hasBeenChecked,
        };
      } else {
        return subItem;
      }
    });

    this.isIndeterminate = this.subItems.some(subItem => subItem.isChecked)
      && this.subItems.some(subItem => !subItem.isChecked);

    this.isChecked = this.subItems.filter(subItem => subItem.isChecked).length === this.subItems.length

    this.subItemsChange.emit($event);
  }

  onCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}

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

  private values: ItemValues = ItemValues.empty();

  constructor() {
  }

  ngOnInit(): void {
    this.subItems.forEach(subItem => {
      this.values = this.values.with(subItem.id, subItem.isChecked);
    });
  }

  onCheck($event: any) {
    const hasBeenChecked = $event.target.checked;
    this.isChecked = hasBeenChecked;
    this.values = this.values.withAll(hasBeenChecked);

    this.subItems = this.subItems.map(subItem => ({
      ...subItem,
      isChecked: hasBeenChecked
    }));

    this.itemChange.emit(hasBeenChecked);
  }

  onSubItemChanged($event: ItemChange) {
    const newItemVales = this.values.with($event.id, $event.hasBeenChecked);

    this.isIndeterminate = newItemVales.isIndeterminate();
    this.isChecked = newItemVales.areAllTrue();

    this.subItemsChange.emit($event);

    if(newItemVales.areAllTrue() && !this.values.areAllTrue()) {
      this.itemChange.emit(true);
    } else if(newItemVales.areAllFalse() && !this.values.areAllFalse()) {
      this.itemChange.emit(false);
    }

    this.values = newItemVales;
  }

  onCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}

class ItemValues {
  private constructor(private readonly values: {[id: string]: boolean}) {
  }

  with(id: string, value: boolean): ItemValues {
    return new ItemValues({
      ...this.values,
      [id]: value,
    });
  }

  withAll(value: boolean): ItemValues {
    const newValues = Object.keys(this.values).map(key => ({[key]: value}))
      .reduce(
        (p, c) => ({...p, ...c}),
        {}
      );

    return new ItemValues(newValues);
  }

  get(id: string): boolean {
    return this.values[id];
  }

  isIndeterminate(): boolean {
    return !this.areAllFalse() && !this.areAllTrue();
  }

  areAllTrue(): boolean {
    return Object.values(this.values)
      .filter(value => !value).length === 0;
  }

  areAllFalse(): boolean {
    return Object.values(this.values)
      .filter(value => value).length === 0;
  }

  static empty(): ItemValues {
    return new ItemValues({});
  }

  static of(values: {[id: string]: boolean}) {
    return new ItemValues(values);
  }
}

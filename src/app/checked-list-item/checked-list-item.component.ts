import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checked-list-item',
  templateUrl: './checked-list-item.component.html',
  styleUrls: ['./checked-list-item.component.scss']
})
export class CheckedListItemComponent implements OnInit {

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() isChecked: boolean = false;

  @Output() check: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCheck($event: any) {
    this.check.emit($event.target.checked);
  }
}

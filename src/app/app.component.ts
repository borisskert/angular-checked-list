import {Component} from '@angular/core';
import {Changes, Item} from "./checked-list/checked-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Item[] = [
    {
      id: '1',
      title: 'title 1',
      description: 'description 1',
      isChecked: false,
    }, {
      id: '2',
      title: 'title 2',
      description: 'description 2',
      isChecked: false,
    }, {
      id: '3',
      title: 'title 3',
      description: 'description 3',
      isChecked: false,
    }, {
      id: '4',
      title: 'title 4',
      description: 'description 4',
      isChecked: false,
    }
  ];

  public changes: Changes = {};

  onItemChanged($event: Changes) {
    this.changes = $event;
  }
}

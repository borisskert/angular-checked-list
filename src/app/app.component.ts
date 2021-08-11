import {Component, OnInit} from '@angular/core';
import {ItemChange} from "./checked-list/checked-list.component";
import {ParentItem, SubItemsChange} from "./nested-checked-list/nested-checked-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: ParentItem[] = [
    {
      id: '1',
      title: 'title 1',
      description: 'description 1',
      subItems: [
        {
          id: '11',
          title: 'title 11',
          description: 'description 11',
          isChecked: false,
        },
        {
          id: '12',
          title: 'title 12',
          description: 'description 12',
          isChecked: false,
        },
        {
          id: '13',
          title: 'title 13',
          description: 'description 13',
          isChecked: false,
        }
      ],
      isChecked: false,
    }, {
      id: '2',
      title: 'title 2',
      description: 'description 2',
      subItems: [
        {
          id: '21',
          title: 'title 21',
          description: 'description 21',
          isChecked: false,
        },
        {
          id: '22',
          title: 'title 22',
          description: 'description 22',
          isChecked: false,
        },
        {
          id: '23',
          title: 'title 23',
          description: 'description 23',
          isChecked: false,
        }
      ],
      isChecked: false,
    }, {
      id: '3',
      title: 'title 3',
      description: 'description 3',
      subItems: [
        {
          id: '31',
          title: 'title 31',
          description: 'description 31',
          isChecked: false,
        },
        {
          id: '32',
          title: 'title 32',
          description: 'description 32',
          isChecked: false,
        },
        {
          id: '33',
          title: 'title 33',
          description: 'description 33',
          isChecked: false,
        }
      ],
      isChecked: false,
    }, {
      id: '4',
      title: 'title 4',
      description: 'description 4',
      subItems: [
        {
          id: '41',
          title: 'title 41',
          description: 'description 41',
          isChecked: false,
        },
        {
          id: '42',
          title: 'title 42',
          description: 'description 42',
          isChecked: false,
        },
        {
          id: '43',
          title: 'title 43',
          description: 'description 43',
          isChecked: false,
        }
      ],
      isChecked: false,
    }
  ];

  public changes: { [id: string]: boolean } = {};
  public subChanges: {
    [id: string]: {
      [id: string]: boolean
    }
  } = {};

  ngOnInit(): void {
  }

  onItemChanged($event: ItemChange) {
    this.changes[$event.id] = $event.isChecked;
  }

  onSubItemsChanged($event: SubItemsChange) {
    const subItemChange = this.subChanges[$event.id] || {};
    subItemChange[$event.subItemId] = $event.isChecked;
    this.subChanges[$event.id] = subItemChange;
  }
}

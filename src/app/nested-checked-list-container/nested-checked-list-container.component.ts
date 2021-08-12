import {Component, OnInit} from '@angular/core';
import {ParentItem, SubItemsChange} from "../nested-checked-list/nested-checked-list.component";
import {ItemChange} from "../checked-list/checked-list.component";

interface Changes {
  [id: string]: {
    hasBeenChecked: boolean,
    subItems: {
      [id: string]: boolean,
    }
  }
}

@Component({
  selector: 'app-nested-checked-list-container',
  templateUrl: './nested-checked-list-container.component.html',
  styleUrls: ['./nested-checked-list-container.component.scss']
})
export class NestedCheckedListContainerComponent implements OnInit {
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

  itemChanges: Changes = {};
  submittedChanges: string | null = null;

  constructor() {
  }

  ngOnInit(): void {
    this.itemChanges = this.items.map(item => ({
      [item.id]: {
        hasBeenChecked: item.isChecked,
        subItems: item.subItems.map(subItem => ({
          [subItem.id]: subItem.isChecked,
        })).reduce((p, c) => ({...p, ...c}), {})
      }
    })).reduce((p, c) => ({...p, ...c}), {})
  }

  onItemChanged($event: ItemChange) {
    const item = this.items.find(item => item.id === $event.id);

    if (!item) {
      throw new Error('item not found');
    }

    this.itemChanges[$event.id].hasBeenChecked = $event.hasBeenChecked;
    this.itemChanges[$event.id].subItems = item.subItems.map(subItem => ({
      [subItem.id]: $event.hasBeenChecked,
    })).reduce((p, c) => ({...p, ...c}), {})
  }

  get submitDisabled(): boolean {
    return !Object.entries(this.itemChanges).map(
      ([_, value]) => value.hasBeenChecked
        || Object.entries(value.subItems)
          .map(([_, value]) => value).reduce((p, c) => (p || c), false))
      .reduce((p, c) => p || c, false);
  }

  onSubItemsChanged($event: SubItemsChange) {
    this.itemChanges[$event.id].subItems[$event.subItemId] = $event.hasBeenChecked;
  }

  onSubmit() {
    this.submittedChanges = JSON.stringify(this.itemChanges, null, 4);
  }
}

import {Meta, moduleMetadata, Story} from '@storybook/angular';

import {NestedCheckedListComponent} from "./nested-checked-list.component";
import {NestedCheckedListItemComponent} from "../nested-checked-list-item/nested-checked-list-item.component";
import {CheckedListComponent} from "../checked-list/checked-list.component";
import {CheckedListItemComponent} from "../checked-list-item/checked-list-item.component";


export default {
  title: 'Components/NestedCheckedList',
  component: NestedCheckedListComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        NestedCheckedListItemComponent,
        CheckedListComponent,
        CheckedListItemComponent,
      ],
    }),
  ],
} as Meta;


const Template: Story<NestedCheckedListComponent> = (args) => ({
  props: args,
});


export const OneItemWithThreeSubItems = Template.bind({});
OneItemWithThreeSubItems.storyName = 'One item with 3 subItems';
OneItemWithThreeSubItems.args = {
  items: [
    {
      id: 'id1',
      title: 'title 1',
      description: 'description 1',
      isChecked: false,
      subItems: [
        {
          id: 'id11',
          title: 'title 11',
          description: 'description 11',
          isChecked: false,
        },
        {
          id: 'id12',
          title: 'title 12',
          description: 'description 12',
          isChecked: false,
        },
        {
          id: 'id13',
          title: 'title 13',
          description: 'description 13',
          isChecked: false,
        }
      ]
    }
  ]
};

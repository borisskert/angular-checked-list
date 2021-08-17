import {Meta, moduleMetadata, Story} from '@storybook/angular';

import {NestedCheckedListItemComponent} from "../nested-checked-list-item/nested-checked-list-item.component";
import {CheckedListComponent} from "../checked-list/checked-list.component";
import {CheckedListItemComponent} from "../checked-list-item/checked-list-item.component";
import {NestedCheckedListContainerComponent} from "./nested-checked-list-container.component";
import {NestedCheckedListComponent} from "../nested-checked-list/nested-checked-list.component";


export default {
  title: 'Components/NestedCheckedListContainer',
  component: NestedCheckedListContainerComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        NestedCheckedListComponent,
        NestedCheckedListItemComponent,
        CheckedListComponent,
        CheckedListItemComponent,
      ],
    }),
  ],
} as Meta;


const Template: Story<NestedCheckedListContainerComponent> = (args) => ({
  props: args,
});


export const EmptyArguments = Template.bind({});
EmptyArguments.storyName = 'Empty arguments';
EmptyArguments.args = {};

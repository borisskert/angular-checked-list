import {Meta, Story} from '@storybook/angular';
import {CheckedListItemComponent} from "./checked-list-item.component";


export default {
  title: 'Components/CheckedListItem',
  component: CheckedListItemComponent,
} as Meta;


const Template: Story<CheckedListItemComponent> = (args) => ({
  props: args,
});

export const UncheckedListItem = Template.bind({});
UncheckedListItem.storyName = 'Unchecked item';
UncheckedListItem.args = {
  id: 'myid',
  title: 'my title',
  description: 'my description',
  isChecked: false,
};

export const CheckedListItem = Template.bind({});
CheckedListItem.storyName = 'Checked item';
CheckedListItem.args = {
  id: 'myid',
  title: 'my title',
  description: 'my description',
  isChecked: true,
};

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NestedCheckedListComponent} from './nested-checked-list.component';
import {NestedCheckedListItemComponent} from "../nested-checked-list-item/nested-checked-list-item.component";
import {CheckedListComponent} from "../checked-list/checked-list.component";
import {CheckedListItemComponent} from "../checked-list-item/checked-list-item.component";

describe('NestedCheckedListComponent', () => {
  let component: NestedCheckedListComponent;
  let fixture: ComponentFixture<NestedCheckedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NestedCheckedListComponent,
        NestedCheckedListItemComponent,
        CheckedListComponent,
        CheckedListItemComponent,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedCheckedListComponent);
    component = fixture.componentInstance;

    component.items = [
      {
        id: 'id1',
        title: 'title 1',
        description: 'description 1',
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
        ],
        isChecked: false,
      }, {
        id: 'id2',
        title: 'title 2',
        description: 'description 2',
        subItems: [
          {
            id: 'id21',
            title: 'title 21',
            description: 'description 21',
            isChecked: false,
          },
          {
            id: 'id22',
            title: 'title 22',
            description: 'description 22',
            isChecked: false,
          },
          {
            id: 'id23',
            title: 'title 23',
            description: 'description 23',
            isChecked: false,
          }
        ],
        isChecked: false,
      }
    ]

    jest.spyOn(component.itemsChanged, 'emit');
    jest.spyOn(component.subItemsChanged, 'emit');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when select first parent item', () => {
    beforeEach(() => {
      const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id1');
      checkBox.click();
    });

    it('should emit changes', () => {
      expect(component.itemsChanged.emit).toHaveBeenNthCalledWith(1, {
        id: 'id1',
        hasBeenChecked: true,
      });
    });

    describe('when select second parent item', () => {
      beforeEach(() => {
        const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id2');
        checkBox.click();
      });

      it('should emit changes', () => {
        expect(component.itemsChanged.emit).toHaveBeenNthCalledWith(2, {
          id: 'id2',
          hasBeenChecked: true,
        });
      });

      describe('when unselect first parent item', () => {
        beforeEach(() => {
          const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id1');
          checkBox.click();
        });

        it('should emit changes', () => {
          expect(component.itemsChanged.emit).toHaveBeenNthCalledWith(3, {
            id: 'id1',
            hasBeenChecked: false,
          });
        });
      });
    });
  });

  describe('when select first parent`s first subitem item', () => {
    beforeEach(() => {
      const collapseButton = fixture.debugElement.nativeElement.querySelector('.test-collapse-button-id1');
      collapseButton.click();

      fixture.detectChanges();

      const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id11');
      checkBox.click();
    });

    it('should emit changes', () => {
      expect(component.subItemsChanged.emit).toHaveBeenNthCalledWith(1, {
        id: 'id1',
        subItemId: 'id11',
        hasBeenChecked: true,
      });
    });

    describe('when select second parent`s third subitem item', () => {
      beforeEach(() => {
        const collapseButton = fixture.debugElement.nativeElement.querySelector('.test-collapse-button-id2');
        collapseButton.click();

        fixture.detectChanges();

        const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id23');
        checkBox.click();
      });

      it('should emit changes', () => {
        expect(component.subItemsChanged.emit).toHaveBeenNthCalledWith(2, {
          id: 'id2',
          subItemId: 'id23',
          hasBeenChecked: true,
        });
      });
    });
  });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NestedCheckedListItemComponent} from './nested-checked-list-item.component';
import {CheckedListComponent} from "../checked-list/checked-list.component";
import {CheckedListItemComponent} from "../checked-list-item/checked-list-item.component";

describe('NestedCheckedListItemComponent', () => {
  let component: NestedCheckedListItemComponent;
  let fixture: ComponentFixture<NestedCheckedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NestedCheckedListItemComponent,
        CheckedListComponent,
        CheckedListItemComponent,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedCheckedListItemComponent);
    component = fixture.componentInstance;

    component.id = 'id2';
    component.title = 'title 2';
    component.description = 'description 2';
    component.subItems = [
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
    ];
    component.isChecked = false;

    jest.spyOn(component.itemChange, 'emit');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when check parent item', () => {
    beforeEach(() => {
      const collapseButton = fixture.debugElement.nativeElement.querySelector('.test-collapse-button-id2');
      collapseButton.click();

      fixture.detectChanges();

      const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id2');
      checkBox.click();

      fixture.detectChanges();
    });

    it('should emit parent item change', () => {
      expect(component.itemChange.emit).toHaveBeenNthCalledWith(1, true);
    });

    it('should check children`s checkboxes', () => {
      const checkBox21 = fixture.debugElement.nativeElement.querySelector('#list-item-id21');
      expect(checkBox21.checked).toBe(true);

      const checkBox22 = fixture.debugElement.nativeElement.querySelector('#list-item-id22');
      expect(checkBox22.checked).toBe(true);

      const checkBox23 = fixture.debugElement.nativeElement.querySelector('#list-item-id23');
      expect(checkBox23.checked).toBe(true);
    });

    describe('when uncheck first children`s checkbox', () => {
      beforeEach(() => {
        const checkBox21 = fixture.debugElement.nativeElement.querySelector('#list-item-id21');
        checkBox21.click();

        fixture.detectChanges();
      });

      it('should show indeterminate state in parent`s checkbox', () => {
        const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id2');
        expect(checkBox.indeterminate).toBe(true);
        expect(checkBox.checked).toBe(false);
      });

      it('should NOT emit parent item change', () => {
        expect(component.itemChange.emit).toHaveBeenCalledTimes(1);
      });
    });

    describe('when uncheck all children`s checkboxes', () => {
      beforeEach(() => {
        const checkBox21 = fixture.debugElement.nativeElement.querySelector('#list-item-id21');
        checkBox21.click();
        fixture.detectChanges();

        const checkBox22 = fixture.debugElement.nativeElement.querySelector('#list-item-id22');
        checkBox22.click();
        fixture.detectChanges();

        const checkBox23 = fixture.debugElement.nativeElement.querySelector('#list-item-id23');
        checkBox23.click();
        fixture.detectChanges();
      });

      it('should show unchecked state in parent`s checkbox', () => {
        const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id2');
        expect(checkBox.indeterminate).toBe(false);
        expect(checkBox.checked).toBe(false);
      });

      it('should emit parent item change', () => {
        expect(component.itemChange.emit).toHaveBeenNthCalledWith(2, false);
      });
    });
  });

  describe('when check one sub-item', () => {
    beforeEach(() => {
      const collapseButton = fixture.debugElement.nativeElement.querySelector('.test-collapse-button-id2');
      collapseButton.click();

      fixture.detectChanges();

      const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id23');
      checkBox.click();

      fixture.detectChanges();
    });

    it('should show indeterminate checkbox', () => {
      const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id2');
      expect(checkBox.indeterminate).toBe(true);
      expect(checkBox.checked).toBe(false);
    });

    describe('when check second sub-item', () => {
      beforeEach(() => {
        const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id22');
        checkBox.click();

        fixture.detectChanges();
      });

      it('should show indeterminate checkbox', () => {
        const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id2');
        expect(checkBox.indeterminate).toBe(true);
        expect(checkBox.checked).toBe(false);
      });

      describe('when check third sub-item', () => {
        beforeEach(() => {
          const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id21');
          checkBox.click();

          fixture.detectChanges();
        });

        it('should NOT show indeterminate checkbox', () => {
          const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id2');
          expect(checkBox.checked).toBe(true);
          expect(checkBox.indeterminate).toBe(false);
        });
      });
    });

    describe('when collapse nested list', () => {
      beforeEach(() => {
        const collapseButton = fixture.debugElement.nativeElement.querySelector('.test-collapse-button-id2');
        collapseButton.click();

        fixture.detectChanges();
      });

      it('should not touch indeterminate checkbox', () => {
        const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id2');
        expect(checkBox.indeterminate).toBe(true);
        expect(checkBox.checked).toBe(false);
      });
    });
  });
});

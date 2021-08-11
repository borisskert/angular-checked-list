import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckedListComponent} from './checked-list.component';
import {CheckedListItemComponent} from "../checked-list-item/checked-list-item.component";

describe('CheckedListComponent', () => {
  let component: CheckedListComponent;
  let fixture: ComponentFixture<CheckedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CheckedListComponent,
        CheckedListItemComponent,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedListComponent);
    component = fixture.componentInstance;

    component.items = [
      {
        id: 'id1',
        title: 'title 1',
        description: 'description 1',
        isChecked: false
      },
      {
        id: 'id2',
        title: 'title 2',
        description: 'description 2',
        isChecked: false
      }
    ]

    jest.spyOn(component.itemsChanged, 'emit');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when check first item', () => {
    beforeEach(() => {
      const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id1');
      checkBox.click();
    });

    it('should emit checked items', () => {
      expect(component.itemsChanged.emit).toHaveBeenNthCalledWith(1, {
        id: 'id1',
        hasBeenChecked: true,
      });
    });

    describe('when check second item', () => {
      beforeEach(() => {
        const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id2');
        checkBox.click();
      });

      it('should emit checked items', () => {
        expect(component.itemsChanged.emit).toHaveBeenNthCalledWith(2, {
          id: 'id2',
          hasBeenChecked: true,
        });
      });
    });

    describe('when uncheck first item', () => {
      beforeEach(() => {
        const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-id1');
        checkBox.click();
      });

      it('should emit checked items', () => {
        expect(component.itemsChanged.emit).toHaveBeenNthCalledWith(2, {
          id: 'id1',
          hasBeenChecked: false,
        });
      });
    });
  });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NestedCheckedListContainerComponent} from './nested-checked-list-container.component';
import {NestedCheckedListComponent} from "../nested-checked-list/nested-checked-list.component";
import {NestedCheckedListItemComponent} from "../nested-checked-list-item/nested-checked-list-item.component";
import {CheckedListComponent} from "../checked-list/checked-list.component";
import {CheckedListItemComponent} from "../checked-list-item/checked-list-item.component";

describe('NestedCheckedListContainerComponent', () => {
  let component: NestedCheckedListContainerComponent;
  let fixture: ComponentFixture<NestedCheckedListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NestedCheckedListContainerComponent,
        NestedCheckedListComponent,
        NestedCheckedListItemComponent,
        CheckedListComponent,
        CheckedListItemComponent,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedCheckedListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

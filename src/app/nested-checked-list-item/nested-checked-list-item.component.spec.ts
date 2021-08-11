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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

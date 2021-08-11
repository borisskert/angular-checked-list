import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {CheckedListComponent} from "./checked-list/checked-list.component";
import {CheckedListItemComponent} from "./checked-list-item/checked-list-item.component";
import {NestedCheckedListComponent} from "./nested-checked-list/nested-checked-list.component";
import {NestedCheckedListItemComponent} from "./nested-checked-list-item/nested-checked-list-item.component";
import {NestedCheckedListContainerComponent} from "./nested-checked-list-container/nested-checked-list-container.component";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NestedCheckedListContainerComponent,
        NestedCheckedListComponent,
        NestedCheckedListItemComponent,
        CheckedListComponent,
        CheckedListItemComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

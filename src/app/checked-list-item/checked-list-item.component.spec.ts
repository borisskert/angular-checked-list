import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckedListItemComponent } from './checked-list-item.component';

describe('CheckedListItemComponent', () => {
  let component: CheckedListItemComponent;
  let fixture: ComponentFixture<CheckedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckedListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedListItemComponent);
    component = fixture.componentInstance;

    component.id = 'my_id';
    component.title = 'my title';
    component.description = 'my description';
    component.isChecked = false;

    jest.spyOn(component.check, 'emit');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when check item', () => {
    beforeEach(() => {
      const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-my_id');
      checkBox.click();
    });

    it('should emit', () => {
      expect(component.check.emit).toHaveBeenNthCalledWith(1, true);
    });
  });
});

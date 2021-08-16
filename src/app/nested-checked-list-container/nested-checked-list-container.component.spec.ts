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

  it('should disable submit button', () => {
    const submitButton = fixture.debugElement.nativeElement.querySelector('.test-submit-button');
    expect(submitButton.disabled).toBe(true);
  });

  describe('when check parent-item', () => {
    beforeEach(() => {
      const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-1');
      checkBox.click();

      fixture.detectChanges();
    });

    it('should enable submit button', () => {
      const submitButton = fixture.debugElement.nativeElement.querySelector('.test-submit-button');
      expect(submitButton.disabled).toBe(false);
    });

    describe('when uncheck first child-item', () => {
      beforeEach(() => {
        const collapseButton = fixture.debugElement.nativeElement.querySelector('.test-collapse-button-1');
        collapseButton.click();

        fixture.detectChanges();

        const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-11');
        checkBox.click();

        fixture.detectChanges();
      });

      it('should enable submit button', () => {
        const submitButton = fixture.debugElement.nativeElement.querySelector('.test-submit-button');
        expect(submitButton.disabled).toBe(false);
      });

      describe('when uncheck third child-item', () => {
        beforeEach(() => {
          const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-12');
          checkBox.click();

          fixture.detectChanges();
        });

        it('should enable submit button', () => {
          const submitButton = fixture.debugElement.nativeElement.querySelector('.test-submit-button');
          expect(submitButton.disabled).toBe(false);
        });

        describe('when uncheck second child-item', () => {
          beforeEach(() => {
            const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-13');
            checkBox.click();

            fixture.detectChanges();
          });

          it('should enable submit button', () => {
            const submitButton = fixture.debugElement.nativeElement.querySelector('.test-submit-button');
            expect(submitButton.disabled).toBe(true);
          });
        });
      });
    });

    describe('when uncheck parent-item', () => {
      beforeEach(() => {
        const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-1');
        checkBox.click();

        fixture.detectChanges();
      });

      it('should enable submit button', () => {
        const submitButton = fixture.debugElement.nativeElement.querySelector('.test-submit-button');
        expect(submitButton.disabled).toBe(true);
      });
    });
  });

  describe('when check child-item', () => {
    beforeEach(() => {
      const collapseButton = fixture.debugElement.nativeElement.querySelector('.test-collapse-button-1');
      collapseButton.click();

      fixture.detectChanges();

      const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-11');
      checkBox.click();

      fixture.detectChanges();
    });

    it('should enable submit button', () => {
      const submitButton = fixture.debugElement.nativeElement.querySelector('.test-submit-button');
      expect(submitButton.disabled).toBe(false);
    });

    describe('when uncheck child-item', () => {
      beforeEach(() => {
        const checkBox = fixture.debugElement.nativeElement.querySelector('#list-item-11');
        checkBox.click();

        fixture.detectChanges();
      });

      it('should enable submit button', () => {
        const submitButton = fixture.debugElement.nativeElement.querySelector('.test-submit-button');
        expect(submitButton.disabled).toBe(true);
      });
    });
  });
});

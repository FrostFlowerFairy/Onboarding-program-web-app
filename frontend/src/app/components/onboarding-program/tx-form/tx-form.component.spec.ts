import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxFormComponent } from './tx-form.component';

describe('TxFormComponent', () => {
  let component: TxFormComponent;
  let fixture: ComponentFixture<TxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

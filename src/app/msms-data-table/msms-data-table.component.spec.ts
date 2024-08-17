import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsmsDataTableComponent } from './msms-data-table.component';

describe('MsmsDataTableComponent', () => {
  let component: MsmsDataTableComponent;
  let fixture: ComponentFixture<MsmsDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsmsDataTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsmsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

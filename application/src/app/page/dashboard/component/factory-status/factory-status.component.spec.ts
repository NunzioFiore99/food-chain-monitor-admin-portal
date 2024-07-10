import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryStatusComponent } from './factory-status.component';

describe('FactoryStatusComponent', () => {
  let component: FactoryStatusComponent;
  let fixture: ComponentFixture<FactoryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactoryStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactoryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

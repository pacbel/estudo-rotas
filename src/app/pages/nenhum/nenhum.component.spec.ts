import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NenhumComponent } from './nenhum.component';

describe('NenhumComponent', () => {
  let component: NenhumComponent;
  let fixture: ComponentFixture<NenhumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NenhumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NenhumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

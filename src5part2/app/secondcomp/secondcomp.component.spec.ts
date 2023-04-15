import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcompComponent } from './secondcomp.component';

describe('SecondcompComponent', () => {
  let component: SecondcompComponent;
  let fixture: ComponentFixture<SecondcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

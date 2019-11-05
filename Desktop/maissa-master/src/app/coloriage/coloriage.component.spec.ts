import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoriageComponent } from './coloriage.component';

describe('ColoriageComponent', () => {
  let component: ColoriageComponent;
  let fixture: ComponentFixture<ColoriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

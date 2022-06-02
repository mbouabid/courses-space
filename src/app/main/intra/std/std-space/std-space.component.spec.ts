import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSpaceComponent } from './std-space.component';

describe('StdSpaceComponent', () => {
  let component: StdSpaceComponent;
  let fixture: ComponentFixture<StdSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

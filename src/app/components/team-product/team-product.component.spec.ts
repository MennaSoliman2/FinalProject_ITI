import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProductComponent } from './team-product.component';

describe('TeamProductComponent', () => {
  let component: TeamProductComponent;
  let fixture: ComponentFixture<TeamProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

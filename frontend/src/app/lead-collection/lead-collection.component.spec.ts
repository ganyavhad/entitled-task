import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadCollectionComponent } from './lead-collection.component';

describe('LeadCollectionComponent', () => {
  let component: LeadCollectionComponent;
  let fixture: ComponentFixture<LeadCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

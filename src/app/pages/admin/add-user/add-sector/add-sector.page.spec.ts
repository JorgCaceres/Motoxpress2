import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSectorPage } from './add-sector.page';

describe('AddSectorPage', () => {
  let component: AddSectorPage;
  let fixture: ComponentFixture<AddSectorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddSectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

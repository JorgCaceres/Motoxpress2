import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudRiderPage } from './crud-rider.page';

describe('CrudRiderPage', () => {
  let component: CrudRiderPage;
  let fixture: ComponentFixture<CrudRiderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudRiderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

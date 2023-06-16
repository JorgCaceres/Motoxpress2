import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudClientePage } from './crud-cliente.page';

describe('CrudClientePage', () => {
  let component: CrudClientePage;
  let fixture: ComponentFixture<CrudClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

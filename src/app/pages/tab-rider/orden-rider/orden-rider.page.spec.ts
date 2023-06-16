import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdenRiderPage } from './orden-rider.page';

describe('OrdenRiderPage', () => {
  let component: OrdenRiderPage;
  let fixture: ComponentFixture<OrdenRiderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrdenRiderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

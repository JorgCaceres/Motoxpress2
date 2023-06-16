import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdenMapPage } from './orden-map.page';

describe('OrdenMapPage', () => {
  let component: OrdenMapPage;
  let fixture: ComponentFixture<OrdenMapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrdenMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

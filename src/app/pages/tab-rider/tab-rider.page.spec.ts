import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabRiderPage } from './tab-rider.page';

describe('TabRiderPage', () => {
  let component: TabRiderPage;
  let fixture: ComponentFixture<TabRiderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabRiderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

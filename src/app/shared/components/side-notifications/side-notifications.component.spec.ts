import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNotificationsComponent } from './side-notifications.component';

describe('SideNotificationsComponent', () => {
  let component: SideNotificationsComponent;
  let fixture: ComponentFixture<SideNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNotificationsComponent]
    });
    fixture = TestBed.createComponent(SideNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

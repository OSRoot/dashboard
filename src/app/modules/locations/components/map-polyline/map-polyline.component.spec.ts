import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPolylineComponent } from './map-polyline.component';

describe('MapPolylineComponent', () => {
  let component: MapPolylineComponent;
  let fixture: ComponentFixture<MapPolylineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapPolylineComponent]
    });
    fixture = TestBed.createComponent(MapPolylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

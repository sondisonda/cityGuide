import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrailDetailPage } from './trail-detail';

describe('TrailDetailPage', () => {
  let component: TrailDetailPage;
  let fixture: ComponentFixture<TrailDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrailDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

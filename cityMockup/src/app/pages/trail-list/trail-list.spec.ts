import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrailListPage } from './trail-list';

describe('TrailListPage', () => {
  let component: TrailListPage;
  let fixture: ComponentFixture<TrailListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrailListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

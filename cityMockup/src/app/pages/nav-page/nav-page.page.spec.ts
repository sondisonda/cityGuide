import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavPagePage } from './nav-page.page';

describe('NavPagePage', () => {
  let component: NavPagePage;
  let fixture: ComponentFixture<NavPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

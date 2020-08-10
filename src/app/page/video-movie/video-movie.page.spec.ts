import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoMoviePage } from './video-movie.page';

describe('VideoMoviePage', () => {
  let component: VideoMoviePage;
  let fixture: ComponentFixture<VideoMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoMoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitcardComponent } from './gitcard.component';

describe('GitcardComponent', () => {
  let component: GitcardComponent;
  let fixture: ComponentFixture<GitcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

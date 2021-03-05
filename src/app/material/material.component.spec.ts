import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './material.component';

describe('MaterialComponents', () => {
  let component: MaterialModule;
  let fixture: ComponentFixture<MaterialModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

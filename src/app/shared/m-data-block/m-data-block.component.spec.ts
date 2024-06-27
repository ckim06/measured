import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDataBlockComponent } from './m-data-block.component';

describe('MDataBlockComponent', () => {
  let component: MDataBlockComponent;
  let fixture: ComponentFixture<MDataBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MDataBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDataBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

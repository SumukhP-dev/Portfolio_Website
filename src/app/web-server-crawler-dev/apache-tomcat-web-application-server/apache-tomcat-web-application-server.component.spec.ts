import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApacheTomcatWebApplicationServerComponent } from './apache-tomcat-web-application-server.component';

describe('ApacheTomcatWebApplicationServerComponent', () => {
  let component: ApacheTomcatWebApplicationServerComponent;
  let fixture: ComponentFixture<ApacheTomcatWebApplicationServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApacheTomcatWebApplicationServerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApacheTomcatWebApplicationServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

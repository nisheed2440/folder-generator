import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%=_name%>Component } from './<%=name%>.component';

describe('<%=_name%>Component', () => {
  let component: <%=_name%>Component;
  let fixture: ComponentFixture<<%=_name%>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%=_name%>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%=_name%>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

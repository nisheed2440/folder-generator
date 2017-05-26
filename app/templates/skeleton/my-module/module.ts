import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%=_name%>Component } from './<%=name%>.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [<%=_name%>Component]
})
export class <%=_name%>Module { }

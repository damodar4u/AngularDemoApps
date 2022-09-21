import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoapp';
  pageHeader:string = "Registration Form"
  employeeHeader:string = "Registered Employees"
}


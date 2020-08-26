import { Component, DoCheck } from '@angular/core';
import { Person } from './child/child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  
  public person: Person = {
    name: 'John Doe',
    age: 20
  };

  public reassign(): void {
    this.person = {
      name: this.person.name,
      age: this.person.age
    };
  }
}

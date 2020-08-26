import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <div class="child-container">
      <h3> Child component </h3>
      <pre>{{person | json}}</pre>
    </div>
  `,
  styleUrls: ['child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() person: Person;
}

export interface Person {
  name: string;
  age: number;
}
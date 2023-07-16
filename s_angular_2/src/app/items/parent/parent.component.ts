import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  formNumber = ''; // two way binding
  firstName = ''; // from parent to child
  lastName = ''; // from parent to child
  age = ''; // from parent to child
  color = ''; // from child to parent
}

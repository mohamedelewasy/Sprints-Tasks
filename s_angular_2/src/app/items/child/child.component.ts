import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  color = '';
  @Input() name!: string;
  @Input() age!: string;
  @Input() formId!: string;
  @Output() colorItem: EventEmitter<string> = new EventEmitter();
  @Output() updateFormId: EventEmitter<string> = new EventEmitter();
}

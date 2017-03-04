import {Component,ViewChild,EventEmitter,Output} from '@angular/core'
import {Field} from './field.ts'

@Component({
  selector: '#app',
  template: `
    <field instruction="Enter name" (submission)="onSubmission($event)"></field>
    <p>Submitted name: {{submission}}</p>
  `,
  directives: [Field]
})
export class Form {
  submission: string = 'Steve'
  onSubmission(txt) {
    this.submission = txt;
  }
}
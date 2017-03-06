import {Component} from '@angular/core'

@Component({
  selector: '#app',
  template: `
    <field instruction="Enter name" (submission)="onSubmission($event)"></field>
    <p>Submitted name: {{submission}}</p>
  `
})
export class Form {
  submission: string = 'Steve'
  onSubmission(txt) {
    this.submission = txt;
  }
}
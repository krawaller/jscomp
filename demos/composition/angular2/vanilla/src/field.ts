import {Component,ViewChild,EventEmitter,Input,Output} from '@angular/core'
import {Confirm} from './confirm.ts'

@Component({
  selector: 'field',
  template: `
    {{instruction}}: <input #field (input)="0">
    <confirm (confirm)="onConfirm()" [disabled]="!field.value.length"></confirm>
  `,
  directives: [Confirm]
})
export class Field {
  @ViewChild('field') input: any
  @Input() instruction: string
  @Output() submission = new EventEmitter<string>()
  onConfirm() {
    this.submission.emit(this.input.nativeElement.value)
    this.input.nativeElement.value = ''
  }
}
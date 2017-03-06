import {Component,ViewChild,EventEmitter,Input,Output} from '@angular/core'

@Component({
  selector: 'field',
  template: `
    {{instruction}}: <input #field (input)="0">
    <confirm (confirm)="onConfirm()" [disabled]="!field.value.length"></confirm>
  `
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
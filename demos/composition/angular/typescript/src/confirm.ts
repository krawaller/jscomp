import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'confirm',
  template: `
    <span *ngIf="mode !== 'confirm'">
      <button (click)="maybe()" [disabled]="mode === 'disabled'">Submit</button>
    </span>
    <span *ngIf="mode === 'confirm'">
      <button (click)="changedmymind()">Cancel</button>
      <button (click)="yesimsure()">Confirm</button>
    </span>
  `
})
export class Confirm {
  mode: string = 'waiting'
  @Output() confirm = new EventEmitter<void>()
  @Input() set disabled(bool: boolean){
    this.mode = bool ? 'disabled' : 'waiting'
  }
  maybe() { this.mode = 'confirm' }
  changedmymind() { this.mode = 'waiting' }
  yesimsure() {
    this.confirm.emit()
    this.mode = 'waiting'
  }
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Modal';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {
  @Input()
  notes!: Todo;
  i!: number;
  @Output() removeNotes: EventEmitter<Todo> = new EventEmitter();
  @Output() doneNotes: EventEmitter<Todo> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  remove(notes: Todo) {
    this.removeNotes.emit(notes);
    console.log("reat");
  }
  done(notes: Todo | undefined) {
    this.doneNotes.emit(notes)
  }

}

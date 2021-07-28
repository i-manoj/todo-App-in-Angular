import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Modal';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  title!: string;
  about!: string;
  @Output() addNotes:EventEmitter<Todo> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    const notes = {
      no:6,
      title:this.title,
      about:this.about,
      status:true
    }
    this.addNotes.emit(notes)
  }

}

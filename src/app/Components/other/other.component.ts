import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Modal'

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  other!: Todo[];
  temp!: any;

  constructor() {
    this.temp = localStorage.getItem("other");
    if (this.temp === null) {
      this.other = []
    }
    else {
      this.other = JSON.parse(this.temp)
    }

  }

  ngOnInit(): void {
  }
  delete(notes: Todo) {
    console.log(notes);
    const index = this.other.indexOf(notes);
    this.other.splice(index, 1);
    localStorage.setItem("other", JSON.stringify(this.other));
  }
  add(notes: Todo) {
    console.log(notes);
    const index = this.other.indexOf(notes);
    this.other.push(notes);
    localStorage.setItem("other", JSON.stringify(this.other));
  }
  done(notes: Todo) {
    const index = this.other.indexOf(notes);
    this.other[index].status = !this.other[index].status
    localStorage.setItem("other", JSON.stringify(this.other));
  }

}

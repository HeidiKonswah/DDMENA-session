import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {mockTasks} from '../mock-tasks';
import {HeroService} from '../hero.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css', '../app.component.css']
})
export class TodoComponent implements OnInit {
  tasks: Task[];
  getHeros(): void{
    this.tasks = this.heroSer.getTasks();
  }

  selected : Task;
  onDone(task: Task): void {
    task.isDone = !task.isDone;
  }
  onSelect(task: Task): void{
    this.selected = task;
  }

  
  constructor(private heroSer: HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

}

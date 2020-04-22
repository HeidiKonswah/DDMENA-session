import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {mockTasks} from '../mock-tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  createTask(){
    
  }


  temp: Task = {
    id: mockTasks.length, 
    title: "", 
    time: "", 
    isDone: false
  }
  addTask(): void{
    mockTasks.push(this.temp);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

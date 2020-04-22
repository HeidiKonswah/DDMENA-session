import { Injectable } from '@angular/core';
import {Task} from '../app/task';
import {mockTasks} from '../app/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getTasks(): Task[]{
    return mockTasks;
  }
  constructor() { }
}

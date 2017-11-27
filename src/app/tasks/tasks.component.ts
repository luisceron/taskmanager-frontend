import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {
  public tasks: Array<Task>;
  public selectedTask: Task;

  public constructor() {
  }

  public ngOnInit() {
  }

  public onSelect(task: Task): void {
    this.selectedTask = task;
  }
}

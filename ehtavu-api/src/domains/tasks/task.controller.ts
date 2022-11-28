import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/api/tasks/me')
  getMyTasks(): { data: any[]; error: any } {
    // TODO type it
    return {
      data: this.taskService.getMyTasks(),
      error: null,
    };
  }
}

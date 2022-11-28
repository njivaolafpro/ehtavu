import { Controller, Get } from '@nestjs/common';
import { Task } from '@prisma/client';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/api/tasks/me')
  async getMyTasks(): Promise<{ data: Task[]; error: any }> {
    // TODO type it

    return {
      data: await this.taskService.getMyTasks(),
      error: null,
    };
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  async getMyTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }
}

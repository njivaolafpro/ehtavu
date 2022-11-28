<script setup>
import { onMounted, reactive, ref } from 'vue'
import TaskItem from '../components/TaskItem.vue';
import buildTaskService from '../services/task-service';

let tasksRef = ref([])

console.log('tasks->', tasksRef)
const taskServiceInstance = buildTaskService();
taskServiceInstance.getTasksList().then(({ data }) => {
  console.log('data ->', data);
  tasksRef.value = data.data;

  console.log('tasksRef AFTER->', tasksRef)
}, (err) => {
  window.alert(err.message);
  console.error('data ->', err);
});


</script>

<template>
  {{}}
  <h1
    class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
    Tasks management</h1>
  <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Ready to do some
    tasks?? yeah go ahead you can create some 👀.</p>

  <div class="grid grid-cols-4 gap-4" v-if="tasksRef && tasksRef.length">
    <div v-for="taskItem in tasksRef">
      <TaskItem :item-name="taskItem.name" :item-description="taskItem.description" />
    </div>

  </div>
</template>

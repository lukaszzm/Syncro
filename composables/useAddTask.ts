import type { Task } from "~/types/task";

export function useAddTask() {
  const pending = ref(false);

  async function addTask(task: Task) {
    pending.value = true;

    await $fetch(`https://664c613635bbda1098801ec7.mockapi.io/api/tasks`, {
      method: "post",
      body: JSON.stringify(task),
      async onResponse() {
        await refreshNuxtData("tasks");
      },
    });

    pending.value = false;
  }

  return {
    addTask,
    pending,
  };
}

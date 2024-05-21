export function useDeleteTask() {
  const pending = ref(false);

  async function deleteTask(id: string) {
    pending.value = true;

    await $fetch(
      `https://664c613635bbda1098801ec7.mockapi.io/api/tasks/${id}`,
      {
        method: "delete",
        async onResponse() {
          await refreshNuxtData("tasks");
        },
      }
    );

    pending.value = false;
  }

  return {
    deleteTask,
    pending,
  };
}

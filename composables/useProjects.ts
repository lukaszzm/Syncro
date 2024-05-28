import type { Database } from "~/types/supabase";

export async function useProjects() {
  const client = useSupabaseClient<Database>();

  return await useAsyncData("project", async () => {
    const { data } = await client.from("projects").select();
    return data;
  });
}

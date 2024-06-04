import type { Database } from "~/types/supabase";

export async function useProject(id: string) {
  const client = useSupabaseClient<Database>();

  return await useAsyncData(`project-${id}`, async () => {
    const { data } = await client
      .from("projects")
      .select(`*, tasks (*), users (*)`)
      .eq("id", id)
      .limit(1)
      .single();

    return data;
  });
}

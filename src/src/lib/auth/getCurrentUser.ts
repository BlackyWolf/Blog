import { supabase } from "$lib";

export async function getCurrentUser() {
    const response = await supabase.auth.getSession();

    return response.data.session?.user;
}

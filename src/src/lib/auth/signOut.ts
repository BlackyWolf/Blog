import { supabase } from '$lib';

export async function signOut() {
    return await supabase.auth.signOut();
}

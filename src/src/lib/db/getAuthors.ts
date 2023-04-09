import { supabase } from '$lib';

export async function getAuthors() {
    return await supabase
        .from('authors')
        .select();
}

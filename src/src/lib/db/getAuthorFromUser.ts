import { supabase } from '$lib';

export async function getAuthorFromUser(userId: string) {
    return await supabase
        .from('authors')
        .select('penname, profile_pic')
        .eq('user_id', userId)
        .single();
}

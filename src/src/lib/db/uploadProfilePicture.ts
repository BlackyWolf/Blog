import type { SupabaseClient } from '@supabase/supabase-js';

export async function uploadProfilePicture(supabase: SupabaseClient, file: ArrayBuffer, userId: string) {
    const sanitizedUserId = userId.replaceAll('-', '');

    return await supabase.storage
        .from('profile-pictures')
        .upload(`${sanitizedUserId}.png`, file, {
            upsert: true
        });
}

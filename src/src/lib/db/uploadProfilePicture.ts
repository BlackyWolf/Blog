import { hash256 } from '$lib';
import type { SupabaseClient } from '@supabase/supabase-js';

export async function uploadProfilePicture(supabase: SupabaseClient, file: ArrayBuffer, userId: string) {
    const idHash = await hash256(userId);

    return await supabase.storage
        .from('profile-pictures')
        .upload(
            `${idHash}.png`,
            file,
            {
                contentType: 'image/png',
                upsert: true
            }
        );
}

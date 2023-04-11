import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

export interface NewAuthor {
    about: string;
    penname: string;
    profilePicture: string;
    userId: string;
}

export async function addAuthor(supabase: SupabaseClient<Database>, author: NewAuthor) {
    return await supabase.from('authors')
        .insert({
            about: author.about,
            penname: author.penname,
            profile_pic: author.profilePicture,
            user_id: author.userId
        });
}

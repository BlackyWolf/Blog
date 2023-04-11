import { fail } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
    let { supabase } = await parent();

    const { data: authors, error } = await supabase
        .from('authors')
        .select();

    if (error) {
        return {
            errorMessage: error.message
        };
    }

    return {
        authors: authors || []
    };
};

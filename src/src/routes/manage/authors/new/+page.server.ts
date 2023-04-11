import { addAuthor, uploadProfilePicture } from '$lib';
import { adminAuthClient } from '$lib/utilities/supabase-admin.server';
import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
    const  { data, error } = await await adminAuthClient.listUsers();

    console.log(error);

    if (error) {
        if (error instanceof AuthApiError) {
            return {
                errorMessage: error.message
            };
        }
    }

    return {
        users: data.users.map(({ email, id }) => ({
            email,
            id
        }))
    };
};

export const actions: Actions = {
    default: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData();

        const about = formData.get('about');
        const penname = formData.get('penname');
        const profilePicture = formData.get('profilePicture') as File;
        const userId = formData.get('userId') as string;

        if (!penname) {
            return fail(400, {
                about,
                penname,
                warning: 'The penname field is required'
            });
        }

        if (!about) {
            return fail(400, {
                about,
                penname,
                warning: 'The about field is required'
            });
        }

        if (!profilePicture || profilePicture.size === 0) {
            return fail(400, {
                about,
                penname,
                warning: 'The profile picture is required'
            });
        }

        let { data, error: uploadError } = await uploadProfilePicture(
            supabase,
            await profilePicture.arrayBuffer(),
            userId
        );

        if (uploadError) {
            console.log(uploadError);

            return fail(uploadError.statusCode, {
                about,
                penname,
                errorMessage: uploadError.message
            });
        }

        const { error: insertError } = await addAuthor(supabase, {
            about,
            penname,
            profilePicture: data.path,
            userId
        });

        if (insertError) {
            console.log(insertError);

            return fail(500, {
                about,
                penname,
                errorMessage: insertError.message
            });
        }

        throw redirect(302, '/manage/authors');
    }
};

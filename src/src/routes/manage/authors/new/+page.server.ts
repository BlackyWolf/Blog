import { uploadProfilePicture } from '$lib';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData();

        const about = formData.get('about');
        const penname = formData.get('penname');
        const profilePicture = formData.get('profilePic') as File;
        const userId = formData.get('userId') as string;

        const { data, error } = await uploadProfilePicture(supabase, await profilePicture.arrayBuffer(), userId);

        console.log(error);

        console.log(data);
    }
};

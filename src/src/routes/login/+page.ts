import { getCurrentUser } from '$lib';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    let user = await getCurrentUser();

    if (user) {
        throw redirect(307, '/manage');
    }
};

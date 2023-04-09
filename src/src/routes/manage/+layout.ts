import { getAuthorFromUser } from '$lib';
import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
    const { session } = await parent();

    if (!session) {
        throw redirect(307, '/login');
    }
};

export const ssr = false;

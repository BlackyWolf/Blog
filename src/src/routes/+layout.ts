import { getCurrentUser } from '$lib';

export const load = async () => {
    let user = await getCurrentUser();

    return {
        user
    };
};

export const ssr = false;

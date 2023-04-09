import type { LayoutServerData } from './$types';

export const load: LayoutServerData = async ({ locals: { getSession } }) => {
    return {
        session: await getSession()
    };
};

import { getAuthors } from '$lib';

export const load = async () => {
    let authors = await getAuthors();

    return {
        authors: authors.data || []
    };
};

import type { PageLoad } from "./$types";

export const load: PageLoad = ({ url }) => {
    return {
        returnUrl: url.searchParams.get("returnUrl") || "/",
    };
};

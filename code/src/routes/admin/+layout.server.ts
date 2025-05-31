import type { LayoutServerLoad } from "../$types";

export const load: LayoutServerLoad = ({ url }) => {
    // This is to ensure the 'validateAdminUser' hook is run on every request
    // under the admin route.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = url.pathname;
};

import { seedDatabase } from "$lib/server/data/db";
import { sequence } from "@sveltejs/kit/hooks";
import { preloadStaticAssets, redirectFromLogin, setUser, setUserAgent } from "./middleware";
import { validateAdminUser } from "./middleware/admin.hooks";

await seedDatabase();

export const handle = sequence(
    // Setting the user agent should be first
    setUserAgent,
    // Static assets should come before authn and authz so that they are not blocked by auth middleware
    preloadStaticAssets,
    // Auth middleware should be before anything else that depends on it
    setUser,
    redirectFromLogin,
    validateAdminUser,
);

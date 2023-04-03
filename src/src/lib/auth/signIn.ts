import { PUBLIC_APP_URL } from '$env/static/public';
import { supabase } from '$lib';

export async function signIn(email: string) {
    return await supabase.auth.signInWithOtp({
        email,
        options: {
            emailRedirectTo: `${PUBLIC_APP_URL}/manage`
        }
    });
}

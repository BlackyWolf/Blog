<script lang="ts">
    import { PUBLIC_APP_URL } from '$env/static/public';
    import { Input } from '$lib';
    import type { AuthError } from '@supabase/supabase-js';
    import type { PageData } from './$types';

    export let data: PageData;

    let authError: AuthError | null;
    let signInRequestSent = false;

    async function loginUser({ target }: SubmitEvent) {
        const email = target[0].value;

        const { error } = await data.supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${PUBLIC_APP_URL}/manage`
            }
        });;

        if (error) {
            authError = error;
        } else {
            signInRequestSent = true;
        }
    }
 </script>

<div class="flex">
    {#if !signInRequestSent}
        <form on:submit|preventDefault={loginUser} class="bg-white mx-auto mt-96 p-6 rounded-md shadow-md">
            <Input type="email" name="email" label="Email" placeholder="john@gmail.com" required />

            {#if authError}
                <p class="font-semibold text-red-600 mt-6 text-sm">
                    {authError.message}. Go away.
                </p>
            {/if}
        </form>
    {:else}
        <p class="bg-white mx-auto mt-96 p-6 rounded-md shadow-md text-2xl font-semibold text-slate-500">
            Affirm. Proceed to route.
        </p>
    {/if}
</div>

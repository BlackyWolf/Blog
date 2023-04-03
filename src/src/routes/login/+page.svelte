<script lang="ts">
    import { signIn } from '$lib';
    import type { AuthError } from '@supabase/supabase-js';

    let authError: AuthError | null;
    let signInRequestSent = false;

    async function loginUser({ target }: SubmitEvent) {
        const email = target[0].value;

        const { error } = await signIn(email);

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
            <label for="email">Email</label>

            <input type="email" id="email" name="email" placeholder="john@gmail.com" class="outline-0">

            {#if authError}
                <p>
                    {authError.message}
                </p>
            {/if}
        </form>
    {:else}
        <p class="bg-white mx-auto mt-96 p-6 rounded-md shadow-md text-2xl font-semibold text-slate-500">Check your email for the<br>one-time sign-in link.</p>
    {/if}
</div>

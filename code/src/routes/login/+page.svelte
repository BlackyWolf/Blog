<script>
    import { Button, Checkbox, Input } from "$lib";


</script>

<div class="m-auto min-w-96">
    <h1 class="text-center text-slate-600">Login</h1>

    <form class="bg-white space-y-6" method="POST" action="?/login">
        <Input label="Username" name="username" />
        <Input label="Password" name="password" type="password" />

        <Checkbox label="Remember Me" name="rememberMe" />

        <div>
            <input type="hidden" name="datetimeOffset" value={new Date().getTimezoneOffset()} />

            <Button type="submit" full>
                Login
            </Button>
        </div>
    </form>
</div>

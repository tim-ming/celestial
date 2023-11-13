<script lang="ts">
  import { user } from "$lib/backend/user";
  let email = "";
  let password = "";
  export let setLogin: (login: boolean) => void;

  $: {
    console.log($user);
  }
</script>

<div class="flex flex-col">
  <label for="login-email">Email</label>
  <input
    id="login-email"
    name="email"
    type="email"
    placeholder=""
    bind:value={email}
    class="py-1 text-lg pl-0 outline-none bg-transparent duration-300 transition ease-out border-b-2
    border-b-violet-300/40 focus:border-b-violet-300/80 hover:border-b-violet-300/80
    focus:shadow-violet-200/30 hover:shadow-violet-200/30 shadow-[0px_1rem_1rem_-1rem_(--tw-shadow-colored)] rounded-sm"
  />
</div>
<div class="flex flex-col">
  <label for="password">Password</label>
  <input
    id="login-password"
    type="password"
    bind:value={password}
    class="py-1 text-lg pl-0 outline-none bg-transparent duration-300 transition ease-out border-b-2
    border-b-violet-300/40 focus:border-b-violet-300/80 hover:border-b-violet-300/80
    focus:shadow-violet-200/30 hover:shadow-violet-200/30 shadow-[0px_1rem_1rem_-1rem_(--tw-shadow-colored)] rounded-sm"
  />
</div>
<button
  type="button"
  class="w-full text-slate-900 text-lg font-medium duration-300 transition ease-out bg-violet-300/80 hover:bg-violet-300/100 p-3 rounded-lg"
  on:click={() => user.login(email, password)}>Login</button
>
<button class="text-purple-400 text-sm" on:click={() => setLogin(false)}
  >Don't have a wallet?</button
>

<script lang="ts">
  import { user } from "$lib/backend/user";
  import aliasPairs from "$lib/aliasPairs.json";
  import { isValidEmail } from "$lib/helpers";
  import { goto } from "$app/navigation";
  import type { Credentials, UserCreateData } from "$lib/types";
  import { DEFAULT_IMG_URL } from "$lib/backend/appwrite";
  let username = "";
  let email = "";
  let password = "";

  let validUsername = true;
  let validEmail = true;
  let validPassword = true;
  export let setLogin: (login: boolean) => void;

  function validateUsername() {
    validUsername =
      username.length >= 3 && /^[a-zA-Z0-9_][a-zA-Z0-9-_]+$/.test(username);
    return validUsername;
  }

  function validatePassword() {
    validPassword = password.length >= 8;
    return validPassword;
  }

  function validateEmail() {
    validEmail = isValidEmail(email);
    return validEmail;
  }

  function createWallet() {
    if (!validateEmail()) return;

    const adjective = (
      document.getElementById("alias-adjective") as HTMLOptionElement
    ).value;
    const noun = (document.getElementById("alias-noun") as HTMLOptionElement)
      .value;
    const alias = `${adjective} ${noun}`;

    const id = username;

    const credentials: Credentials = {
      id,
      email,
      password,
    };
    const creationDate = new Date().toISOString();
    const userCreateData: UserCreateData = {
      alias,
      date_joined: creationDate,
      date_last_active: creationDate,
      img_url: [DEFAULT_IMG_URL],
    };

    user
      .register(credentials, userCreateData)
      .then((_) => {
        goto("/");
      })
      .catch(console.log);
  }
</script>

<div class="flex gap-12 w-full">
  <div class="flex flex-col w-full gap-1">
    <label class="text-slate-300 font-light text-sm" for="create-username"
      >Username</label
    >
    <div class="flex relative items-center">
      <p class="absolute text-slate-400">@</p>
      <input
        id="create-username"
        name="username"
        type="username"
        placeholder=""
        bind:value={username}
        on:blur={validateUsername}
        class="pl-5 py-1 w-full outline-none bg-transparent duration-300 transition ease-out border-b-2
    border-b-violet-300/40 focus:border-b-violet-300/80 hover:border-b-violet-300/80
    focus:shadow-violet-200/30 hover:shadow-violet-200/30 shadow-[0px_1rem_1rem_-1rem_(--tw-shadow-colored)] rounded-sm"
      />
    </div>
    <p class={`${validUsername ? "text-slate-500" : "text-red-400"} text-sm`}>
      At least 3 characters, [a-Z 0-9 - _]
    </p>
  </div>
  <div class="flex flex-col w-full gap-1">
    <p class="text-slate-300 font-light text-sm">Alias</p>
    <div class="grid grid-cols-2 w-full gap-4">
      <select
        id="alias-adjective"
        class="py-1 text-lg pl-0 outline-none bg-transparent duration-300 transition ease-out border-b-2
      border-b-violet-300/40 focus:border-b-violet-300/80 hover:border-b-violet-300/80
      focus:shadow-violet-200/30 hover:shadow-violet-200/30 shadow-[0px_1rem_1rem_-1rem_(--tw-shadow-colored)] rounded-sm"
      >
        {#each Object.values(aliasPairs.adjectives) as adjective}
          <option class="w-full" value={adjective}>{adjective}</option>
        {/each}
      </select>
      <select
        id="alias-noun"
        class="py-1 text-lg pl-0 outline-none bg-transparent duration-300 transition ease-out border-b-2
      border-b-violet-300/40 focus:border-b-violet-300/80 hover:border-b-violet-300/80
      focus:shadow-violet-200/30 hover:shadow-violet-200/30 shadow-[0px_1rem_1rem_-1rem_(--tw-shadow-colored)] rounded-sm"
      >
        {#each Object.values(aliasPairs.nouns) as noun}
          <option class="w-full" value={noun}>{noun}</option>
        {/each}
      </select>
    </div>
  </div>
</div>
<div class="flex flex-col">
  <label class="text-slate-300 font-light text-sm" for="email">Email</label>
  <input
    name="email"
    type="email"
    placeholder=""
    bind:value={email}
    on:blur={validateEmail}
    class="py-1 text-lg pl-0 outline-none bg-transparent duration-300 transition ease-out border-b-2
    border-b-violet-300/40 focus:border-b-violet-300/80 hover:border-b-violet-300/80
    focus:shadow-violet-200/30 hover:shadow-violet-200/30 shadow-[0px_1rem_1rem_-1rem_(--tw-shadow-colored)] rounded-sm"
  />
  {#if !validEmail}
    <p class="text-red-400 text-sm">Please enter a valid email address.</p>
  {/if}
</div>
<div class="flex flex-col">
  <label class="text-slate-300 font-light text-sm" for="password"
    >Password</label
  >
  <input
    type="password"
    bind:value={password}
    on:blur={validatePassword}
    class="py-1 text-lg pl-0 outline-none bg-transparent duration-300 transition ease-out border-b-2
    border-b-violet-300/40 focus:border-b-violet-300/80 hover:border-b-violet-300/80
    focus:shadow-violet-200/30 hover:shadow-violet-200/30 shadow-[0px_1rem_1rem_-1rem_(--tw-shadow-colored)] rounded-sm"
  />
  <p class={`${validPassword ? "text-slate-500" : "text-red-400"} text-sm`}>
    At least 8 characters
  </p>
</div>
<div class="flex flex-col items-center gap-4">
  <button
    type="button"
    class="w-full text-slate-900 text-lg font-medium duration-300 transition ease-out bg-violet-300/80 hover:bg-violet-300/100 p-3 rounded-lg"
    on:click={createWallet}>Create wallet</button
  >
  <button class="text-purple-400 text-sm" on:click={() => setLogin(true)}
    >Already have a wallet?</button
  >
</div>

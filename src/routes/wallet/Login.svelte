<script>
  import { user } from "$lib/stores/backend/user";

  let email = "";
  let password = "";
  let isLogin = true;
</script>

<div class="flex flex-col gap-6 min-h-screen items-center pt-36">
  <div class="flex w-full">
    <h1
      class="text-4xl sm:text-5xl text-center font-semibold bg-gradient-to-b from-white to-violet-200 text-transparent bg-clip-text"
    >
      Join the Celestial community today.
    </h1>
  </div>
  <div class="flex w-full max-w-[40rem]">
    <form class="w-full flex">
      <div
        class="flex flex-col w-full gap-8 p-6 pt-4 rounded-xl text-slate-200 bg-slate-100/10"
      >
        <div class="flex -translate-x-2">
          <button
            class={`text-2xl sm:text-3xl text-slate-200 ${
              isLogin ? "" : "text-opacity-30 "
            } font-medium p-2 hover:bg-slate-100/10 transition duration-300 ease-out rounded-lg`}
            on:click={() => (isLogin = true)}
          >
            Login
          </button>
          <p class="text-2xl sm:text-3xl text-opacity-30 p-2 text-violet-300">
            |
          </p>
          <button
            class={`text-2xl sm:text-3xl text-slate-200 ${
              isLogin ? "text-opacity-30" : ""
            } font-medium p-2 hover:bg-slate-100/10 transition duration-300 ease-out rounded-lg`}
            on:click={() => (isLogin = false)}
          >
            Create wallet
          </button>
        </div>
        {#if isLogin}
          <div class="flex flex-col">
            <label for="email">Email</label>
            <input
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
          <button
            class="text-purple-400 text-sm"
            on:click={() => (isLogin = false)}>Don't have a wallet?</button
          >
        {:else}
          <div class="flex flex-col gap-2">
            <label class="text-slate-300" for="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              bind:value={email}
              class="p-3 bg-slate-100/20 rounded-lg"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-slate-300" for="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              bind:value={password}
              class="p-3 bg-slate-100/20 rounded-lg"
            />
          </div>
        {/if}
      </div>
    </form>
  </div>
</div>

<style>
  form {
    display: grid;
    gap: 0.25rem;
  }
</style>

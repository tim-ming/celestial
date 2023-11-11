<script lang="ts">
  import type { Routes } from "$lib/types";

  export let menuOpen: boolean;
  export let routes: Routes[];
</script>

<div
  class={`fixed z-[99999999] flex items-center 
  h-screen w-full right-0 top-0 ${menuOpen ? "visible" : "invisible"}`}
>
  <div
    class={`absolute top-0 right-0 bg-black bg-opacity-70 backdrop-blur-sm w-screen h-screen -z-[1] transition-all duration-300 ease-out ${
      menuOpen ? "visible opacity-100" : "invisible opacity-0"
    }`}
    aria-hidden="true"
    on:click={() => (menuOpen = false)}
  />

  <div
    class={`absolute h-[calc(100vh-2rem)] text-slate-200 p-2 m-4 flex flex-col bg-zinc-900 bg-opacity-90 right-0 rounded-xl gap-2
    transition-all duration-300 ease-out justify-between ${
      menuOpen
        ? "visible translate-x-0 opacity-100"
        : "invisible translate-x-12 opacity-0"
    }`}
  >
    <div
      class="overflow-y-auto gap-4 overflow-x-hidden flex flex-col h-full p-2 justify-between scrollbar-thumb-rounded-full scrollbar-thumb-violet-200/40 scrollbar-track-sky-200/20 scrollbar-thin scrollbar-track-rounded-full"
    >
      <div class="flex flex-col w-full gap-2">
        <div class="flex pointer-events-none">
          <button
            class="flex pointer-events-auto w-full justify-end"
            aria-label="close menu"
            on:click={() => (menuOpen = false)}
          >
            <svg
              class="hover:bg-sky-200/10 duration-300 ease-out rounded-xl opacity-80 p-2"
              width={48}
              height={48}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              ><path
                d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
              /></svg
            >
          </button>
        </div>
        {#each routes as route}
          <a
            href={route.path}
            class={`rounded-2xl transition ease-out duration-300 [&>*]:hover:translate-x-3 [&>*]:hover:[text-shadow:_0_0_1rem_var(--tw-shadow-color)] hover:bg-sky-200/10 flex items-end w-full`}
          >
            <p
              class="text-3xl transition ease-out duration-300 font-medium w-full p-4 pr-20 shadow-slate-200/30"
            >
              {route.name}
            </p>
          </a>
        {/each}
      </div>
      <div class="flex w-full flex-col gap-4">
        <a
          href="/wallet"
          class={`relative transition-all ease-out duration-300 flex [&>p]:hover:translate-x-3 [&>p]:hover:[text-shadow:_0_0_1rem_var(--tw-shadow-color)] items-end w-full hover:brightness-125`}
        >
          <p
            class="z-[1] text-3xl transition ease-out duration-300 font-medium w-full p-4 pr-20 shadow-slate-200/30"
          >
            Wallet
          </p>
          <div class="wallet-menu absolute left-0 w-full h-full rounded-2xl" />
        </a>
        <span class="h-px w-full bg-slate-200 opacity-20" />
        <div class="flex items-center justify-center gap-4 p-4">
          <a href="https://github.com/timming-au/celestial">
            <svg
              fill="currentColor"
              width={28}
              height={28}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              ><path
                d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
              /></svg
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .wallet-menu {
    background: linear-gradient(-45deg, #41dbdb, #d2306e, #1b71c1, #781bba);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>

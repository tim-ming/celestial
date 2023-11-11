<script lang="ts">
  import { page } from "$app/stores";
  import { screenSize } from "$lib/stores";
  import type { Routes } from "$lib/types";
  import Search from "./Search.svelte";
  import SearchButton from "./SearchButton.svelte";
  export let routes: Routes[];
  let searchFocus = false;
  let menuOpen = false;
  $: {
    if (typeof document != "undefined") {
      menuOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    }
  }
</script>

<Search {searchFocus} />

<header
  class="fixed z-[9999] bg-black/80 backdrop-blur-sm w-full border-b-[1px] border-violet-200/40"
>
  <nav
    class="relative z-[1] flex justify-between items-center w-full gap-8 h-20 py-2"
  >
    <div
      class="flex shrink-0 h-full gap-6 lg:gap-10 items-center text-slate-300"
    >
      <a class="flex items-center h-full shrink-0" href="/">
        {#if $screenSize === "sm" || $screenSize === "xs"}
          <img width={48} height={48} src="/images/icon.png" alt="logo" />
        {:else}
          <img class="h-full" src="/images/icon-full.png" alt="logo" />
        {/if}
      </a>
    </div>
    <div
      class="flex items-center justify-center lg:justify-start w-full h-full gap-6"
    >
      {#if $screenSize !== "xs"}
        <SearchButton bind:searchFocus />
      {/if}
      <ul
        class="hidden lg:flex h-full gap-2 items-center text-slate-200 opacity-80"
      >
        {#each routes as route}
          <li>
            <a
              class="relative flex items-center justify-center py-3 px-4"
              href={route.path}
            >
              <span class="font-medium">{route.name}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <ul class="flex h-full gap-2 lg:gap-4 items-center text-white">
      {#if $screenSize === "xs"}
        <li>
          <button
            aria-label="menu"
            class="flex lg:hidden items-center p-3 hover:bg-slate-200/20 rounded-xl transition duration-300 ease-out"
          >
            <svg
              width="28"
              height="28"
              fill="currentColor"
              class=" text-slate-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              ><path
                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              /></svg
            >
          </button>
        </li>
      {/if}
      <li>
        {#if $screenSize === "sm" || $screenSize === "xs"}
          <a
            class="flex relative text-slate-200 p-3 hover:bg-slate-200/20 rounded-xl transition duration-300 ease-out"
            href="/wallet"
          >
            <svg
              width={28}
              height={28}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              ><path
                d="M18.0049 7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3H18.0049V7ZM4.00488 9V19H20.0049V9H4.00488ZM4.00488 5V7H16.0049V5H4.00488ZM15.0049 13H18.0049V15H15.0049V13Z"
              /></svg
            >
          </a>
        {:else}
          <a
            class="relative text-slate-800 flex items-center justify-center py-3 px-4"
            href="/wallet"
            ><div
              class="absolute w-full h-full rounded-md bg-gradient-to-r backdrop-blur-xl from-white/90 to-violet-200/90"
            />
            <div class="relative items-center justify-center flex gap-2">
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1"
                ><path
                  d="M18.0049 7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3H18.0049V7ZM4.00488 9V19H20.0049V9H4.00488ZM4.00488 5V7H16.0049V5H4.00488ZM15.0049 13H18.0049V15H15.0049V13Z"
                /></svg
              ><span class=" font-medium">Wallet</span>
            </div></a
          >
        {/if}
      </li>
      <li>
        <button
          aria-label="menu"
          class="flex lg:hidden items-center gap-2 p-3 hover:bg-slate-200/20 rounded-xl transition duration-300 ease-out"
          on:click={() => (menuOpen = true)}
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={28}
            height={28}
            ><path
              d="M7.5 11.5C5.01472 11.5 3 9.48528 3 7C3 4.51472 5.01472 2.5 7.5 2.5C9.98528 2.5 12 4.51472 12 7C12 9.48528 9.98528 11.5 7.5 11.5ZM7.5 21.5C5.01472 21.5 3 19.4853 3 17C3 14.5147 5.01472 12.5 7.5 12.5C9.98528 12.5 12 14.5147 12 17C12 19.4853 9.98528 21.5 7.5 21.5ZM17.5 11.5C15.0147 11.5 13 9.48528 13 7C13 4.51472 15.0147 2.5 17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5ZM17.5 21.5C15.0147 21.5 13 19.4853 13 17C13 14.5147 15.0147 12.5 17.5 12.5C19.9853 12.5 22 14.5147 22 17C22 19.4853 19.9853 21.5 17.5 21.5ZM7.5 9.5C8.88071 9.5 10 8.38071 10 7C10 5.61929 8.88071 4.5 7.5 4.5C6.11929 4.5 5 5.61929 5 7C5 8.38071 6.11929 9.5 7.5 9.5ZM7.5 19.5C8.88071 19.5 10 18.3807 10 17C10 15.6193 8.88071 14.5 7.5 14.5C6.11929 14.5 5 15.6193 5 17C5 18.3807 6.11929 19.5 7.5 19.5ZM17.5 9.5C18.8807 9.5 20 8.38071 20 7C20 5.61929 18.8807 4.5 17.5 4.5C16.1193 4.5 15 5.61929 15 7C15 8.38071 16.1193 9.5 17.5 9.5ZM17.5 19.5C18.8807 19.5 20 18.3807 20 17C20 15.6193 18.8807 14.5 17.5 14.5C16.1193 14.5 15 15.6193 15 17C15 18.3807 16.1193 19.5 17.5 19.5Z"
            /></svg
          ></button
        >
      </li>
    </ul>
  </nav>
</header>
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
    class={`absolute h-[calc(100vh-2rem)] text-slate-200 p-3 m-4 flex flex-col bg-zinc-900 bg-opacity-90 right-0 rounded-xl gap-2
    transition-all duration-300 ease-out justify-between ${
      menuOpen
        ? "visible translate-x-0 opacity-100"
        : "invisible translate-x-12 opacity-0"
    }`}
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
          class={`rounded-2xl transition ease-out duration-300 hover:bg-sky-200/10 flex items-end w-full`}
        >
          <p
            class="text-3xl transition ease-out duration-300 font-medium w-full p-4 pr-20 hover:translate-x-3 shadow-slate-200/30 hover:[text-shadow:_0_0_1rem_var(--tw-shadow-color)]"
          >
            {route.name}
          </p>
        </a>
      {/each}
    </div>
    <div class="flex w-full flex-col gap-4">
      <a
        href="/wallet"
        class={`relative transition-all ease-out duration-300 flex items-end w-full hover:brightness-125`}
      >
        <p
          class="z-[1] text-3xl transition ease-out duration-300 font-medium w-full p-4 pr-20 hover:translate-x-3 shadow-slate-200/30 hover:[text-shadow:_0_0_1rem_var(--tw-shadow-color)]"
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

<script lang="ts">
  import { screenSize } from "$lib/stores";
  import type { Routes } from "$lib/types";
  import MenuOverlay from "./MenuOverlay.svelte";
  import Search from "./Search.svelte";
  import SearchButton from "./SearchButton.svelte";
  import { userData } from "$lib/backend/userData";
  export let routes: Routes[];
  let menuOpen = false;
  let searchOpen = false;
  $: {
    if (typeof document != "undefined") {
      menuOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    }
  }
  $: {
    if ($screenSize !== "sm" && $screenSize !== "xs") {
      searchOpen = false;
    }
  }
  function setSearchOpen(isOpen: boolean) {
    searchOpen = isOpen;
  }
</script>

<Search {searchOpen} {setSearchOpen} />

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
          <img
            class="h-full"
            src="/images/icon-full-horizontal.png"
            alt="logo"
          />
        {:else}
          <img class="h-full" src="/images/icon-full.png" alt="logo" />
        {/if}
      </a>
    </div>
    <div
      class="sm:flex hidden items-center lg:justify-start w-full h-full gap-6"
    >
      {#if $screenSize !== "xs"}
        <SearchButton />
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
          <!-- Search button -->
          <button
            aria-label="search"
            class="flex lg:hidden items-center p-3 hover:bg-slate-200/20 rounded-xl transition duration-300 ease-out"
            on:click={() => (searchOpen = true)}
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
            <!-- Wallet icon -->
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
          <!-- Wallet button -->
          <a
            class="relative text-slate-800 flex items-center justify-center py-3 px-4"
            href="/wallet"
            ><div
              class="absolute w-full h-full rounded-md bg-gradient-to-r backdrop-blur-xl from-white/90 to-violet-200/90"
            />
            <div
              class="relative items-center justify-center flex gap-2 whitespace-nowrap"
            >
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1"
                ><path
                  d="M18.0049 7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3H18.0049V7ZM4.00488 9V19H20.0049V9H4.00488ZM4.00488 5V7H16.0049V5H4.00488ZM15.0049 13H18.0049V15H15.0049V13Z"
                /></svg
              >
              {#await $userData}
                <span class="animate-pulse">Loading...</span>
              {:then data}
                {#if data}
                  <span class="font-medium">{data.total_rbs + " RBS"}</span>
                {:else}
                  <span>+Wallet</span>
                {/if}
              {:catch error}
                <span class="text-red-400">+Wallet</span>
              {/await}
            </div></a
          >
        {/if}
      </li>
      <!-- Menu button -->
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
<MenuOverlay bind:menuOpen {routes} />

<script lang="ts">
  import { sleep } from "$lib/helpers";

  export let searchOpen: boolean;
  export let setSearchOpen: (b: boolean) => void;
  let searchInput: HTMLInputElement;
  $: {
    if (typeof searchInput != "undefined") {
      if (searchOpen) {
        // no delay can't focus, so we wait a bit
        sleep(50).then(() => searchInput.focus());
      } else {
        searchInput.blur();
      }
    }
  }
</script>

<div
  class={`fixed transition-all ease-out duration-200 top-0 w-full h-full items-center justify-center flex z-[9999999999] !p-0 ${
    searchOpen ? "opacity-100" : "invisible opacity-0"
  }`}
>
  <div
    class={`${
      searchOpen
        ? "outline-slate-400 opacity-100"
        : "outline-black invisible opacity-0"
    } cursor-text 
absolute top-0 m-8 flex transition-all bg-opacity-[0.80] w-[calc(100%-4rem)] max-w-[40rem]`}
    on:click={() => searchInput.focus()}
    aria-hidden="true"
  >
    <div
      class={`bg-zinc-900 p-2 pl-4 ${
        searchOpen ? "outline-slate-400 flex" : "outline-black hidden"
      } w-full ease-out duration-300 items-center
gap-4 rounded-3xl text-lg text-slate-200 cursor-text`}
      aria-hidden="true"
    >
      <!-- Search icon -->
      <svg
        width="28"
        height="28"
        fill="currentColor"
        class="opacity-80 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ><path
          d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
        /></svg
      >
      <input
        class="bg-transparent outline-none focus:outline-none w-full"
        type="search"
        name="search"
        placeholder="Astronauts"
        autocomplete="off"
        bind:this={searchInput}
      />
      <!-- X button -->
      <button
        aria-label="close search"
        class="hover:bg-sky-200/10 cursor-pointer duration-300 ease-out rounded-full opacity-80 p-2"
        on:click={() => setSearchOpen(false)}
      >
        <svg
          width={36}
          height={36}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><path
            d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
          /></svg
        >
      </button>
    </div>
  </div>
  <div
    class="w-full h-full bg-black/80"
    aria-hidden="true"
    on:click={() => setSearchOpen(false)}
  />
</div>

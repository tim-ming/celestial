<script lang="ts">
  let searchFocus = false;
  let searchInput: HTMLInputElement;
</script>

<button
  aria-label="search"
  class={`${
    searchFocus ? "outline-slate-400" : "outline-black"
  } max-w-xs w-full relative outline-1 outline transition-[outline] ease-out duration-300 flex bg-opacity-[0.15]
  p-4 gap-3 rounded-2xl bg-sky-100 backdrop-blur-xl text-sm text-slate-200 cursor-text items-center`}
  on:click={() => searchInput.focus()}
>
  <svg
    width="20"
    height="20"
    fill="currentColor"
    class="opacity-60 shrink-0"
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
    on:focus={() => (searchFocus = true)}
    on:blur={() => (searchFocus = false)}
  />
</button>

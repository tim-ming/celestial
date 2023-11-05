<script lang="ts">
  import { page } from "$app/stores";
  let searchFocus = false;
</script>

<header class="absolute z-[999] w-full">
  <nav
    class="relative flex justify-between items-center w-full gap-4 h-20 py-2"
  >
    <ul class="flex h-full gap-6 lg:gap-10 items-center text-white">
      <a class="flex h-full shrink-0" href="/">
        <img src="/images/icon.png" alt="logo" />
      </a>
      <li><a href="/">Marketplace</a></li>
      <li><a href="/">About</a></li>
      <span class="h-[60%] w-px bg-white opacity-50" />
      <div
        class={`${
          searchFocus ? "outline-slate-400" : "outline-black"
        } relative outline-1 outline transition-[outline] ease-out duration-300 flex items-center bg-opacity-10 px-3 gap-3 rounded-lg bg-sky-200 backdrop-blur-xl text-sm text-white`}
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
          class="w-full bg-transparent h-10 outline-none focus:outline-none"
          type="search"
          name="search"
          placeholder="Astronauts"
          autocomplete="off"
          on:focus={() => (searchFocus = true)}
          on:blur={() => (searchFocus = false)}
        />
      </div>
    </ul>
    <ul class="flex h-full gap-4 items-center text-white">
      <li><a href="/">Wallet</a></li>
    </ul>
  </nav>
</header>

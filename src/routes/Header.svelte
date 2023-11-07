<script lang="ts">
  import { page } from "$app/stores";
  let searchFocus = false;
</script>

<header class="fixed z-[999] w-full">
  <nav
    class="relative flex justify-between items-center w-full gap-4 h-20 py-2"
  >
    <ul class="w-full flex h-full gap-6 lg:gap-10 items-center text-white">
      <a class="flex h-full shrink-0" href="/">
        <img src="/images/icon.png" alt="logo" />
      </a>
      <li><a href="/">Marketplace</a></li>
      <li><a href="/">About</a></li>
      <span class="h-[60%] w-px bg-white opacity-50" />
      <div
        class={`${
          searchFocus ? "outline-slate-400" : "outline-black"
        } max-w-xs w-full relative outline-1 outline transition-[outline] ease-out duration-300 flex items-center bg-opacity-10 
        p-3 gap-3 rounded-lg bg-sky-200 backdrop-blur-xl text-sm text-white`}
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
          class="w-full bg-transparent outline-none focus:outline-none"
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
      <li>
        <a class="relative flex items-center justify-center p-2 gap-1" href="/"
          ><div
            class="absolute w-full h-full bg-gradient-to-r z-[999] backdrop-blur-xl from-white to-violet-200"
          />
          <svg
            width={20}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              d="M18.0049 7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3H18.0049V7ZM4.00488 9V19H20.0049V9H4.00488ZM4.00488 5V7H16.0049V5H4.00488ZM15.0049 13H18.0049V15H15.0049V13Z"
            /></svg
          ><span>Wallet</span></a
        >
      </li>
    </ul>
  </nav>
</header>

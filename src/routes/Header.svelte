<script lang="ts">
  import { page } from "$app/stores";
  import { screenSize } from "$lib/stores";
  let searchFocus = false;
  let menuOpen = false;
  const routes = [
    {
      name: "Marketplace",
      path: "/marketplace",
      color: "bg-blue-100",
    },
    {
      name: "Creators",
      path: "/creators",
      color: "bg-violet-100",
    },
    {
      name: "Drops",
      path: "/drops",
      color: "bg-pink-100",
    },
    {
      name: "Rewards",
      path: "/rewards",
      color: "bg-cyan-100",
    },
  ];
</script>

<header
  class="fixed z-[9999] bg-black/80 backdrop-blur-sm w-full border-b-[1px] border-violet-200/40"
>
  <nav
    class="relative z-[1] flex justify-between items-center w-full gap-8 h-20 py-2"
  >
    <div
      class="flex shrink-0 h-full gap-6 lg:gap-10 items-center text-slate-200"
    >
      <button
        aria-label="menu"
        class="flex lg:hidden items-center gap-2 p-2 hover:bg-slate-200/20 rounded-md transition duration-300 ease-out"
        on:click={() => (menuOpen = true)}
      >
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          ><path
            d="M7.5 11.5C5.01472 11.5 3 9.48528 3 7C3 4.51472 5.01472 2.5 7.5 2.5C9.98528 2.5 12 4.51472 12 7C12 9.48528 9.98528 11.5 7.5 11.5ZM7.5 21.5C5.01472 21.5 3 19.4853 3 17C3 14.5147 5.01472 12.5 7.5 12.5C9.98528 12.5 12 14.5147 12 17C12 19.4853 9.98528 21.5 7.5 21.5ZM17.5 11.5C15.0147 11.5 13 9.48528 13 7C13 4.51472 15.0147 2.5 17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5ZM17.5 21.5C15.0147 21.5 13 19.4853 13 17C13 14.5147 15.0147 12.5 17.5 12.5C19.9853 12.5 22 14.5147 22 17C22 19.4853 19.9853 21.5 17.5 21.5ZM7.5 9.5C8.88071 9.5 10 8.38071 10 7C10 5.61929 8.88071 4.5 7.5 4.5C6.11929 4.5 5 5.61929 5 7C5 8.38071 6.11929 9.5 7.5 9.5ZM7.5 19.5C8.88071 19.5 10 18.3807 10 17C10 15.6193 8.88071 14.5 7.5 14.5C6.11929 14.5 5 15.6193 5 17C5 18.3807 6.11929 19.5 7.5 19.5ZM17.5 9.5C18.8807 9.5 20 8.38071 20 7C20 5.61929 18.8807 4.5 17.5 4.5C16.1193 4.5 15 5.61929 15 7C15 8.38071 16.1193 9.5 17.5 9.5ZM17.5 19.5C18.8807 19.5 20 18.3807 20 17C20 15.6193 18.8807 14.5 17.5 14.5C16.1193 14.5 15 15.6193 15 17C15 18.3807 16.1193 19.5 17.5 19.5Z"
          /></svg
        ></button
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
      class={`${
        searchFocus ? "outline-slate-400" : "outline-black"
      } max-w-xs w-full relative outline-1 outline transition-[outline] ease-out duration-300 flex items-center bg-opacity-[0.15]
        p-3 gap-3 rounded-xl bg-sky-100 backdrop-blur-xl text-sm text-white`}
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
        class="bg-transparent outline-none focus:outline-none"
        type="search"
        name="search"
        placeholder="Astronauts"
        autocomplete="off"
        on:focus={() => (searchFocus = true)}
        on:blur={() => (searchFocus = false)}
      />
    </div>

    <ul class="flex h-full gap-4 items-center text-white">
      <li>
        <a
          class="relative text-slate-800 flex items-center justify-center py-3 px-4"
          href="/"
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
      </li>
    </ul>
  </nav>
  <!-- <aside
    class={`absolute text-sm h-screen w-48 transition ease-out ${
      menuOpen ? "translate-x-[-12.5rem]" : "translate-x-0"
    } lg:translate-x-0 left-0 top-20 !p-3 bg-black/95 border-r-[1px] border-violet-200/40`}
  >
    <nav class="relative flex flex-col gap-4">
      <ul
        class="flex flex-col gap-3 [&>*]:ease-out [&>*>*]:fill-none [&>*]:transition text-white [&>*]:p-4 [&>*]:rounded-lg"
      >
        <li class="flex items-center gap-4 hover:bg-violet-300/40">
          <svg
            stroke="currentColor"
            stroke-width={1}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={22}
            height={22}
            ><path
              d="M22 20V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422V20H22ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"
            /></svg
          ><a href="/">Marketplace</a>
        </li>
        <li class="flex items-center gap-4 hover:bg-violet-300/40">
          <svg
            stroke="currentColor"
            stroke-width={1}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={22}
            height={22}
            ><path
              d="M8.49816 20.0047H15.5018C14.8432 21.5841 13.5794 22.848 12 23.5066C10.4206 22.848 9.15679 21.5841 8.49816 20.0047ZM18 14.8095L20 17.0777V19.0047H4V17.0777L6 14.8095V9.00475C6 5.5215 8.50442 2.55819 12 1.45996C15.4956 2.55819 18 5.5215 18 9.00475V14.8095ZM12 11.0047C13.1046 11.0047 14 10.1093 14 9.00475C14 7.90018 13.1046 7.00475 12 7.00475C10.8954 7.00475 10 7.90018 10 9.00475C10 10.1093 10.8954 11.0047 12 11.0047Z"
            /></svg
          ><a href="/">Drops</a>
        </li>
        <li class="flex items-center gap-4 hover:bg-violet-300/40">
          <svg
            stroke="currentColor"
            stroke-width={1}
            class="!fill-sky-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={22}
            height={22}
            ><path
              d="M4.87759 3.00293H19.1319C19.4518 3.00293 19.7524 3.15601 19.9406 3.41476L23.7634 8.67115C23.9037 8.86403 23.8882 9.12913 23.7265 9.30438L12.3721 21.6049C12.1848 21.8078 11.8685 21.8205 11.6656 21.6332C11.6558 21.6241 11.6464 21.6147 11.6373 21.6049L0.282992 9.30438C0.121226 9.12913 0.10575 8.86403 0.246026 8.67115L4.06886 3.41476C4.25704 3.15601 4.55766 3.00293 4.87759 3.00293Z"
            /></svg
          ><a href="/">Rewards</a>
        </li>
      </ul>

      <ul class="flex flex-col gap-4 text-white">
        <li>
          <a
            class="relative text-slate-800 flex items-center justify-center py-3 px-4"
            href="/"
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
        </li>
      </ul>
    </nav>
  </aside> -->
</header>
<div
  class={`fixed z-[99999999] flex items-center 
h-screen w-full left-0 top-0 ${menuOpen ? "visible" : "invisible"}`}
>
  <div
    class={`absolute top-0 left-0 bg-black bg-opacity-70 backdrop-blur-sm w-screen h-screen -z-[1] transition-all duration-300 ease-out ${
      menuOpen ? "visible opacity-100" : "invisible opacity-0"
    }`}
    on:click={() => (menuOpen = false)}
  />

  <div
    class={`h-[calc(100vh-3rem)] text-slate-200 p-3 flex flex-col bg-zinc-800 bg-opacity-95 left-0 rounded-xl gap-2
    transition-all duration-300 ease-out ${
      menuOpen
        ? "visible translate-x-0 opacity-100"
        : "invisible -translate-x-12 opacity-0"
    }`}
  >
    <div class="flex pointer-events-none">
      <button
        class="flex pointer-events-auto"
        aria-label="close menu"
        on:click={() => (menuOpen = false)}
      >
        <svg
          class="  hover:bg-sky-200/10 duration-300 ease-out rounded-xl opacity-80 p-2"
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
</div>

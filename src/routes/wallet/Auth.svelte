<script lang="ts">
  import Create from "./Create.svelte";
  import Login from "./Login.svelte";
  let isLogin = true;

  function setLogin(login: boolean) {
    isLogin = login;
  }
</script>

<div class="grid grid-cols-2 min-h-screen items-center !p-0">
  <div
    class="flex flex-col pl-[10vw] gap-12 w-full h-full z-[1] justify-center bg-black shadow-[0rem_0_10rem_1rem_var(--tw-shadow-colored)] shadow-black"
  >
    <h1
      class="text-5xl sm:text-6xl font-semibold bg-gradient-to-b from-white to-violet-200 text-transparent bg-clip-text"
    >
      Join the Celestial community today.
    </h1>
    <p class="text-slate-400 max-w-[30rem]">
      Create your Celestial Wallet for free and embark on an endless odyssey of
      Digital Collectibles.
    </p>
  </div>
  <div
    class="flex w-full h-full justify-center bg-cover bg-center pt-36"
    style={`background-image:url('images/starry.jpg');background-image: -webkit-image-set(url("images/starry.webp")`}
  >
    <div class="w-full max-w-[40rem] p-8">
      <div
        class="flex flex-col w-full gap-8 shadow-[0_0_5rem_1rem_var(--tw-shadow-colored)] shadow-violet-200/10 backdrop-blur-sm p-8 pt-4 rounded-xl text-slate-200 bg-black/80"
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
        <div class={`${isLogin ? "flex" : "hidden"} flex-col w-full gap-12`}>
          <Login {setLogin} />
        </div>
        <div class={`${isLogin ? "hidden" : "flex"} flex-col w-full gap-12`}>
          <Create {setLogin} />
        </div>
      </div>
    </div>
  </div>
</div>

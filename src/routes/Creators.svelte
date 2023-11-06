<script>
  import { screenSize } from "$lib/stores";
  import CreatorTable from "./CreatorTable.svelte";
</script>

<section
  class="flex flex-col gap-4 py-10 w-full"
  style="background: rgb(54,22,46);
  background: radial-gradient(circle, rgba(54,22,46,1) 0%, rgba(0,0,0,1) 86%);"
>
  <div
    class="border flex flex-col gap-8 border-slate-700 bg-black bg-opacity-40 backdrop-blur-xl rounded-lg card-padding"
    style="box-shadow: 0 0 2rem rgba(255, 255, 255, 0.1);"
  >
    <div class="flex flex-col gap-1">
      <h2 class="text-4xl font-semibold text-white tracking-tight">
        Trending.
      </h2>
      <h3 class="text-slate-300">Surf in the hype of top-emerging creators.</h3>
    </div>
    <div class="flex w-full gap-4">
      {#if $screenSize === "xl"}
        <CreatorTable creators={Array.from(Array(5).keys(), (x) => x + 1)} />
        <CreatorTable creators={Array.from(Array(5).keys(), (x) => x + 6)} />
      {:else}
        <CreatorTable creators={Array.from(Array(10).keys(), (x) => x + 1)} />
      {/if}
    </div>
    <a
      href="/marketplace"
      class="relative w-full backdrop-blur-xl py-4 flex items-center justify-center font-medium text-lg rounded-md overflow-hidden"
    >
      <div
        class="absolute w-full h-full bg-gradient-to-r opacity-10 backdrop-blur-xl from-sky-100 to-violet-200 hover:opacity-20 transition duration-300 ease-out"
      />
      <p class="pointer-events-none relative text-slate-200">
        Browse more creators →
      </p>
    </a>
  </div>
</section>

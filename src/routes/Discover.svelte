<script lang="ts">
  import { screenSize } from "$lib/stores";

  // request for data in the future. Cons: it keeps requesting though.
  function getArray(x: number) {
    return Array(x);
  }
</script>

<section
  class="flex flex-col gap-4 py-10 w-full"
  style="background: rgb(27,22,54);
  background: radial-gradient(circle, rgba(27,22,54,1) 0%, rgba(0,0,0,1) 85%);"
>
  <div
    class="border flex flex-col gap-8 border-slate-700 bg-black bg-opacity-40 backdrop-blur-xl rounded-lg card-padding"
    style="box-shadow: 0 0 2rem rgba(255, 255, 255, 0.1);"
  >
    <div class="flex flex-col gap-1">
      <h2 class="text-4xl font-semibold text-white tracking-tight">
        Discover.
      </h2>
      <h3 class="text-slate-300">Upcoming hottest drops.</h3>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
    >
      {#if $screenSize === "xl"}
        {#each getArray(10) as _, i}
          <div
            class="flex aspect-[4/5] border border-slate-500 rounded-lg w-full"
          />
        {/each}
      {:else if $screenSize === "lg"}
        {#each getArray(8) as _, i}
          <div
            class="flex aspect-[4/5] border border-slate-500 rounded-lg w-full"
          />
        {/each}
      {:else if $screenSize === "md"}
        {#each getArray(6) as _, i}
          <div
            class="flex aspect-[4/5] border border-slate-500 rounded-lg w-full"
          />
        {/each}
      {:else}
        {#each getArray(4) as _, i}
          <div
            class="flex aspect-[4/5] border border-slate-500 rounded-lg w-full"
          />
        {/each}
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
        View all drops →
      </p>
    </a>
  </div>
</section>

<script lang="ts">
  export let creators: any[];
  export let title: string;
</script>

<div class="flex flex-col w-full gap-2">
  <div class="flex flex-col gap-1">
    <h2 class="text-2xl font-semibold text-white tracking-tight">
      {title}
    </h2>
  </div>
  <span class="w-full bg-slate-200 bg-opacity-10 h-px" />
  <div
    class="
    flex flex-col w-full
    [&>*]:flex [&>*]:justify-between
    [&>*]:items-center
    [&>*]:w-full [&>*]:p-2 sm:[&>*]:p-3
    sm:[&>*]:gap-8 [&>*]:gap-4 [&>*]:rounded-md
  "
  >
    <div class="flex text-slate-400 border-none text-sm">
      <span class="flex flex-grow basis-32">Item</span>
      <span class="basis-24">Price</span>
      <span class="basis-20">Time</span>
    </div>
    {#each creators as creator, i}
      <a
        href=""
        class={`flex hover:brightness-[1.2] ${
          i % 2 == 0
            ? "bg-slate-600 bg-opacity-[0.15]"
            : "bg-slate-800 bg-opacity-10"
        }`}
      >
        <div
          class="flex-grow min-w-0 basis-32 flex items-center gap-3 sm:gap-4"
        >
          <span
            class="h-10 w-10 sm:h-12 sm:w-12 border shrink-0 border-opacity-40 border-slate-700 rounded-md"
          />
          <div
            class="
          flex flex-col justify-center
          [&>*]:overflow-hidden [&>*]:whitespace-nowrap [&>*]:text-ellipsis min-w-0 [&>*]:min-w-0"
          >
            <a href="" class=" hover:underline font-medium text-slate-200"
              >Emerald</a
            >
            <p class="text-sm text-slate-400">Premium Ore</p>
          </div>
        </div>
        <div
          class="text-sm basis-24 font-medium text-slate-300 overflow-hidden text-ellipsis"
        >
          249.21 SP
        </div>
        <div
          class="text-sm basis-20 font-medium text-slate-300 overflow-hidden text-ellipsis"
        >
          1hr. ago
        </div>
      </a>
    {/each}
  </div>
</div>

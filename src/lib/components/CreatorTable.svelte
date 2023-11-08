<script lang="ts">
  export let creators: any[];
</script>

<div
  class="
    flex flex-col w-full
    [&>*]:flex [&>*]:justify-between
    [&>*]:items-center [&>*]:border
    [&>*]:border-opacity-50
    [&>*]:border-slate-600 [&>*]:rounded-lg
    [&>*]:w-full [&>*]:p-3 sm:[&>*]:p-4
    sm:[&>*]:gap-8 [&>*]:gap-4
    gap-4
  "
>
  <div class="flex text-slate-400 border-none text-sm !py-0">
    <span class="flex basis-4">#</span>
    <span class="flex flex-grow basis-32">Creator</span>
    <span class="basis-8">Items</span>
    <span class="basis-24">Volume</span>
  </div>
  {#each creators as creator}
    <div class="flex">
      <span class="flex basis-4 text-slate-200">{creator}</span>
      <div class="flex-grow min-w-0 basis-32 flex items-center gap-3 sm:gap-4">
        <span
          class="h-14 w-14 sm:h-16 sm:w-16 border shrink-0 border-opacity-40 border-slate-700 rounded-md"
        />
        <div
          class="
          flex flex-col justify-center
          [&>*]:overflow-hidden [&>*]:whitespace-nowrap [&>*]:text-ellipsis min-w-0 [&>*]:min-w-0"
        >
          <p class="font-medium text-slate-200">Spacejunkies</p>
          <p class="text-sm text-slate-400">Space junk, Ores</p>
        </div>
      </div>
      <div class="text-sm basis-8 font-medium text-slate-300">42</div>
      <div
        class="text-sm basis-24 font-medium text-slate-300 overflow-hidden text-ellipsis"
      >
        249.21 SP
      </div>
    </div>
  {/each}
</div>

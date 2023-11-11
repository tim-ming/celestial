<script lang="ts">
  import { screenSize } from "$lib/stores";
  import Listings from "$lib/components/Listings.svelte";

  // request for data in the future. Cons: it keeps requesting though.
  function getArray(x: number) {
    return Array(x);
  }
</script>

<section
  class="flex flex-col gap-4 w-full"
  style="background: rgb(27,22,54);
  background: radial-gradient(circle, rgba(27,22,54,1) 0%, rgba(0,0,0,1) 85%);"
>
  <div
    class="border flex flex-col lg:flex-row gap-12 border-slate-700 bg-black bg-opacity-40 backdrop-blur-xl rounded-lg card-padding"
    style="box-shadow: 0 0 2rem rgba(255, 255, 255, 0.1);"
  >
    <Listings
      title="Recently listed."
      creators={Array.from(Array(5).keys(), (x) => x + 1)}
    />
    <Listings
      title="Recently sold."
      creators={Array.from(Array(5).keys(), (x) => x + 1)}
    />
  </div>
</section>

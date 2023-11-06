<script lang="ts">
  import Hero from "./Hero.svelte";
  import Header from "./Header.svelte";
  import Discover from "./Discover.svelte";
  import Creators from "./Creators.svelte";
  import Recent from "./Recent.svelte";
</script>

<div
  class="[&>*]:px-4 sm:[&>*]:px-8 [&>*]:max-w-[80rem] flex flex-col items-center bg-black"
>
  <Header />
  <Hero />
  <Discover />
  <Creators />
  <Recent />
</div>

<script lang="ts">
  import Hero from "./Hero.svelte";
  import Header from "./Header/Component.svelte";
  import Discover from "./Discover.svelte";
  import Creators from "./Creators.svelte";
  import Recent from "./Recent.svelte";
  import Marketplace from "./Marketplace.svelte";
  import Claim from "./Claim.svelte";
  import Footer from "./Footer.svelte";
  import type { Routes } from "$lib/types";
  const ROUTES: Routes[] = [
    {
      name: "Marketplace",
      path: "/marketplace",
    },
    {
      name: "Creators",
      path: "/creators",
    },
    {
      name: "Drops",
      path: "/drops",
    },
    {
      name: "Rewards",
      path: "/rewards",
    },
  ];
</script>

<div class="flex flex-col items-center bg-black">
  <div
    class="[&>*]:px-4 gap-10 sm:[&>*]:px-8 [&>*]:max-w-[100rem] w-full flex flex-col items-center bg-black"
  >
    <Header routes={ROUTES} />
  </div>
  <div
    class="[&>*]:px-4 gap-10 [&>*]:max-w-[calc(100rem)] w-full sm:[&>*]:px-8 flex flex-col items-center bg-black"
  >
    <Hero />
    <Discover />
    <Claim />
    <Marketplace />
    <Creators />
    <Recent />
    <Footer />
  </div>
</div>

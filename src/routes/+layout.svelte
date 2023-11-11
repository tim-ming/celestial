<script lang="ts">
  import "./styles.css";
  import { screen } from "$lib/stores";
  import Header from "./Header/Component.svelte";
  import Footer from "./Footer/Component.svelte";
  let screenX = 0;
  let screenY = 0;
  $: screen.set({ x: screenX, y: screenY });
  import type { Routes } from "$lib/types";
  const ROUTES: Routes[] = [
    {
      name: "Marketplace",
      path: "/marketplace",
    },
    {
      name: "Create",
      path: "/create",
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

<div class="app">
  <main>
    <div class="flex flex-col items-center bg-black">
      <div
        class="[&>*]:px-4 gap-10 sm:[&>*]:px-8 [&>*]:max-w-[100rem] w-full flex flex-col items-center bg-black"
      >
        <Header routes={ROUTES} />
      </div>
      <div
        class="[&>*]:px-4 gap-10 [&>*]:max-w-[calc(100rem)] w-full sm:[&>*]:px-8 flex flex-col items-center bg-black"
      >
        <slot />
        <Footer />
      </div>
    </div>
  </main>
</div>
<svelte:window bind:innerWidth={screenX} bind:innerHeight={screenY} />

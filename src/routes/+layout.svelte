<script lang="ts">
  import "./styles.css";
  import Header from "./Header/Component.svelte";
  import Footer from "./Footer/Component.svelte";
  import type { Routes } from "$lib/types";
  import Init from "./Init.svelte";

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

<Init />
<div class="app">
  <main>
    <div class="flex flex-col items-center bg-black">
      <div
        class="[&>*]:px-2 gap-10 sm:[&>*]:px-6 [&>*]:max-w-[100rem] w-full flex flex-col items-center bg-black"
      >
        <Header routes={ROUTES} />
      </div>
      <div
        class="[&>*]:px-4 [&>*>*]:rounded-xl [&>*>*]:card-padding gap-10 [&>*]:max-w-[calc(100rem)] w-full sm:[&>*]:px-8 flex flex-col items-center bg-black"
      >
        <slot />
        <Footer />
      </div>
    </div>
  </main>
</div>

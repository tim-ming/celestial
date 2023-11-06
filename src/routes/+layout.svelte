<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import { screen } from "$lib/stores";

  let screenX = 0;
  let screenY = 0;
  $: screen.set({ x: screenX, y: screenY });
</script>

<div class="app">
  <main>
    <slot />
  </main>
</div>
<svelte:window bind:innerWidth={screenX} bind:innerHeight={screenY} />

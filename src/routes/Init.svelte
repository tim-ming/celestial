<!--
  @component
  Contains code to perform global side effects.
-->
<script lang="ts">
  import { user } from "$lib/backend/user";
  import { onMount } from "svelte";
  import { screen } from "$lib/stores";
  import { userData } from "$lib/backend/userData";

  let screenX = 0;
  let screenY = 0;
  $: screen.set({ x: screenX, y: screenY });

  onMount(async () => {
    user.init();
  });

  $: {
    if ($user) {
      userData.update($user.$id);
    }
  }
</script>

<svelte:window bind:innerWidth={screenX} bind:innerHeight={screenY} />

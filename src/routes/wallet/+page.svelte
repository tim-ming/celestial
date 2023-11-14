<script>
  import { user } from "$lib/backend/user";
  import { get } from "svelte/store";
  import Auth from "./Auth.svelte";
  import Wallet from "./Wallet.svelte";
  import { onMount } from "svelte";
</script>

{#if $user}
  <Wallet />
{:else}
  <Auth />
{/if}

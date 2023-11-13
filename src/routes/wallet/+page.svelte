<script>
  import { user } from "$lib/backend/user";
  import { get } from "svelte/store";
  import Auth from "./Auth.svelte";
  import Wallet from "./Wallet.svelte";

  $: console.log($user);
</script>

{#if $user}
  <Wallet user={get(user)} />
{:else}
  <Auth />
{/if}

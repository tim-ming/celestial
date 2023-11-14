<script lang="ts">
  import { user } from "$lib/backend/user";
  import { userData } from "$lib/backend/userData";
</script>

{#if $userData}
  <div class="min-h-screen flex items-center justify-center">
    <img src={$userData.img_url[0]} alt="pfp" />
    <h1 class="text-5xl text-slate-200" on:click={() => user.logout()}>
      Logout
    </h1>
  </div>
{/if}

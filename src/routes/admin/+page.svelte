<script lang="ts">
  import {
    DATABASE_ID,
    USER_COLLECTION_ID,
    databases,
  } from "$lib/backend/appwrite";
  import { user } from "$lib/backend/user";

  async function destroyUsers() {
    const docs = (
      await databases.listDocuments(DATABASE_ID, USER_COLLECTION_ID)
    ).documents;
    const promises = [];
    for (const doc of docs) {
      if ($user && doc.$id === $user.$id) continue; // don't delete current user
      promises.push(
        databases.deleteDocument(DATABASE_ID, USER_COLLECTION_ID, doc.$id)
      );
    }
    Promise.all(promises).then(console.log).catch(console.log);
  }
</script>

<div class="min-h-screen flex items-center justify-center text-slate-200">
  <button class="text-5xl" on:click={destroyUsers}>DESTROY USERS</button>
</div>

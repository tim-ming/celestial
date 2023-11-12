import { writable, type Writable } from "svelte/store";
import { Databases, ID, Query, type Models } from "appwrite";
import { databases } from "$lib/appwrite";

export const IDEAS_DATABASE_ID = "6508783c5dc784d544dd"; // Replace with your database ID
export const IDEAS_COLLECTION_ID = "65087840ab307cb06883"; // Replace with your collection ID

const store: Writable<Models.Document[]> = writable([]);

async function init() {
  const response = await databases.listDocuments(
    IDEAS_DATABASE_ID,
    IDEAS_COLLECTION_ID,
    // Use a query to how the latest ideas first
    [Query.orderDesc("$createdAt")]
  );
  store.set(response.documents);
}

async function add(userId: string, title: string, description: string) {
  const response = await databases.createDocument(
    IDEAS_DATABASE_ID,
    IDEAS_COLLECTION_ID,
    ID.unique(),
    {
      userId,
      title,
      description,
    }
  );
  store.update((ideas) => [response, ...ideas]);
}

async function remove(id: string) {
  await databases.deleteDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, id);
  store.update((ideas) => ideas.filter((idea) => idea.$id !== id));
}

export const ideas = {
  subscribe: store.subscribe, // Expose the store's value with $ideas
  init,
  add,
  remove,
};

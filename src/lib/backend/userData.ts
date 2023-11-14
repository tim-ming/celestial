import type { UserData } from "$lib/types";
import type { Models } from "appwrite";
import { writable, type Writable } from "svelte/store";
import { DATABASE_ID, databases, USER_COLLECTION_ID } from "./appwrite";

export const store: Writable<(Models.Document & UserData) | null> =
  writable(null);

export const update = async (userId: string) => {
  const docs = await databases.listDocuments(DATABASE_ID, USER_COLLECTION_ID);
  store.set(docs.documents[0] as Models.Document & UserData);
};

// Expose the store's value with $user
export const userData = {
  subscribe: store.subscribe,
  update,
};

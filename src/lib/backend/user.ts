import { derived, writable, type Writable } from "svelte/store";
import type { Models } from "appwrite";
import { account } from "$lib/backend/appwrite";

const store: Writable<null | Models.User<Models.Preferences>> = writable(null);

async function init() {
  try {
    store.set(await account.get());
  } catch (e) {
    store.set(null);
  }
}

async function register(id: string, email: string, password: string) {
  account.create(id, email, password).then(() => {});
  await login(email, password);
}

async function login(email: string, password: string) {
  await account.createEmailSession(email, password);
  await init();
}

async function logout() {
  await account.deleteSession("current");
  store.set(null);
}

// Expose the store's value with $user
export const user = {
  subscribe: store.subscribe,
  register,
  login,
  logout,
  init,
};

export const userData = derived(user, ($user) => {
  if (!$user) return null;
  $user.$id
})

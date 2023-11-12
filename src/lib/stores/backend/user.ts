import { writable, type Writable } from "svelte/store";
import { ID, type Models } from "appwrite";
import { goto } from "$app/navigation";
import { account } from "$lib/appwrite";

const store: Writable<null | Models.User<Models.Preferences>> = writable(null);

async function init() {
  try {
    store.set(await account.get());
    console.log(store);
  } catch (e) {
    store.set(null);
  }
}

async function register(email: string, password: string) {
  await account.create(ID.unique(), email, password);
  await login(email, password);
}

async function login(email: string, password: string) {
  await account.createEmailSession(email, password);
  await init();
  goto("/"); // Redirect to home page after login
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

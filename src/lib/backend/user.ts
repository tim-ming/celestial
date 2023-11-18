import type { Credentials, UserCreateData } from "$lib/types";
import { derived, writable, type Writable } from "svelte/store";
import { ID, Permission, type Models, Role } from "appwrite";
import {
  account,
  ADMIN_LABEL_ID,
  DATABASE_ID,
  databases,
  USER_COLLECTION_ID,
} from "$lib/backend/appwrite";
const store: Writable<null | Models.User<Models.Preferences>> = writable(null);

async function init() {
  try {
    store.set(await account.get());
  } catch (e) {
    store.set(null);
  }
}

async function register(credentials: Credentials, data: UserCreateData) {
  await account.create(credentials.id, credentials.email, credentials.password);
  await login(credentials.email, credentials.password);
  await databases
    .createDocument(DATABASE_ID, USER_COLLECTION_ID, credentials.id, data, [
      Permission.write(Role.user(credentials.id)),
      Permission.read(Role.user(credentials.id)),
      // Permission.write(Role.label(ADMIN_LABEL_ID)),
      // Permission.read(Role.label(ADMIN_LABEL_ID)),
    ])
    .then(console.log)
    .catch(console.log);
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

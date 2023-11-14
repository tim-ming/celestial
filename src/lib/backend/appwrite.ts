import { Client, Account, Databases } from "appwrite";

export const PROJECT_ID = "654c738745df08a1e5a9";
export const DATABASE_ID = "nft-sprint-db";
export const USER_COLLECTION_ID = "users";
export const TRANSACTION_COLLECTION_ID = "transactions";
export const ITEM_COLLECTION_ID = "items";
export const ADMIN_LABEL_ID = "admin";

export const DEFAULT_IMG_URL =
  "https://cloud.appwrite.io/v1/storage/buckets/654c7556137499ccb619/files/654f743f802957fe2603/view?project=654c738745df08a1e5a9";

export const client = new Client();
export const databases = new Databases(client);
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";

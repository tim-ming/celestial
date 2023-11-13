import { Client, Account, Databases } from "appwrite";

export const client = new Client();
export const databases = new Databases(client);
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("654c738745df08a1e5a9"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";

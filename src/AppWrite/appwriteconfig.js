import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1')
client.setProject('64af98d5a6a735001225');

export const account = new Account(client)
export const databases = new Databases(client)
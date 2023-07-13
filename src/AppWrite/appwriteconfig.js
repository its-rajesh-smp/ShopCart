import { Client, Account } from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1')
client.setProject('64af98d5a6a735001225');

export const account = new Account(client)
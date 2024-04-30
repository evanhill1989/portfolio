import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// Configure dotenv before other imports
import { DocumentInterface } from "@langchain/core/documents";
import { Redis } from "@upstash/redis";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { getEmbeddingsCollection, getVectorStore } from "../src/lib/astradb";

async function generateEmbeddings() {
  // await Redis.fromEnv().flushdb();

  // const vectorStore = await getVectorStore();

  // (await getEmbeddingsCollection()).deleteMany({});

  const loader = new CheerioWebBaseLoader(
    "http://localhost:3000/blog/devs-are-everything-experts",
  );
  const docs = await loader.load();
  console.log(docs);

  // function createLoader(baseUrl: string) {
  //   return new CheerioWebBaseLoader(baseUrl);
  // }

  // const baseUrls = [
  //   "http://localhost:3000/about",
  //   "http://localhost:3000",
  //   "http://localhost:3000/blog",
  //   "http://localhost:3000/projects",
  //   "http://localhost:3000/blog/devs-are-everything-experts",
  // ];
  // const loaders = baseUrls.map(createLoader);

  // const allDocs = await Promise.all(
  //   loaders.map(async (loader) => {
  //     return await loader.load();
  //   }),
  // );

  // const docs = allDocs.flat(); // Flatten the array of document arrays

  // const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");

  // const splitDocs = await splitter.splitDocuments(docs);

  // await vectorStore.addDocuments(splitDocs);
}

generateEmbeddings();

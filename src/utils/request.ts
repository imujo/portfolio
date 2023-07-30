import { joinURLs } from "./misc";

export default async function request<T>(
  url: string,
  config: RequestInit = {}
): Promise<T> {
  console.log("\n\n\n");
  if (!process.env.SERVER_ENDPOINT)
    throw new Error("No .env variable SERVER_ENDPOINT found!");

  return fetch(joinURLs(process.env.SERVER_ENDPOINT, url), {
    next: { revalidate: 1 },
  })
    .then((response) => response.json())
    .then((data) => data as T);
}

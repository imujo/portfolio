export default async function request<T>(
  url: string,
  config: RequestInit = {}
): Promise<T> {
  if (!process.env.SERVER_ENDPOINT)
    throw new Error("No .env variable SERVER_ENDPOINT found!");
  console.log(process.env.SERVER_ENDPOINT + url);

  return fetch(process.env.SERVER_ENDPOINT + url, {
    next: { revalidate: 1 },
  })
    .then((response) => response.json())
    .then((data) => data as T);
}

export default async function request<Response>(
  url: string,
  config: RequestInit = {}
): Promise<Response> {
  if (!process.env.SERVER_ENDPOINT)
    throw new Error("No .env variable SERVER_ENDPOINT found!");

  return fetch(process.env.SERVER_ENDPOINT + url, config)
    .then((response) => response.json())
    .then((data) => data as Response);
}

const PROXY = "https://corsproxy.io/?";
const API = "https://zenquotes.io/api/random";

export async function getRandomQuote() {
  const response = await fetch(PROXY + API);

  if (!response.ok) {
    throw new Error(`Failed to fetch quote (${response.status})`);
  }

  const data = await response.json();
  return data;
}

import redis from "../lib/redis";
const API_KEY =
  process.env.FINNHUB_API_KEY || "d431ai1r01qvk0j9nnigd431ai1r01qvk0j9nnj0";

export async function getFinnhubStock(symbol: string) {
  const redisKey = `finnhub:quote:${symbol}`;
  const cached = await redis.get(redisKey);

  if (cached) {
    return JSON.parse(cached);
  }

  const res = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`,
  );

  if (!res.ok) {
    console.log(`Error fetching stock data for ${symbol}: ${res.statusText}`);
    return null;
  }

  const data = await res.json();

  await redis.set(redisKey, JSON.stringify(data), "EX", 60);
  return data;
}

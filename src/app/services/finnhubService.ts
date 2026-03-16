import redis from "../lib/redis";
const API_KEY =
  process.env.FINNHUB_API_KEY || "d431ai1r01qvk0j9nnigd431ai1r01qvk0j9nnj0";

interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  open: number;
  prevClose: number;
  timestamp: number;
}

export async function getFinnhubStock(symbol: string) {
  const redisKey = `finnhub:${symbol}`;
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
  const stock: StockData = {
    symbol,
    price: data.c,
    change: data.d,
    changePercent: data.dp,
    high: data.h,
    low: data.l,
    open: data.o,
    prevClose: data.pc,
    timestamp: data.t,
  };

  await redis.set(redisKey, JSON.stringify(stock), "EX", 60);
  return stock;
}

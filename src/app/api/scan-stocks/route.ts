import { getFinnhubStock } from "@/app/services/finnhubService";

interface StockResponse {
  symbol: string;
  price: number;
  change: number;
  description: string;
}

export async function GET(req: Request) {
  let arrStocks: StockResponse[] = [];

  let res = await checkStock("SOFI", 18, 16.8, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("LMND", 56, 48, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("AMD", 199, 188, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("PLTR", 161, 126, "Cycle Trading");
  res && arrStocks.push(res);

  return new Response(JSON.stringify({ stocks: arrStocks }), {
    headers: { "Content-Type": "application/json" },
  });
}

async function checkStock(
  symbol: string,
  priceOver: number,
  priceUnder: number,
  description: string = "",
) {
  let stock = await getFinnhubStock(symbol);
  console.log("Stock data:", stock);
  if (stock) {
    let isAlert = false;
    if (priceOver && stock.price > priceOver) {
      isAlert = true;
    }

    if (priceUnder && stock.low < priceUnder) {
      isAlert = true;
    }

    if (isAlert) {
      return {
        symbol: stock.symbol,
        price: stock.price,
        change: stock.change,
        description: description,
      };
    }
  }
  return null;
}

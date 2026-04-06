import { getFinnhubStock } from "@/app/services/finnhubService";
import { StockResponse } from "@/app/types/stock";

export async function GET(req: Request) {
  let arrStocks: StockResponse[] = [];

  let res = await checkStock("OSS", 7.66, 0, "", false);
  res && arrStocks.push(res);

  res = await checkStock("AAOI", 114, 0, "", false);
  res && arrStocks.push(res);

  res = await checkStock("SEDG", 53, 0, "", false);
  res && arrStocks.push(res);

  res = await checkStock("USAR", 15, 0, "", false);
  res && arrStocks.push(res);

  res = await checkStock("MP", 50, 0, "", false);
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
  isStar: boolean = false,
) {
  let stock = await getFinnhubStock(symbol);
  //console.log("Stock data:", stock);
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
        percentage: Number(stock.changePercent.toFixed(2)),
        isStar,
      };
    }
  }
  return null;
}

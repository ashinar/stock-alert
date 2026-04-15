import { getFinnhubStock } from "@/app/services/finnhubService";
import { StockResponse } from "@/app/types/stock";

export async function GET(req: Request) {
  let arrStocks: StockResponse[] = [];

  //14-4-26
  let res = await checkStock("KTOS", 74.5, 0, "", false);
  res && arrStocks.push(res);

  res = await checkStock("SEDG", 44, 0, "", false);
  res && arrStocks.push(res);

  res = await checkStock("PLTR", 135.7, 126, "", false);
  res && arrStocks.push(res);

  res = await checkStock("ENLT", 0, 70, "", false);
  res && arrStocks.push(res);

  res = await checkStock("MU", 471, 405, "", false);
  res && arrStocks.push(res);

  let stock = await getFinnhubStock("COHR");
  if (
    stock &&
    (stock.price > 313.42 || (stock.price > 300.37 && stock.price < 303))
  ) {
    arrStocks.push({
      symbol: stock.symbol,
      price: stock.price,
      change: stock.change,
      description: "",
      percentage: Number(stock.changePercent.toFixed(2)),
      isStar: false,
    });
  }

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

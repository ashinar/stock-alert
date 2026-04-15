import { getFinnhubStock } from "@/app/services/finnhubService";
import { StockResponse } from "@/app/types/stock";

export async function GET(req: Request) {
  let arrStocks: StockResponse[] = [];

  //14-4-26
  let res = await checkStock("SEDG", 41.8, 0, "cyclestrading", false);
  res && arrStocks.push(res);

  res = await checkStock("ENLT", 0, 71, "cyclestrading", false);
  res && arrStocks.push(res);

  res = await checkStock("MU", 471, 0, "cyclestrading ", false);
  res && arrStocks.push(res);

  let stock = await getFinnhubStock("COHR");
  if (
    stock &&
    (stock.price > 322 || (stock.price > 300.37 && stock.price < 303))
  ) {
    arrStocks.push(getStockResponse(stock, "", false));
  }

  return new Response(JSON.stringify({ stocks: arrStocks }), {
    headers: { "Content-Type": "application/json" },
  });
}

function getStockResponse(stock: any, description: string, isStar: boolean) {
  return {
    symbol: stock.symbol,
    price: stock.price,
    change: stock.change,
    description: "",
    percentage: Number(stock.changePercent.toFixed(2)),
    isStar: false,
  };
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
      return getStockResponse(stock, description, isStar);
    }
  }
  return null;
}

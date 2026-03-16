import { getFinnhubStock } from "@/app/services/finnhubService";

interface StockResponse {
  symbol: string;
  price: number;
  change: number;
  description: string;
}

export async function GET(req: Request) {
  let arrStocks: StockResponse[] = [];

  // res = await checkStock("LMND", 56, 48, "Cycle Trading");
  // res && arrStocks.push(res);

  let res = await checkStock("SOFI", 18, 16.8, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("AMD", 199, 188, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("PLTR", 161, 126, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("HOOD", 82, 67, "Cycle Trading");
  res && arrStocks.push(res);

  //cup and handle

  res = await checkStock("MRNA", 59, 0, "cup and handle");
  res && arrStocks.push(res);

  res = await checkStock("KTOS", 133, 0, "cup and handle");
  res && arrStocks.push(res);
  if (!res) {
    res = await checkStock("KTOS", 91.8, 0, "");
  }

  res = await checkStock("GS", 840, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("VLO", 0, 208, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("LRCX", 221, 191, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("AMZN", 223, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("RKLB", 74, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("NFLX", 100, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("PLTR", 161, 130, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("PNC", 216, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("GOOGL", 0, 269, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("WDC", 200, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("HON", 300, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("MP", 66, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("UUUU", 27, 12, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("OPEN", 5.21, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("SEDG", 35, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("OKLO", 63, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("MSFT", 413, 351, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("AMAT", 2870, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("ANET", 115, 0, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("TSM", 379, 312, "Cycle Trading");
  res && arrStocks.push(res);

  res = await checkStock("SOFI", 18, 0, "darkPool");
  res && arrStocks.push(res);

  res = await checkStock("IREN", 0, 36);
  res && arrStocks.push(res);

  res = await checkStock("HIMS", 13, 0, "darkPool");
  res && arrStocks.push(res);

  res = await checkStock("ONDS", 0, 9.8, "darkPool");
  res && arrStocks.push(res);
  res = await checkStock("IONQ", 35, 0, "darkPool");
  res && arrStocks.push(res);

  res = await checkStock("OSS", 9.5, 0, "darkPool");
  res && arrStocks.push(res);

  res = await checkStock("SNDK", 538, 0, "darkPool");
  res && arrStocks.push(res);

  res = await checkStock("OSCR", 23, 0, "Amir");
  res && arrStocks.push(res);

  res = await checkStock("AA", 68, 0, "Amir");
  res && arrStocks.push(res);

  res = await checkStock("AAOI", 115, 0, "Amir");
  res && arrStocks.push(res);

  res = await checkStock("ADI", 313, 0, "Amir");
  res && arrStocks.push(res);

  res = await checkStock("CAVA", 88, 88, "Amir");
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
      };
    }
  }
  return null;
}

import { getFinnhubStock } from "@/app/services/finnhubService";
import { StockResponse } from "@/app/types/stock";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "0";

  let loadMore = true;
  let arrStocks: StockResponse[] = [];

  // res = await checkStock("LMND", 56, 48, "Cycle Trading");
  // res && arrStocks.push(res);

  // res = await checkStock("LRCX", 221, 191, "Cycle Trading");
  // res && arrStocks.push(res);

  // let res = await checkStock("V", 300, 0, "TrendSpider");
  // res && arrStocks.push(res);

  // res = await checkStock("ADI", 303, 303, "Amir");
  // res && arrStocks.push(res);

  //res = await checkStock("RKLB", 74, 0, "Cycle Trading");
  //res && arrStocks.push(res);

  //AXTI

  if (page == "1") {
    let res = await checkStock(
      "BKSY",
      31,
      27,
      "MichaStocks - לוויני בטחון",
      true,
    );
    res && arrStocks.push(res);

    //cup and handle
    res = await checkStock("MRNA", 59, 0, "cup and handle");
    res && arrStocks.push(res);

    res = await checkStock("KTOS", 133, 0, "cup and handle");
    res && arrStocks.push(res);
    if (!res) {
      res = await checkStock("KTOS", 70, 65, "Cycle Trading");
    }

    res = await checkStock("FLY", 33, 27, "MichaStocks", true);
    res && arrStocks.push(res);

    res = await checkStock("ONDS", 11, 8, "darkPool");
    res && arrStocks.push(res);

    res = await checkStock("UVIX", 10.29, 0, "Amir");
    res && arrStocks.push(res);

    // res = await checkStock("SOFI", 18, 16.8, "Cycle Trading", true);
    // res && arrStocks.push(res);

    res = await checkStock("CAVA", 91.66, 0, "Amir");
    res && arrStocks.push(res);

    res = await checkStock("AMD", 226, 188, "Cycle Trading");

    res && arrStocks.push(res);

    res = await checkStock("PLTR", 161, 126, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("HOOD", 70, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("GS", 868, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("VLO", 0, 208, "Cycle Trading");
    res && arrStocks.push(res);
  } else if (page == "2") {
    let res = await checkStock("AMZN", 212, 202, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("NFLX", 100, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("PLTR", 161, 130, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("PNC", 216, 0, "Cycle Trading");
    res && arrStocks.push(res);
  } else if (page == "3") {
    let res = await checkStock("HON", 300, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("MP", 66, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("UUUU", 27, 12, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("OPEN", 5.21, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("SEDG", 51, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("OKLO", 63, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("MSFT", 465, 351, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("AMAT", 2870, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("ANET", 142, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("TSM", 379, 312, "Cycle Trading");
    res && arrStocks.push(res);
  } else if (page == "4") {
    let res = await checkStock("SOFI", 18, 0, "darkPool");
    res && arrStocks.push(res);

    res = await checkStock("IREN", 34, 0, "darkPool");
    res && arrStocks.push(res);

    res = await checkStock("HIMS", 0, 18, "darkPool");
    res && arrStocks.push(res);

    res = await checkStock("IONQ", 35, 0, "darkPool");
    res && arrStocks.push(res);

    res = await checkStock("OSS", 9.61, 0, "darkPool");
    res && arrStocks.push(res);

    res = await checkStock("SNDK", 775, 0, "darkPool");
    res && arrStocks.push(res);

    res = await checkStock("OSCR", 23, 0, "Amir");
    res && arrStocks.push(res);

    res = await checkStock("AA", 71.9, 69, "Amir");
    res && arrStocks.push(res);

    res = await checkStock("AAOI", 115, 0, "Amir");
    res && arrStocks.push(res);

    res = await checkStock("CRML", 8.5, 0, "Dark pool");
    res && arrStocks.push(res);

    res = await checkStock("CRS", 411, 346, "Dark pool");
    res && arrStocks.push(res);

    res = await checkStock("JPM", 294, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("PATK", 114, 112, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("AMAL", 39.5, 39, "Amir");
    res && arrStocks.push(res);
  } else if (page == "5") {
    let res = await checkStock("MA", 513, 0, "TrendSpider");
    res && arrStocks.push(res);

    res = await checkStock("DIA", 0, 452, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("GLD", 437, 405, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("ASTS", 92, 89, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("GILT", 17, 0, "Micha Stocks");
    res && arrStocks.push(res);

    res = await checkStock("IRDM", 32, 30, "Micha Stocks");
    res && arrStocks.push(res);

    res = await checkStock("NEM", 114, 100, "Cycle Trading");
    res && arrStocks.push(res);
  } else if (page == "6") {
    let res = await checkStock("WDC", 296, 238, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("AMR", 254, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("GOOGL", 0, 256, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("CRCL", 91, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("TSLA", 382, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("ITA", 221, 0, "TZVIKA BERGMAN");
    res && arrStocks.push(res);

    res = await checkStock("QQQ", 583, 0, "ALON KFIR");
    res && arrStocks.push(res);

    res = await checkStock("SMH", 373, 0, "ALON KFIR");
    res && arrStocks.push(res);

    res = await checkStock("NVDA", 0, 168, "ALON KFIR");
    res && arrStocks.push(res);

    loadMore = false;
  }

  return new Response(JSON.stringify({ stocks: arrStocks, loadMore }), {
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

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
    let semiconductors = await getFinnhubStock("SOXX");

    if (semiconductors) {
      if (semiconductors.change > 0) {
        let res = await checkStock("NVDA", 190, 0, ""); //4.26
        res && arrStocks.push(res);
      }
    }

    let res = await checkStock("HOOD", 71, 0, "Cycle Trading"); //4.26
    res && arrStocks.push(res);

    res = await checkStock("GE", 312, 295, "Cycle Trading"); //4.26
    res && arrStocks.push(res);

    res = await checkStock("BE", 181, 0, "DarkPool"); //4.26
    res && arrStocks.push(res);

    res = await checkStock("POET", 7.36, 0, "DarkPool"); //4.26
    res && arrStocks.push(res);

    res = await checkStock("CRWV", 114.55, 96, "DarkPool"); //4.26
    res && arrStocks.push(res);

    res = await checkStock("MCK", 879, 0, "Cycle Trading"); //4.26
    res && arrStocks.push(res);

    //cup and handle
    res = await checkStock("MRNA", 51, 0, "cup and handle");
    res && arrStocks.push(res);

    res = await checkStock("GOOGL", 328, 311, "TrendSpider");
    res && arrStocks.push(res);

    res = await checkStock("KTOS", 133, 0, "cup and handle");
    res && arrStocks.push(res);

    res = await checkStock("ONDS", 11, 8, "darkPool");
    res && arrStocks.push(res);

    res = await checkStock("UVIX", 10.29, 0, "Amir");
    res && arrStocks.push(res);

    // res = await checkStock("SOFI", 18, 16.8, "Cycle Trading", true);
    // res && arrStocks.push(res);

    res = await checkStock("CAVA", 91.66, 0, "Amir");
    res && arrStocks.push(res);

    res = await checkStock("AMD", 248, 240, "Cycle Trading");

    res && arrStocks.push(res);

    res = await checkStock("GS", 894, 0, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("VLO", 0, 208, "Cycle Trading");
    res && arrStocks.push(res);
  } else if (page == "2") {
    let res = await checkStock("AMZN", 297, 202, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("NFLX", 107, 101, "Cycle Trading");
    res && arrStocks.push(res);

    res = await checkStock("PLTR", 0, 128, "Cycle Trading");
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

    // res = await checkStock("IREN", 34, 0, "darkPool");
    // res && arrStocks.push(res);

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

    res = await checkStock("AA", 71.9, 0, "Amir");
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

    res = await checkStock("USO", 140, 0, "");
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

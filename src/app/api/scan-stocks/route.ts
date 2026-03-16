import { getFinnhubStock } from "@/app/services/finnhubService";

export async function GET(req: Request) {
  let stock = await getFinnhubStock("AAPL");
  return new Response(JSON.stringify({ stock }), {
    headers: { "Content-Type": "application/json" },
  });
}

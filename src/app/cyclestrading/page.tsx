"use client";

import { useEffect, useState, useRef } from "react";
import styles from "../constants/stockIdea.module.css";

type Stock = {
  symbol: string;
  description: string;
  percentage: number;
};

export default function DarkPool() {
  const didLoad = useRef(false);
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    if (didLoad.current) {
      return;
    }

    didLoad.current = true;

    const loadStocks = async () => {
      console.log("Loading stocks...");

      const res = await fetch("/api/cyclestrading");
      const data = await res.json();

      data && setStocks(data.stocks);
    };

    loadStocks();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "3rem",
          color: "#333",
          letterSpacing: "1px",
        }}
      >
        Stocks to Watch
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {stocks &&
          stocks.map((stock) => (
            <div
              className={styles.isBomba}
              key={stock.symbol}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-5px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 30px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "none";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h2 style={{ margin: 0, color: "#0d3b66" }}>
                  <a
                    className={styles.stockLink}
                    target="_blank"
                    href={`https://www.tradingview.com/chart/jRahCSDc/?symbol=${stock.symbol}`}
                  >
                    {stock.symbol}
                  </a>
                </h2>
                {stock.percentage && (
                  <span
                    style={{
                      background: stock.percentage < 0 ? "#e74c3c" : "#2ecc71",
                      padding: "4px 10px",
                      borderRadius: "8px",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    {stock.isStar && "🌟"}
                    {stock.percentage}%
                  </span>
                )}
              </div>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                {stock.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

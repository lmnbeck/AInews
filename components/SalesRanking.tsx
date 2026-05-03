"use client";

import { useState, useEffect } from "react";

interface SalesItem {
  rank: number;
  brand: string;
  model: string;
  sales: number;
  change: number;
}

const months = [
  { value: "2026-01", label: "2026年1月" },
  { value: "2026-02", label: "2026年2月" },
  { value: "2026-03", label: "2026年3月" },
  { value: "2026-04", label: "2026年4月" },
  { value: "2026-05", label: "2026年5月" },
  { value: "2026-06", label: "2026年6月" },
];

const years = [
  { value: "2024", label: "2024年" },
  { value: "2025", label: "2025年" },
  { value: "2026", label: "2026年" },
];

function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}

export default function SalesRanking() {
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");
  const [selectedMonth, setSelectedMonth] = useState("2026-06");
  const [selectedYear, setSelectedYear] = useState("2026");
  const [rank, setRank] = useState<SalesItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const params =
      period === "monthly"
        ? selectedMonth.split("-")
        : [selectedYear];

    const query =
      period === "monthly"
        ? `year=${params[0]}&month=${params[1]}`
        : `year=${params[0]}`;

    fetch(`/api/sales?${query}`)
      .then((res) => res.json())
      .then((data) => {
        setRank((data?.items ?? []).slice(0, 10));
      })
      .catch(() => {
        setRank([]);
      })
      .finally(() => setLoading(false));
  }, [period, selectedMonth, selectedYear]);

  return (
    <div className="bg-apple-card rounded-2xl border border-apple-border/30 p-5">
      {/* Header */}
      <h3 className="text-base font-bold text-apple-text mb-1">销量排行榜</h3>
      <p className="text-xs text-apple-secondary/60 mb-4">
        <span>数据来源：汽车之家</span>
        {loading && <span className="ml-2 text-apple-accent">更新中...</span>}
      </p>

      {/* Period toggle */}
      <div className="flex bg-apple-bg rounded-lg p-0.5 mb-4">
        <button
          className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
            period === "monthly"
              ? "bg-apple-card text-apple-text shadow-sm"
              : "text-apple-secondary hover:text-apple-text"
          }`}
          onClick={() => setPeriod("monthly")}
        >
          月度
        </button>
        <button
          className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
            period === "yearly"
              ? "bg-apple-card text-apple-text shadow-sm"
              : "text-apple-secondary hover:text-apple-text"
          }`}
          onClick={() => setPeriod("yearly")}
        >
          年度
        </button>
      </div>

      {/* Date selector */}
      <select
        className="w-full text-xs text-apple-text bg-apple-bg border border-apple-border/30 rounded-lg px-3 py-2 mb-4 appearance-none focus:outline-none focus:ring-1 focus:ring-apple-accent cursor-pointer"
        value={period === "monthly" ? selectedMonth : selectedYear}
        onChange={(e) => {
          if (period === "monthly") setSelectedMonth(e.target.value);
          else setSelectedYear(e.target.value);
        }}
      >
        {(period === "monthly" ? months : years).map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Ranking list */}
      <div className="space-y-3 min-h-[200px]">
        {rank.length === 0 && !loading && (
          <p className="text-xs text-apple-secondary/50 text-center py-8">
            暂无数据
          </p>
        )}
        {rank.map((item, index) => (
          <div
            key={`${item.brand}-${item.model}`}
            className="flex items-center gap-3"
          >
            {/* Rank badge */}
            <span
              className={`w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full shrink-0 ${
                index < 3
                  ? "bg-apple-accent text-white"
                  : "bg-apple-bg text-apple-secondary"
              }`}
            >
              {index + 1}
            </span>

            {/* Brand + model */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-apple-text truncate">
                {item.brand} {item.model}
              </p>
            </div>

            {/* Sales + change */}
            <div className="text-right shrink-0">
              <p className="text-xs font-semibold text-apple-text">
                {formatNumber(item.sales)}
              </p>
              <span
                className={`inline-flex items-center text-[10px] gap-0.5 ${
                  item.change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                <svg
                  className="w-2.5 h-2.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {item.change >= 0 ? (
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
                {Math.abs(item.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

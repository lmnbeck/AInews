import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getSalesByMonth, getSalesByYear } from "@/lib/salesData";

export const revalidate = 3600;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const year = searchParams.get("year");
  const month = searchParams.get("month");

  try {
    const filePath = path.join(process.cwd(), "public", "data", "sales.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    const fileData = JSON.parse(raw);

    if (year && month) {
      const m = fileData.months?.find(
        (d: any) => d.year === Number(year) && d.month === Number(month)
      );
      if (m) return NextResponse.json(m);
    } else if (year) {
      const y = fileData.years?.find((d: any) => d.year === Number(year));
      if (y) return NextResponse.json(y);
    } else {
      return NextResponse.json(fileData);
    }
  } catch {}

  // Fallback to embedded data
  if (year && month) {
    const data = getSalesByMonth(Number(year), Number(month));
    return NextResponse.json(data || { items: [] });
  }
  if (year) {
    const data = getSalesByYear(Number(year));
    return NextResponse.json(data || { items: [] });
  }
  return NextResponse.json({ months: [], years: [] });
}
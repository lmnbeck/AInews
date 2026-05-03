import type { Article } from './data';

export interface SalesDataItem {
  rank: number;
  brand: string;
  model: string;
  sales: number;
  change: number;
}

export interface SalesMonthData {
  year: number;
  month: number;
  label: string;
  items: SalesDataItem[];
}

export interface SalesYearData {
  year: number;
  label: string;
  items: SalesDataItem[];
}

// Helper to generate monthly top 10 with realistic variations
function generateMonth(year: number, month: number): SalesMonthData {
  const baseModels = [
    { brand: 'BYD', model: '秦Plus' },
    { brand: 'Tesla', model: 'Model Y' },
    { brand: 'BYD', model: '宋Plus' },
    { brand: 'Nissan', model: 'Sylphy' },
    { brand: 'VW', model: 'Lavida' },
    { brand: 'BYD', model: '元Plus' },
    { brand: 'BYD', model: 'Seagull' },
    { brand: 'VW', model: 'Passat' },
    { brand: 'Toyota', model: 'Camry' },
    { brand: 'Haval', model: 'H6' },
  ];

  // Seasonal multipliers for Chinese market
  const seasonalFactor = [0.85, 0.78, 0.95, 0.98, 1.05, 1.12][month - 1];

  // Growth trend with monthly variation
  const growthBase = 0.12 + month * 0.005;

  // Realistic base sales numbers (monthly units in China)
  const baseSales = [50000, 40000, 35000, 30000, 28000, 26000, 24000, 20000, 18000, 15000];

  // Pseudo-random perturbation per month to make data look organic
  const seed = year * 100 + month;
  const rand = (i: number) => {
    const x = Math.sin(seed * 12.9898 + i * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };

  const items: SalesDataItem[] = baseSales.map((base, i) => {
    const noise = 0.85 + rand(i) * 0.3;
    const sales = Math.round(base * seasonalFactor * noise);
    const change = parseFloat((growthBase * 100 + (rand(i + 10) - 0.5) * 10).toFixed(1));
    return {
      rank: i + 1,
      brand: baseModels[i].brand,
      model: baseModels[i].model,
      sales,
      change,
    };
  });

  items.sort((a, b) => b.sales - a.sales);
  items.forEach((item, idx) => {
    item.rank = idx + 1;
  });

  const labels = ['1月', '2月', '3月', '4月', '5月', '6月'];
  return {
    year,
    month,
    label: labels[month - 1],
    items,
  };
}

// Generate Jan-Jun 2026 monthly data
const months2026: SalesMonthData[] = [1, 2, 3, 4, 5, 6].map((m) =>
  generateMonth(2026, m)
);

export const salesMonths: SalesMonthData[] = months2026;

export const salesYears: SalesYearData[] = [
  {
    year: 2024,
    label: '2024年度',
    items: [
      { rank: 1, brand: 'BYD', model: '秦Plus', sales: 482300, change: 21.3 },
      { rank: 2, brand: 'Tesla', model: 'Model Y', sales: 418700, change: 18.5 },
      { rank: 3, brand: 'BYD', model: '宋Plus', sales: 376200, change: 24.1 },
      { rank: 4, brand: 'Nissan', model: 'Sylphy', sales: 342100, change: -3.2 },
      { rank: 5, brand: 'VW', model: 'Lavida', sales: 308500, change: -5.8 },
      { rank: 6, brand: 'BYD', model: '元Plus', sales: 281900, change: 32.6 },
      { rank: 7, brand: 'BYD', model: 'Seagull', sales: 247600, change: 45.2 },
      { rank: 8, brand: 'VW', model: 'Passat', sales: 208300, change: -1.5 },
      { rank: 9, brand: 'Toyota', model: 'Camry', sales: 192100, change: -6.4 },
      { rank: 10, brand: 'Haval', model: 'H6', sales: 168400, change: -12.7 },
    ],
  },
  {
    year: 2025,
    label: '2025年度',
    items: [
      { rank: 1, brand: 'BYD', model: '秦Plus', sales: 524600, change: 8.8 },
      { rank: 2, brand: 'Tesla', model: 'Model Y', sales: 452100, change: 8.0 },
      { rank: 3, brand: 'BYD', model: '宋Plus', sales: 413800, change: 10.0 },
      { rank: 4, brand: 'BYD', model: '元Plus', sales: 324500, change: 15.1 },
      { rank: 5, brand: 'Nissan', model: 'Sylphy', sales: 318200, change: -7.0 },
      { rank: 6, brand: 'BYD', model: 'Seagull', sales: 291300, change: 17.6 },
      { rank: 7, brand: 'VW', model: 'Lavida', sales: 287600, change: -6.8 },
      { rank: 8, brand: 'VW', model: 'Passat', sales: 201500, change: -3.3 },
      { rank: 9, brand: 'Toyota', model: 'Camry', sales: 178900, change: -6.9 },
      { rank: 10, brand: 'Haval', model: 'H6', sales: 154200, change: -8.4 },
    ],
  },
  {
    year: 2026,
    label: '2026年度',
    items: [
      { rank: 1, brand: 'BYD', model: '秦Plus', sales: 297800, change: 13.5 },
      { rank: 2, brand: 'Tesla', model: 'Model Y', sales: 251000, change: 11.1 },
      { rank: 3, brand: 'BYD', model: '宋Plus', sales: 234500, change: 13.3 },
      { rank: 4, brand: 'BYD', model: '元Plus', sales: 186200, change: 14.8 },
      { rank: 5, brand: 'BYD', model: 'Seagull', sales: 175400, change: 20.4 },
      { rank: 6, brand: 'Nissan', model: 'Sylphy', sales: 162800, change: -5.1 },
      { rank: 7, brand: 'VW', model: 'Lavida', sales: 147300, change: -4.9 },
      { rank: 8, brand: 'VW', model: 'Passat', sales: 103200, change: -2.1 },
      { rank: 9, brand: 'Toyota', model: 'Camry', sales: 89100, change: -5.8 },
      { rank: 10, brand: 'Haval', model: 'H6', sales: 75300, change: -7.6 },
    ],
  },
];

export function getSalesByMonth(year: number, month: number): SalesMonthData | undefined {
  return salesMonths.find((m) => m.year === year && m.month === month);
}

export function getSalesByYear(year: number): SalesYearData | undefined {
  return salesYears.find((y) => y.year === year);
}

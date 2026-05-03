"use client";

import { useEffect, useRef } from "react";

interface GoogleAdProps {
  slot: string;
  format?: "banner" | "rectangle" | "in-article";
}

const adDimensions: Record<string, { width: number; height: number | string }> =
  {
    banner: { width: 728, height: 90 },
    rectangle: { width: 300, height: 250 },
    "in-article": { width: 300, height: 250 },
  };

export default function GoogleAd({
  slot,
  format = "banner",
}: GoogleAdProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const dims = adDimensions[format];
  const isFluid = format === "in-article";

  // Production AdSense initialization hook
  useEffect(() => {
    // In production, this would push the AdSense ad:
    // if (typeof window !== "undefined" && adRef.current) {
    //   try {
    //     ((window as any).adsbygoogle =
    //       (window as any).adsbygoogle || []).push({});
    //   } catch {}
    // }
  }, [slot]);

  const containerStyle: React.CSSProperties = isFluid
    ? { width: "100%", minHeight: 90 }
    : {
        width: dims.width,
        height: dims.height as number,
      };

  return (
    <div
      ref={adRef}
      className="bg-[#f0f0f0] rounded-xl flex items-center justify-center text-apple-secondary/40 text-sm select-none"
      style={{
        ...containerStyle,
      }}
    >
      广告
    </div>
  );
}

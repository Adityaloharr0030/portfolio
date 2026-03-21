"use client";

import { useReportWebVitals } from "next/web-vitals";

export default function WebVitals() {
  useReportWebVitals((metric) => {
    // You can also send this to analytics like Google Analytics
    // console.log(metric);
    if (process.env.NODE_ENV !== "production") {
      // Log Web Vitals during development
      console.log("[Web Vitals]", metric.name, metric.value);
    }
  });

  return null;
}

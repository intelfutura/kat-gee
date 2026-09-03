import { ImageResponse } from "next/og";

export const alt = "Kat Gee — Designer and developer of smart business websites";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f2eee6",
          color: "#0c0b09",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "Times New Roman, serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.22em", textTransform: "uppercase" }}>
          Kat Gee
        </div>
        <div style={{ fontSize: 92, lineHeight: 0.88, letterSpacing: "-0.04em", maxWidth: 900 }}>
          I build experiences that move.
        </div>
        <div style={{ fontSize: 24, letterSpacing: "-0.02em" }}>
          Strategy · Design · Technology · 2009—2026
        </div>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0c0b09",
          color: "#f2eee6",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          letterSpacing: "0.08em",
          fontFamily: "Times New Roman, serif",
        }}
      >
        KG
      </div>
    ),
    size,
  );
}

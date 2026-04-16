"use client";
import NextImage, { ImageProps } from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Img(props: ImageProps) {
  const { src, onContextMenu, ...rest } = props;
  const finalSrc =
    typeof src === "string" && src.startsWith("/") && !src.startsWith(BASE)
      ? `${BASE}${src}`
      : src;
  return (
    <NextImage
      {...rest}
      src={finalSrc}
      onContextMenu={onContextMenu ?? ((e) => e.preventDefault())}
      draggable={false}
    />
  );
}

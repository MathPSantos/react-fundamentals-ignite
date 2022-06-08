import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  isBorderless?: boolean;
}

export function Avatar({ src, isBorderless = false, ...props }: AvatarProps) {
  return (
    <img
      className={isBorderless ? styles.avatar : styles.avatarWithBorder}
      src={src}
      {...props}
    />
  );
}

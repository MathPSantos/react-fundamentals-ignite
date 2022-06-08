import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  isBorderless?: boolean;
}

export function Avatar({ src, isBorderless = false }: AvatarProps) {
  return (
    <img
      className={isBorderless ? styles.avatar : styles.avatarWithBorder}
      src={src}
    />
  );
}

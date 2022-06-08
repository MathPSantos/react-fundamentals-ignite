import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../../common/media";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
}

export function Comment({ content }: CommentProps) {
  return (
    <div className={styles.comment}>
      <Avatar isBorderless src="https://github.com/MathPSantos.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Santos</strong>

              <time title="07 de Junho às 06:47" dateTime="2022-05-11 00:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

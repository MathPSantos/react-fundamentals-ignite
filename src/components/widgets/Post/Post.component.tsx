import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { FormEvent, useState } from "react";

import { TPost } from "../../../core/types/Post.type";
import { Avatar } from "../../common/media";
import { Comment } from "../Comment/Comment.component";

import styles from "./Post.module.css";

interface PostProps {
  data: TPost;
}

export function Post({ data }: PostProps) {
  const [comments, setComments] = useState<string[]>([
    "Post muito bacana hein? 😁",
  ]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    data.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(data.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event?.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={data.author.avatar_url} />

          <div className={styles.authorInfo}>
            <strong>{data.author.name}</strong>
            <span>{data.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={data.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {data.content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p>
                <a href="">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={(event) => setNewCommentText(event.target.value)}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment key={index} content={comment} />
        ))}
      </div>
    </article>
  );
}

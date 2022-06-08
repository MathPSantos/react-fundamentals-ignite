import { Header, Sidebar } from "./components/layout";

import styles from "./App.module.css";
import { Post } from "./components/widgets";
import { TPost } from "./core/types/Post.type";

const posts: TPost[] = [
  {
    id: 1,
    author: {
      name: "Matheus Santos",
      avatar_url: "https://github.com/MathPSantos.png",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-06 00:13:30"),
  },
  {
    id: 2,
    author: {
      name: "Gabriel Amador",
      avatar_url: "https://github.com/amador2014.png",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-05 00:13:30"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </main>
      </div>
    </>
  );
}

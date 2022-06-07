import { Header, Sidebar } from "./components/layout";

import styles from "./App.module.css"
import { Post } from "./components/widgets";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

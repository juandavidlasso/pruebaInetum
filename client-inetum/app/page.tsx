import dynamic from "next/dynamic";
import styles from "./page.module.css";

const DynamicCharactersPage = dynamic(() =>
  import("./(routes)/characters/page").then((mod) => mod.default),
);

export default function Home() {
  return (
    <div className={styles.page}>
      <DynamicCharactersPage />
    </div>
  );
}

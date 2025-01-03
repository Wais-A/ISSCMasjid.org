import dynamic from "next/dynamic";

import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Footer/Footer";

const HomePage = dynamic(() => import("@/app/Components/HomePage/HomePage"));
const SideBar = dynamic(() => import("@/app/Components/SideBar/SideBar"));

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.homeMain}>
      <Header />
      <div className={styles.homeContainer}>
        <section className={styles.sidebarSection}>
          <SideBar />
        </section>
        <section className={styles.contentSection}>
          <HomePage />
        </section>
      </div>
      <Footer />
    </main>
  );
}

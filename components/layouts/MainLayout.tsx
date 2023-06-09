import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface LayoutProps {
  children?: JSX.Element[] | JSX.Element;
  title?: string;
}
const origin = typeof window === "undefined" ? "" : window.location.origin;

export const MainLayout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Leandro Borrelli" />
        <meta
          name="description"
          content={`Informacion sobre el Pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la informacion sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar></Navbar>

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

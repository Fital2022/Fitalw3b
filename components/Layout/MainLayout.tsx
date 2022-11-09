import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { TopBar } from "../Ui";

interface Props {
  title: string;
  pageDescription: string;
  imageForShare?: string;
}

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  title,
  pageDescription,
  imageForShare,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageForShare && <meta name="og:image" content={imageForShare} />}
      </Head>
      <nav>
        <TopBar />
      </nav>
      <main
        style={{
          backgroundImage: 'url("backgrounds/Pagina-Web.jpg")',
          width: "100vw",
          minHeight: "calc(100vh - 90px)",
          marginTop: "90px",
          backgroundColor: "green",
        }}
      >
        {children}
      </main>
      <footer>{/* TODO: posible footer*/}</footer>
    </>
  );
};

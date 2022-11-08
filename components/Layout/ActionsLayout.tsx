import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { SideBar } from "../Ui";

interface Props {
  title: string;
  pageDescription: string;
  imageForShare?: string;
}

export const ActionsLayout: FC<PropsWithChildren<Props>> = ({
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
        <SideBar />
      </nav>
      <main
        style={{
          backgroundImage: 'url("backgrounds/Pagina-Web.jpg")',
          width: "calc(100vw - 90px)",
          minHeight: "100vh",
          float: "right",
        }}
      >
        {children}
\      </main>
      {/* <footer>TODO: posible footer</footer> */}
    </>
  );
};

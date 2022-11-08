import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { TopBar } from "../Ui";
  
interface Props {
  title: string;
  pageDescription: string;
  imageForShare?: string;
}

export const FirstLayout: FC<PropsWithChildren<Props>> = ({
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
      <main
        style={{
          backgroundImage: 'url("backgrounds/backfirst.svg")',
          width: "100vw",
          height: "100vh",
          paddingTop: "90px"
        }}
      >
        {children}
      </main>
      <footer>{/* TODO: posible footer*/}</footer>
    </>
  );
};

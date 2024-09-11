import { ReactNode } from "react";
import { AppFooter } from "../components/Footer";
import { Header } from "../components/Header";
import { Providers } from "../components/Providers";
import { Summary } from "../components/Summary";
import { getMenuStructure } from "../lib/doc";
import "./globals.css";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const menuStructure = await getMenuStructure();

  return (
    <html lang="en">
      <head>
        <title>Nicola Bosco&apos;s Digital Garden</title>
      </head>
      <body>
        <Providers>
          <Header />
          <div className=" mx-auto flex flex-row gap-4">
            <div className="w-1/4 ">
              <Summary menuStructure={menuStructure} />
            </div>
            <div className="w-3/4">{children}</div>
          </div>
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}

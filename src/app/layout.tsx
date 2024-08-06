// "use client"

import "./globals.css";

import type { Metadata } from "next";
import { Provider } from "react-redux";
// import { Provider } from "react-redux";
import { store } from "./redux/store";

export const metadata: Metadata = {
  title: "trashmails",
  description: "Best place to manage your emails.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-5 my-10 sm:my-0 xs:my-0 md:my-7
      bg-gradient-to-t from-black via-gray-900 to-gray-800">
        {/* <Provider store={store}> */}
        
          {children}

        {/* </Provider> */}
      </body>
    </html>
  );
}

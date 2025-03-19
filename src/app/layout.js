import { Analytics } from "@vercel/analytics/react";
import ClientLayout from "./Clientlayout";
import "./globals.css";

export const metadata = {
  title: "UDZSW Solutions",
  description: "UDZSW Solutions -  A Software Develeopment Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <link rel="canonical" href="https://https://udzsw_solutions.com/" />
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
      <meta name="viewport" content="width=100%, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <title>Vishal Yadav - Senior Frontend Developer (Next JS/ React JS/ Tailwind CSS/ Material UI)</title>

    <meta name="title" content="Vishal Yadav - Senior Frontend Developer (Next JS/ React JS/ Tailwind CSS/ Material UI)"/>
    <meta name="description" content="I am offering innovative IT solutions for businesses of all sizes."/>
    <meta name="robots" content="index, follow"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="language" content="English"/>
    <meta name="author" content="Vishal Yadav"/>

    <meta property="og:title" content="Vishal Yadav - Senior Frontend Developer (Next JS/ React JS/ Tailwind CSS/ Material UI)"/>
    <meta property="og:site_name" content="vishalyadav.com"/>
    <meta property="og:url" content="https://https:/vishalyadav.com/"/>
    <meta property="og:description" content="Vishal Yadav - Senior Frontend Developer (Next JS/ React JS/ Tailwind CSS/ Material UI)"/>
    <meta property="og:type" content=""/>
    <meta property="og:image" content="https://udzsw_solutions.s3.us-east-2.amazonaws.com/public/github/landwind/og-image.png"/>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@udzsw_solutions" />
    <meta name="twitter:creator" content="@udzsw_solutions" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="theme-color" content="#ffffff"/>
    {/* <link href="./output.css" rel="stylesheet"/> */}
      </head>
      <body>
        <Analytics/>
        <ClientLayout>{children}</ClientLayout>

        <a
          href="https://wa.link/48sbvw" target="_blank"
          className="fixed lg:hidden md:hidden sm:hidden bottom-4 left-4 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition"
          rel="noopener noreferrer" // Security feature
        >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp logo
          alt="Chat with us on WhatsApp"
          className="h-12 w-12" // Adjust size as needed
        />
        </a>
      </body>
    </html>
  );
}


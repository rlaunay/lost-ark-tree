import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { PropsWithChildren } from "react";

type DocumentProps = PropsWithChildren<{
  title?: string;
}>

function Document({ title, children }: DocumentProps) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

// export async function loader({request}: LoaderArgs) {

// }

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Lost Ark Tree",
  viewport: "width=device-width,initial-scale=1",
});
import "@/styles/globals.css";
import 'react-quill-new/dist/quill.snow.css';

import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

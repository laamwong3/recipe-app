import type { AppProps } from "next/app";
import { Layout } from "../components";
import StateManager from "../contexts/StateManager";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StateManager>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateManager>
    </>
  );
}

export default MyApp;

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { Red_Hat_Display } from "@next/font/google";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-redhat",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${redHat.className} -z-50`}>
      <Theme appearance="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </main>
  );
}

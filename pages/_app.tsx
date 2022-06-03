import "../styles/globals.css";
import { studioTheme, ThemeProvider } from "@sanity/ui";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={studioTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

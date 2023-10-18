import { type AppType } from "next/app";
import { ClerkProvider } from '@clerk/nextjs'
import { api } from "~/utils/api";

import "~/styles/globals.css";
import { dark } from "@clerk/themes";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
  <Component {...pageProps} />
  </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
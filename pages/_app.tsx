import Navbar from "../components/navbar.component";
import Sidebar from "../components/sidbar.component";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:mb-0 md:mb-16 my-14 lg:px-36 sm:px-20 md:px-32">
        <div className="h-full col-span-12 p-4 text-base text-center bg-page dark:bg-night lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-page lg:col-span-9 rounded-2xl dark:bg-night-500 dark:text-white shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;

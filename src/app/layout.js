import { Inter, Oswald, Roboto } from "next/font/google";
import "./globals.css";
import ComputerNavbar from "@/components/ComputerNavbar";
import { Icon, iconExists } from "@iconify/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "./(app)/context/context";
import { Provider } from "react-redux";
import store from "@/lib/store";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Desi Market",
  description: "One stop destination for all your needs",
};

export default function RootLayout({ children }) {
  const navBarItems = [
    {
      id: 1,
      label: "Home",
      path: "/",
      icon: (
        <Icon
          icon="ic:round-home"
          width="1.2em"
          height="1.2em"
          style={{ color: "gray" }}
        />
      ),
    },
    {
      id: 2,
      label: "Categories",
      path: "/categories",
      icon: (
        <Icon
          icon="carbon:collapse-categories"
          width="1.2em"
          height="1.2em"
          style={{ color: "gray" }}
        />
      ),
    },
    {
      id: 3,
      label: "Favourites",
      path: "/favourites",
      icon: (
        <Icon
          icon="tabler:heart-filled"
          width="1.2em"
          height="1.2em"
          style={{ color: "gray" }}
        />
      ),
    },
    {
      id: 4,
      label: "Settings",
      path: "/settings",
      icon: (
        <Icon
          icon="uiw:setting"
          width="1.2em"
          height="1.2em"
          style={{ color: "gray" }}
        />
      ),
    },
  ];
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>
          <ComputerNavbar items={navBarItems} />
          <ToastContainer />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

import { Inter, Oswald, Roboto } from "next/font/google";
import "./globals.css";
import ComputerNavbar from "@/components/ComputerNavbar";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({subsets:['latin'],weight:'400'})
const oswald = Oswald({subsets:['latin'],weight:'400'})

export const metadata = {
  title: "Desi Market",
  description: "One stop destination for all your needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ComputerNavbar/>
        {children}</body>
    </html>
  );
}

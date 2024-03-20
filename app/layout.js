import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import UserProvider from "./context/userProvider";
import "./globals.css";
import Header from "./Components/Header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecomerce App",
  description: "Created by Atul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider></UserProvider>
        <ToastContainer>
          <Header />
          {children}
        </ToastContainer>
      </body>
    </html>
  );
}

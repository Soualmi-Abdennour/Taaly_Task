import { Baloo_Bhaijaan_2 } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { UserContextProvider } from "@/providers/UserContextProvider";

const BB2 = Baloo_Bhaijaan_2({ subsets: ["latin"] });

export const metadata = {
  title: "Taaly Task",
  description: "Taaly task for frontend developer role",
};

export default function RootLayout({ children }) {
  return (
    <UserContextProvider>
      <html lang="en">
        <body className={BB2.className}>
          <ToastContainer></ToastContainer>
          {children}
        </body>
      </html>
    </UserContextProvider>
  );
}

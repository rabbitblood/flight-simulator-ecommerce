import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import { ToastContainer} from 'react-toastify';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Layout>
      <div className={inter.className}>{children}</div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </Layout>
    </html>
  );
}

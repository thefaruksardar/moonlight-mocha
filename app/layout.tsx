import Header from "@/components/header";
import "../style/globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import Footer from "@/components/footer";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  themeColor: [{ color: "#01C6F2" }],
  title: "Moonlight Mocha",
  description:
    "Moonlight Mocha offers enchanting coffee and treats in a serene, moonlit ambiance. Relax and unwind with us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.className} bg-neutral-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

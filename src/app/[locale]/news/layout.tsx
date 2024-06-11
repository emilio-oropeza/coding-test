
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "News",
    description: "news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="bg-slate-50 dark:bg-slate-800 overflow-auto p-8">
        {children}
    </article>
  );
}

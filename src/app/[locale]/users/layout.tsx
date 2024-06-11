import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "Users",
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

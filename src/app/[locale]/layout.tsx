import { locales, isValidLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return (
    <>
      <Header locale={locale} />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer locale={locale} />
    </>
  );
}

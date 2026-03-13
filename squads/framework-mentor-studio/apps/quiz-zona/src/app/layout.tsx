import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Diagnostico | Em que Zona voce esta?",
  description:
    "Descubra se voce esta na Zona de Competencia, Excelencia ou Genialidade. Quiz de 2 minutos baseado no framework de Gay Hendricks.",
  openGraph: {
    title: "Mini Diagnostico | Em que Zona voce esta?",
    description:
      "Descubra se voce esta na Zona de Competencia, Excelencia ou Genialidade. Quiz de 2 minutos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediConnect - Modern Healthcare Platform",
  description: "Connect with doctors anytime, anywhere with our modern healthcare platform",
};

export default function RootLayout({ children } : Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#8b5cf6",
          colorBackground: "#0f0f23",
          colorInputBackground: "#1a1a2e",
          colorInputText: "#ffffff",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo-single.png" sizes="any" />
        </head>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative min-h-screen">
              {/* Background gradient overlay */}
              <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-blue-900/20 pointer-events-none" />
              
              {/* Animated background elements */}
              <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
              </div>
              
              <Header />
              <main className="relative z-10 pt-4">{children}</main>
              <Toaster richColors position="top-right" />
            </div>

            <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/10 py-12 mt-20">
              <div className="container mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <p className="text-sm">Made with ❤️ by Garima</p>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
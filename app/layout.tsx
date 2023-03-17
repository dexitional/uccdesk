import "../styles/globals.css"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
             {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}

import "../styles/globals.css"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

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
      </body>
    </html>
  )
}

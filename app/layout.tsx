import "../styles/globals.css"
import Header from "../components/Header"

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
        <div className="h-56 w-full bg-slate-200"></div>
        <div className="flex">
          <div className="w-1/4 h-screen bg-green-100">Chat Box</div>
          <div className="flex-1">
             {children}
          </div>
        </div>
      </body>
    </html>
  )
}

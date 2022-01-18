import Header from "./AppHeader";
import Footer from './AppFooter'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
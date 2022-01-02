import Navigationbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navigationbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
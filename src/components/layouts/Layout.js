import Footer from '../footer/Footer'
import Navigation from '../navigation/Navigation'
import ProfilCard from '../profil-card/ProfilCard'

export default function Layout({children}) {
  return (
    <>
    <Navigation />
    <main>
        <ProfilCard />
        {children}
    </main>
    <Footer />
    </>
  )
}

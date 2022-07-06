import Footer from './footer/Footer'
import Nav from './navigation/Nav'
import ProfilCard from './profil-card/ProfilCard'
import LayoutSection from "./LayoutSection"


export default function Layout({children}) {
  return (
    <>
    <Nav />
    <main className='w-full px-3 flex flex-col md:flex-row'>
        <ProfilCard />
        <LayoutSection>{children}</LayoutSection>
    </main>
    <Footer />
    </>
  )
}

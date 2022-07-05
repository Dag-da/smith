import Footer from '../footer/Footer'
import Nav from '../navigation/Nav'
// import Navigation from '../navigation/Navigation'
import ProfilCard from '../profil-card/ProfilCard'
// import "flowbite"



export default function Layout({children}) {
  return (
    <>
    <Nav />
    <main>
        <ProfilCard />
        {children}
    </main>
    <Footer />
    </>
  )
}

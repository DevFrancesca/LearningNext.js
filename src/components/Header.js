"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Header = () => {
  const pathname = usePathname()
  return (
    <div className="header">
      <div className="hLeft">
        <div className="imgCon">
          <img src="./Finsworth1.png" alt=""/>
        </div>
      </div>
      <div className="hRight">
        <nav>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">HOME</Link>
          <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">ABOUT</Link>
          <Link className={`link ${pathname === '/contactUs' ? 'active' : ''}`} href="/contactUs">CONTACT US</Link>
          <Link className={`link ${pathname === '/login' ? 'active' : ''}`} href="/login">LOGIN</Link>
        </nav>
        <article></article>
      </div>
    </div>
  )
}

export default Header

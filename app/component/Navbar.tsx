'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname()
   return ( 
   <nav className="mt-10">
    <ul className="flex justify-around items-center ">
      <Link className={`link ${pathName === '/' ? 'active' : ''}`} href={"/"}>
      Home
      </Link>
      <Link className={`link ${pathName === '/about' ? 'active':''}`} href={"/about"}>
      About
      </Link>
      <Link className={`link ${pathName === '/contacts' ? 'active':''}`} href={"/contacts"}>
      Contacts
      </Link>
    </ul> 
</nav>)
}
export default Navbar;
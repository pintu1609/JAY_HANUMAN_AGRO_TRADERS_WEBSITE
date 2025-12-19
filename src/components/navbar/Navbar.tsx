"use client";
import { usePathname } from 'next/navigation';
import { links } from '@/dumby';
import Link from 'next/link';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
  const pathname = usePathname()


  

  const navbarBgColor = ['/home', '/contact'].includes(pathname) ? 'bg-gray-900 ' : 'bg-gray-900';
  console.log("🚀 ~ navbarBgColor:", navbarBgColor)


  return (
    <nav className={`navbar flex items-center h-20 ${navbarBgColor} sticky z-50`}>
  <div className="navbar-container flex justify-between items-center w-4/5 mx-auto px-4">
    <div className="navbar-left flex items-center gap-10">
      <Link href="/home" className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-slate-900">
        {/* <img className="w-8" src="https://i.postimg.cc/K8QFJGFw/1705389198122.jpg" alt="Logo" /> */}
        <span className="text-white">Jay Hanuman Aagao Traders</span>
      </Link>
   

    <div className="navbar-right flex gap-10 ml-10">
      {links[0].links.map((link) => (
        <Link key={link.url} href={`/${link.url}`} className="text-xl text-white hover:underline hover:underline-offset-[28px] decoration-[4px] decoration-blue-700">
          {link.name}
        </Link>
      ))}
    </div>
    </div>

    <div>
    <Link href="/contact" passHref>
      <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:none">
        Contact Us
        <MdKeyboardArrowRight className="text-white " size={30}/>
      </button>
    </Link>
    </div>
  </div>
</nav>

  );
};

export default Navbar;

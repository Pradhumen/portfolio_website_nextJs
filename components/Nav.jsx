"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name:'home',
        path:'/'
    },
    {
        name:'services',
        path:'/services'
    },
    {
        name:'resume',
        path:'/resume'
    },
    {
        name:'work',
        path:'/work'
    },
    {
        name:'contact',
        path:'/contact'
    },
    
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
  return <nav className="flex gap-8">
        {links.map((value,index)=>{
            return <Link href={value.path} key={index} className={`${value.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>{value.name}</Link>
        })}
  </nav>;
}

export default Nav
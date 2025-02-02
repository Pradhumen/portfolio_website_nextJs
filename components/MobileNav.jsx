"use client";

import {Sheet,SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {usePathname} from "next/navigation"
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"



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

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center item-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent  className="flex flex-col">
            {/* logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-3xl font-semibold">Pradhumen<span className="text-accent">.</span></h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((value,index)=>{
                    return <Link href={value.path} key={index} className={`${value.path === pathname && "text-accent border-b-2"} text-xl capitalize hover:text-accent transition-all`}>{value.name}</Link>
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";

const Header = () => {
    return <header className="py-8 xl:py-12 text-white">
        <div className="container auto-mx flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">Pradhumen <span className="text-accent">.</span></h1>
            </Link>
            {/* desktop nav & hire me button*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button className="bg-gray-800 hover:bg-slate-500 rounded">Hire me</Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                Mobile Nav
            </div>

        </div>
    </header>;
}

export default Header
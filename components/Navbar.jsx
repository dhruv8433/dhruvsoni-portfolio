import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { MenuIcon } from "./icons/MenuIcon";

export default function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-white">
      <Link
        className="flex items-center gap-2 text-lg font-semibold md:text-xl"
        href="#"
      >
        <h1>
          <span className="text-3xl text-center text-red-600">D</span>hruv
        </h1>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link
          className="hover:underline hover:underline-offset-4 text-gray-900"
          href="#"
        >
          Home
        </Link>
        <Link
          className="hover:underline hover:underline-offset-4 text-gray-900 "
          href="#"
        >
          About
        </Link>
        <Link
          className="hover:underline hover:underline-offset-4 text-gray-900 "
          href="#"
        >
          Services
        </Link>
        <Link
          className="hover:underline hover:underline-offset-4 text-gray-900 "
          href="#"
        >
          Contact
        </Link>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6 text-gray-900" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            <Link
              className="flex items-center gap-2 text-lg font-semibold hover:underline hover:underline-offset-4 text-gray-900 "
              href="#"
            >
              Home
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-semibold hover:underline hover:underline-offset-4 text-gray-900 "
              href="#"
            >
              About
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-semibold hover:underline hover:underline-offset-4 text-gray-900 "
              href="#"
            >
              Services
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-semibold hover:underline hover:underline-offset-4 text-gray-900 "
              href="#"
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

import Link from "next/link";
import { ROUTES } from "../constants/ROUTES";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 shadow-md">
      <nav className="flex gap-6">
        <Link href={ROUTES.HOME} className="hover:text-sky-300">
          Home
        </Link>
        <Link href={ROUTES.USUARIOS} className="hover:text-sky-300">
          Usuarios
        </Link>
        <Link href={ROUTES.LOGSA} className="hover:text-sky-300">
          Logsa
        </Link>
      </nav>
    </header>
  );
}

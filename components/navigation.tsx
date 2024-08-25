"use client";
// use client 가 있든 없든 모두 sever rendering 된다
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
            {path === "/" && "🛑"}
          </Link>
        </li>
        <li>
          <Link href="/about">
            about
            {path === "/about" && "🛑"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

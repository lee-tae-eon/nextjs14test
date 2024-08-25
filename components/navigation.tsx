"use client";
// use client 가 있든 없든 모두 sever rendering 된다
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();

  const [count, setCount] = useState(0);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}

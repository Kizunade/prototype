import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-primary">
          宠爱有家
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">登录</Button>
          </Link>
          <Link href="/login">
            <Button>开始使用</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

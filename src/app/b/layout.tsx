import { BTabBar } from "@/components/b-tabbar";

export default function BLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pb-16 min-h-screen bg-zinc-50">
      <main className="flex-1 overflow-y-auto">{children}</main>
      <BTabBar />
    </div>
  );
}

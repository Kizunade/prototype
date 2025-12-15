import { CTabBar } from "@/components/c-tabbar";

export default function CLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pb-16 min-h-screen bg-zinc-50">
      <main className="flex-1 overflow-y-auto">{children}</main>
      <CTabBar />
    </div>
  );
}

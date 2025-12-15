import { CTabBar } from "@/components/c-tabbar";

export default function CLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pb-16 min-h-screen bg-zinc-50 flex flex-col">
      <div className="flex-1">{children}</div>
      <CTabBar />
    </div>
  );
}

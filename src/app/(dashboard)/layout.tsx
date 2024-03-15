import { fetchProfile } from "@/actions/auth";
import Footer from "@/components/footer/footer";
import { MainNav } from "@/components/menu/main-nav";
import { UserAccountNav } from "@/components/menu/user-account-nav";
import { dashboardConfig } from "@/config/dashboard";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const profile = await fetchProfile();

  if (profile.status === "error") return redirect("/login?session=expired");

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav account={profile.data} />
        </div>
      </header>
      <div className="container flex-1 md:grid-cols-[200px_1fr]">
        <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
      </div>
      <Footer className="border-t" />
    </div>
  );
}

import LoginForm from "@/components/LoginForm";
import SmallCards from "@/components/SmallCards";
import NotAuthorized from "@/components/admin/NotAuthorized";
import { authOptions } from "@/utils/authOptions";
import { Plus } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  if (session?.user?.role === "USER") {
    return <NotAuthorized />;
  }
  return (
    <div>
      <h2 className="text-2xl border-b border-slate-600 py-8">
        Welcome Admin - {session?.user?.name}
      </h2>
      <SmallCards />
      <div className="py-8 px-16 flex items-center justify-center">
        <Link
          href="/dashboard/courses/create"
          className="py-3 px-6 bg-purple-600 rounded-lg flex items-center space-x-2"
        >
          <Plus /> Create a Course
        </Link>
      </div>
    </div>
  );
}

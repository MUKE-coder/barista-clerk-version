import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-slate-900 text-slate-200 flex flex-col gap-8 justify-center min-h-screen items-center mx-auto max-w-5xl">
      <h2 className="text-2xl">
        Not Found | <span className="text-6xl">404</span>
      </h2>
      <p>Could not find requested Page</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}

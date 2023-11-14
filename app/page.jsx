import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Barista</h1>
      <Link href="/dashboard/courses">View Dashboard</Link>
    </div>
  );
}

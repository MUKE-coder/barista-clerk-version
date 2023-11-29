import { Lock } from "lucide-react";
import React from "react";

export default function NotAuthorized() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen gap-8">
      <h2 className="text-4xl">Your Not Authorized</h2>
      <Lock className="w-14 h-14" />
    </div>
  );
}

import { Award } from "lucide-react";
import React from "react";

export default function VoteButton({ id }) {
  return (
    <button className="bg-slate-800 text-slate-100 flex items-center space-x-2 py-2 px-4 rounded-md">
      <Award className="w-4 h-4" />
      <span>Vote</span>
    </button>
  );
}

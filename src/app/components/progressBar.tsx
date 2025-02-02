import React from "react";

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full bg-neutral-100 rounded-[30px] h-4 dark:bg-neutral-800">
      <div
        className="bg-purple-400 h-4 rounded-[30px]"
        style={{width: progress + "%"}}
      ></div>
    </div>
  );
}

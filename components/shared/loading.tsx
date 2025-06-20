"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the Player component with SSR disabled
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center w-screen h-screen z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Player
        autoplay
        loop
        src="/loader.json"
        style={{ height: "200px", width: "200px" }}
      />
      <p className="text-white text-lg font-medium mt-4">
        Loading... please wait
      </p>
    </div>
  );
};

export default Loading;
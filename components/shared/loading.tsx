"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

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
"use client";

import { Box } from "./components/Box";
import { Box2 } from "./components/Box2";
import { AuthProvider } from "./context/authContext";

export default function Home() {
  return (
    <main>
      <AuthProvider>
        <h1>Home</h1>
        <Box />
        <Box2 />
      </AuthProvider>
    </main>
  );
}

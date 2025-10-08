// src/app/head.tsx

export default function Head() {
  return (
    <>
      {/* Primary favicon */}
      <link rel="icon" href="/avatar.png" sizes="32x32" />
      {/* Apple Touch icon */}
      <link rel="apple-touch-icon" href="/avatar.png" />
      {/* Manifest (optional) */}
      <link rel="manifest" href="/manifest.json" />
    </>
  )
}

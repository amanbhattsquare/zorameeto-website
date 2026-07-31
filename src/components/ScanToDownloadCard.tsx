"use client";

import Image from "next/image";

interface ScanToDownloadCardProps {
  className?: string;
}

export function ScanToDownloadCard({ className = "" }: ScanToDownloadCardProps) {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.zorameeto.zorameeto_app";

  return (
    <a
      href={playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-white p-2.5 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${className}`}
      title="Scan QR code to download ZoraMeeto App"
    >
      <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-xl bg-white p-1">
        <Image
          src="/qr-playstore.svg"
          alt="ZoraMeeto Play Store QR Code"
          width={112}
          height={112}
          className="h-full w-full object-contain"
          priority
        />
      </div>
    </a>
  );
}

export default ScanToDownloadCard;

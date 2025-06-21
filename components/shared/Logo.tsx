import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Image 
        src="/logo.png" 
        alt="ZeroRound Logo" 
        width={32} 
        height={32}
      />
      <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">ZeroRound</span>
    </div>
  )
}

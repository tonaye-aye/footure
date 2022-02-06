import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/assets/logo.png'

export default function Navbar() {
  return (
    <nav className="w-full max-w-5xl mx-auto flex justify-between items-center p-3 mt-2 font-sans font-black border-b border-gray-800">
      <Link href="/">
        <a className="flex items-center">
          <Image alt="FF" src={Logo} width={35} height={38} />
          <p className="text-xl ml-3 font-sans text-blue-300 font-semibold">
            Football Friend.
          </p>
        </a>
      </Link>
      <p className="grow text-right font-sans text-white font-light">Tips</p>
    </nav>
  )
}

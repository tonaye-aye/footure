import Image from 'next/image'
import heroImage from '../public/assets/hero.svg'

export default function Hero() {
  return (
    <section className="mt-12 mb-4 sm:mt-24 sm:mb-12 px-4 grid items-center grid-cols-3 gap-x-4 sm:gap-x-24">
      <h1 className="col-span-3 sm:col-span-2 font-bold text-white text-xl lg:text-3xl">
        Navigate the latest fixtures, results and everything{' '}
        <span className="text-blue-600">football.</span> Made for Australians.
      </h1>
      <div className="col-span-3 sm:col-span-1 flex justify-center">
        <Image src={heroImage} width={200} height={200} alt="Soccer Goal" />
      </div>
    </section>
  )
}

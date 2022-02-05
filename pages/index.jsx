import Image from 'next/image'
import Default from '@layouts/default'
import Hero from '../public/assets/hero.svg'

export default function Home() {
  return (
    <Default title="Home">
      <main className="w-full max-w-5xl mx-auto">
        <section className="my-12 sm:my-24 px-4 grid items-center grid-cols-3 gap-x-4 sm:gap-x-24">
          <h1 className="col-span-3 sm:col-span-2 font-bold text-white text-xl lg:text-3xl">
            Navigate the latest fixtures, results and tips on everything
            football.
          </h1>
          <div className="col-span-3 sm:col-span-1 flex justify-center">
            <Image src={Hero} width={250} height={250} alt="Soccer Goal" />
          </div>
        </section>
      </main>
    </Default>
  )
}

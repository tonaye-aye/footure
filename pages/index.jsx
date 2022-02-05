import Default from '@layouts/default'
import Hero from '@components/Hero'
import TabsHome from '@components/TabsHome'

export default function Home() {
  return (
    <Default title="Home">
      <main className="w-full max-w-5xl mx-auto">
        <Hero />
        <TabsHome />
      </main>
    </Default>
  )
}

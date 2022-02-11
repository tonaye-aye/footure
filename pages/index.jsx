import Default from '@layouts/default'
import Hero from '@components/Hero'
import TabsHome from '@components/TabsHome'

export default function Home({ fixtures, results }) {
  return (
    <Default title="Home">
      <Hero />
      <TabsHome fixtures={fixtures.data} results={results.data} />
    </Default>
  )
}

export async function getServerSideProps() {
  const [fixturesRes, resultsRes] = await Promise.all([
    fetch(`https://footure-api.glitch.me/fixtures`),
    fetch(`https://footure-api.glitch.me/results`)
  ])
  const [fixtures, results] = await Promise.all([
    fixturesRes.json(),
    resultsRes.json()
  ])
  return { props: { fixtures, results } }
}

import Container from '@layouts/container'
import Hero from '@components/hero'
import TabsHome from '@components/tabs-home'

export default function Home({ fixtures, results }) {
  return (
    <Container title="Home">
      <Hero />
      <TabsHome fixtures={fixtures.data} results={results.data} />
    </Container>
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

import Container from '@layouts/Container'
import Hero from '@components/Hero'
import Tabshome from '@components/Tabshome'

export default function Home({ fixtures, results }) {
  return (
    <Container title="Home">
      <Hero />
      <Tabshome fixtures={fixtures.data} results={results.data} />
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

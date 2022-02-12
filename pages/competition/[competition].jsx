import { useRouter } from 'next/router'
import { CompetitionHandler } from '@lib/competition-handler'
import Container from '@layouts/container'
import CompetitionDetails from '@components/competition-details'

export default function Competition({ fixtures, results }) {
  const router = useRouter()
  const { competition } = router.query

  const handleCompetitonTitle = (comp) => {
    return CompetitionHandler(comp)
  }

  return (
    <Container title="Home">
      <h1 className="px-5 py-8 font-bold text-white text-xl lg:text-3xl capitalize">
        {handleCompetitonTitle(competition)}
      </h1>
      <div className="bg-white p-2 rounded-xl transition duration-500 ease-in-out">
        <CompetitionDetails
          competition={handleCompetitonTitle(competition)}
          fixtures={fixtures.data}
          results={results.data}
        />
      </div>
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

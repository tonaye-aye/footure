import { useRouter } from 'next/router'
import { CompetitionHandler } from '@lib/competitionHandler'
import Container from '@layouts/container'
import Details from '@components/Details'
import Dropdown from '@components/Dropdown'

export default function Competition({ fixtures, results }) {
  const router = useRouter()
  const { competition } = router.query

  const handleCompetitonTitle = (comp) => {
    return CompetitionHandler(comp)
  }

  return (
    <Container title="Home">
      <div className="w-full relative flex items-center justify-between pt-8 pb-2 mb-3">
        <h1 className="font-bold text-white text-xl capitalize">
          {handleCompetitonTitle(competition)}
        </h1>
        <Dropdown fixtures={fixtures.data} results={results.data} />
      </div>
      <div className="bg-white p-2 rounded-xl transition duration-500 ease-in-out">
        <Details
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

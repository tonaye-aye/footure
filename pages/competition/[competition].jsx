import { useRouter } from 'next/router'
import { CompetitionHandler } from '@lib/competition-handler'
import Container from '@layouts/container'

export default function Competition() {
  const router = useRouter()
  const { competition } = router.query

  const handleCompetitonTitle = (comp) => {
    return CompetitionHandler(comp)
  }

  return (
    <Container title="Home">
      <h1 className="py-12 font-bold text-white text-xl lg:text-3xl capitalize">
        {handleCompetitonTitle(competition)}
      </h1>
    </Container>
  )
}

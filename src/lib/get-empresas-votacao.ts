export const getEmpresasVotacao = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?categories=10&orderby=title&order=asc&per_page=20`,
  )
  const data = await response.json()
  return data
}

import { TMDB_API_KEY } from "$env/static/private"

export const load = async ({ fetch }) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
	)
	const movieData = await res.json()
	return {
		movies: movieData.results,
	}
}

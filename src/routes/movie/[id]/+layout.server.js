import { TMDB_API_KEY } from "$env/static/private"

export const load = async ({ fetch, params }) => {
	const movie_id = params.id
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${TMDB_API_KEY}&language=en-US&page=1`
	)
	const movieDetail = await res.json()
	// console.log(movieDetail)
	return {
		movie: movieDetail,
	}
}

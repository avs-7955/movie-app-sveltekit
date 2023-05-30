import { TMDB_API_KEY } from "$env/static/private"

export const load = async ({ fetch, params }) => {
	const movie_name = params.id
	// console.log(movie_name)
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${movie_name}&include_adult=false&language=en-US&page=1`
	)
	const movieDetail = await res.json()
	// console.log(movieDetail)
	return {
		searched_movies: movieDetail.results,
	}
}

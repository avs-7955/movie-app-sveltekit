<script>
	export let data
	let movies = data.movies
	import PopularMovies from "../components/PopularMovies.svelte"
	// console.log(movies)
</script>

<section>
	<PopularMovies {movies} />
</section>

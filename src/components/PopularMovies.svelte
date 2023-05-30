<script>
	import MovieCard from "./MovieCard.svelte"
	import SearchMovie from "./SearchMovie.svelte"
	import { slide, fade, scale } from "svelte/transition"
	export let movies
	// console.log(movies[0])
</script>

<h1>Popular Movies</h1>
<SearchMovie />
<div class="popular-movies" in:scale>
	{#each movies as movie}
		<!-- <li>{movie.title}</li> -->
		<MovieCard {movie} />
	{/each}
</div>

<style>
	h1 {
		padding: 1rem;
	}
	.popular-movies {
		max-width: 85%;
		align-self: center;
		margin: 0 auto;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		column-gap: 1.5rem;
		row-gap: 2.5rem;
	}
</style>

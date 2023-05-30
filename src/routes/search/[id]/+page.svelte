<script>
	import MovieCard from "../../../components/MovieCard.svelte"
	import Nav from "../../../components/Nav.svelte"
	export let data
	let searched_movies = data.searched_movies
	import { slide, fade, scale } from "svelte/transition"
</script>

<Nav />
<h1>Results</h1>
<div class="searched-movies" in:fade out:fade>
	{#each searched_movies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	h1 {
		padding: 1rem;
	}
	.searched-movies {
		max-width: 85%;
		align-self: center;
		margin: 0 auto;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		column-gap: 1.5rem;
		row-gap: 2.5rem;
	}
</style>

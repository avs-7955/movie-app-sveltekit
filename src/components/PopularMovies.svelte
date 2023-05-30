<script>
	import MovieCard from "./MovieCard.svelte"
	export let movies
	// console.log(movies[0])
</script>

<h1>Popular Movies</h1>
<div class="popular-movies">
	{#each movies as movie}
		<!-- <li>{movie.title}</li> -->
		<MovieCard {movie} />
	{/each}
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

	h1 {
		padding: 0 1rem;
		font-family: "Poppins", sans-serif;
	}
	.popular-movies {
		max-width: 85%;
		align-self: center;
		margin: 0 auto;

		font-family: "Poppins", sans-serif;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		column-gap: 1.5rem;
		row-gap: 2.5rem;
	}
</style>

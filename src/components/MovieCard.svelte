<script>
	import { slide, fade, scale } from "svelte/transition"
	export let movie
</script>

<div class="movie-card" in:slide out:fade>
	<a data-sveltekit-noscroll href={"/movie/" + movie.id}>
		{#if movie.poster_path != null}
			<img
				src="https://image.tmdb.org/t/p/w200{movie.poster_path}"
				class="card-img-top"
				alt={movie.title}
			/>
		{:else}
			<img
				src="https://image.tmdb.org/t/p/w200{movie.backdrop_path}"
				class="card-img-top"
				alt={movie.title}
			/>
		{/if}
	</a>
	<div class="movie-description">
		<h3>{movie.title}</h3>
		<p>{movie.release_date}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
		height: 35vh;
		object-fit: cover;
		border-radius: 10px;
		transition: width 1s;
		transition-timing-function: ease-in;
	}
	img:hover {
		width: 110%;
	}
	h3 {
		font-size: 0.9rem;
		margin: 0;
	}
	.movie-description {
		height: 5vh;
	}
	p {
		font-size: 0.7rem;
		margin: 0;
	}
	.movie-card {
		padding: 10px;
		justify-content: center;
	}
</style>

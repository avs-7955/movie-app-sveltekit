<script>
	export let movie
</script>

<div class="movie-card">
	<a href={"/movie/" + movie.id}>
		<img
			src="https://image.tmdb.org/t/p/w200{movie.poster_path}"
			class="card-img-top"
			alt={movie.title}
		/>
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
		justify-content: space-around;
	}
</style>

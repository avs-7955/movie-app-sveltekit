<script>
	export let data
	let movie_detail = data.movie
	// console.log(movie_detail)
</script>

<div class="container">
	<h1>{movie_detail.title}</h1>
	<h4>{movie_detail.tagline}</h4>
	<img
		src="https://image.tmdb.org/t/p/w500{movie_detail.backdrop_path}"
		alt="{movie_detail.title} poster"
	/>
	<div class="movie-details">
		<p>{movie_detail.overview}</p>
		<p>
			<span>Release date:</span>
			{movie_detail.release_date} <br />
			<span>Budget:</span> ${movie_detail.budget} <br />
			<span>Rating:</span>
			{movie_detail.vote_average}<br />
			<span>Runtime:</span>
			{movie_detail.runtime} mins
		</p>
	</div>
</div>

<style>
	h1,
	h4,
	p {
		font-size: 0.9rem;
	}
	h1 {
		margin-bottom: 5px;
		font-size: 30px;
	}
	h4 {
		margin: 0 auto;
		padding: 0;
		margin-bottom: 5px;
		font-size: 14px;
	}
	.container {
		width: 80%;
		text-align: center;
		margin: auto;
	}
	img {
		border-radius: 1rem;
	}
	.movie-details {
		margin: 1rem 10%;
	}
	span {
		font-weight: 600;
	}
</style>

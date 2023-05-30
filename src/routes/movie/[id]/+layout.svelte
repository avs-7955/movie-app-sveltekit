<script>
	import "../../../styles/global.css"
	import Nav from "../../../components/Nav.svelte"
	export let data
	let movie_detail = data.movie
	// console.log(movie_detail)
</script>

<svelte:head>
	<title>Popular Movies Database</title>
</svelte:head>

<div class="container">
	<img
		src="https://image.tmdb.org/t/p/original{movie_detail.backdrop_path}"
		alt=""
		class="background-poster"
	/>
	<Nav />
	<slot />
</div>

<style>
	.background-poster {
		position: absolute;
		height: 100vh;
		width: 100vw;
		z-index: -1;
		opacity: 0.3;
	}
</style>

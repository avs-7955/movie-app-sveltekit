<script>
	import SearchMovie from "./SearchMovie.svelte"
</script>

<div class="containerr">
	<nav>
		<a href="/">Popular Movies</a>
	</nav>
	<SearchMovie />
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
	.containerr {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		min-height: 10vh;
		align-items: center;
		/* justify-content: center; */
		-webkit-backdrop-filter: blur(8px);
		backdrop-filter: blur(8px);
	}
	a {
		font-size: 1rem;
		font-weight: 600;
		font-family: "Poppins", sans-serif;
		color: black;
		text-decoration: none;
		letter-spacing: 4px;
		position: relative;
		margin: 2rem 1rem;
	}
	a::after,
	a::before {
		content: "";
		position: absolute;
		left: 0;
		bottom: -4px;
		width: 100%;
		height: 2px;
		background-color: #000;
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.4s ease-in-out;
	}
	a::before {
		top: -4px;
		transform-origin: left;
	}
	a:hover::after,
	a:hover::before {
		transform: scaleX(1);
		transform-origin: left;
	}
	a:hover::before {
		transform-origin: right;
	}
</style>

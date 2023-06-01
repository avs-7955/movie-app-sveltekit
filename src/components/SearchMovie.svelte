<script>
	// import { goto } from "$app/navigation"
	let input_value = ""
	import { base } from "$app/paths"
	// const goto: (`/search/{input_value}`)

	// const submitFunction = () => {
	// 	goto(`/search/${input_value}`)
	// }
</script>

<!-- google UI Material icons -->
<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>

<form class="search">
	<label class="visually-hidden" for="search_movie">Search Movie</label>
	<div class="input-group">
		<input
			name="search_movie"
			type="text"
			class="form-control form-control-sm"
			placeholder="Search Movie"
			bind:value={input_value}
		/>
		<a href="{base}/search/{input_value}" class="input-group-text">
			<span class="material-symbols-outlined"> search </span>
		</a>
	</div>
</form>

<!-- <h1>{input_value}</h1> -->

<style>
	/* for forms  */
	.search {
		max-width: 20%;
		border: 1px solid black;
		border-radius: 10px;
		position: absolute;
		right: 20px;
		top: 12px;
	}
	.form-control {
		display: block;
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		color: var(--bs-body-color);
		background-color: var(--bs-body-bg);
		background-clip: padding-box;
		border: var(--bs-border-width) solid var(--bs-border-color);
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border-radius: var(--bs-border-radius);
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		outline: none;
	}
	.input-group {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		width: 100%;
	}
	.input-group > .form-control {
		position: relative;
		flex: 1 1 auto;
		width: 1%;
		min-width: 0;
	}
	.input-group > .form-control:focus {
		z-index: 5;
	}

	.input-group-text {
		display: flex;
		align-items: center;
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		/* color: var(--bs-body-color); */
		text-align: center;
		white-space: nowrap;
		background-color: var(--bs-tertiary-bg);
		border: var(--bs-border-width) solid var(--bs-border-color);
		border-radius: var(--bs-border-radius);
		cursor: pointer;
	}
	.visually-hidden {
		display: none;
	}
	a {
		text-decoration: none;
		color: black;
	}
</style>

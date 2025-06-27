<script>
	export let title;
	export let subtitle = null;
	export let backgroundImage = "images/cityscape.jpeg";
	export let overlay = true;
</script>

<section class="hero" class:has-bg={backgroundImage}>
	{#if backgroundImage}
		<div class="hero-bg" style="background-image: url({backgroundImage})" class:overlay></div>
	{/if}

	<div class="hero-content">
		<h1 class="hero-title">{title}</h1>
		{#if subtitle}
			<p class="hero-subtitle">{subtitle}</p>
		{/if}
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 20vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background-color: var(--c-cream);
	}

	.hero.has-bg {
		min-height: 40vh;
		background-color: var(--c-slate);
	}

	.hero-bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: blur(8px) brightness(0.7);
		transform: scale(1.1);
		z-index: 1;
	}

	.hero-bg.overlay::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(49, 54, 63, 0.6) 0%, rgba(74, 76, 94, 0.4) 100%);
		z-index: 2;
	}

	.hero-content {
		position: relative;
		z-index: 3;
		text-align: center;
		max-width: 800px;
		padding: var(--space-xl) var(--space-lg);
	}

	.hero-title {
		font-family: var(--font-serif);
		font-size: 3rem;
		font-weight: 600;
		line-height: 1.2;
		margin-bottom: var(--space-md);
	}

	.hero-subtitle {
		font-family: var(--font-sans);
		font-size: 1.25rem;
		font-weight: 300;
		line-height: 1.5;
		opacity: 0.9;
		margin-bottom: 0;
	}

	/* Default styling (no background) */
	.hero:not(.has-bg) .hero-title {
		color: var(--c-charcoal);
	}

	.hero:not(.has-bg) .hero-subtitle {
		color: var(--c-wood);
	}

	/* Background image styling */
	.hero.has-bg .hero-title {
		color: var(--c-cream);
		text-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
	}

	.hero.has-bg .hero-subtitle {
		color: var(--c-cream);
		text-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.hero {
			min-height: 21vh;
		}

		.hero.has-bg {
			min-height: 30vh;
		}

		.hero-content {
			padding: var(--space-lg) var(--space-md);
		}

		.hero-title {
			font-size: 2.25rem;
		}

		.hero-subtitle {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 480px) {
		.hero {
			min-height: 10vh;
		}

		.hero.has-bg {
			min-height: 15vh;
		}

		.hero-content {
			padding: var(--space-md);
		}

		.hero-title {
			font-size: 1.875rem;
		}

		.hero-subtitle {
			font-size: 1rem;
		}
	}

	/* Animation for smooth entrance */
	.hero-content {
		animation: fadeInUp 0.8s ease-out;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>

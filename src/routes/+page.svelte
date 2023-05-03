<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Skills from './Skills.svelte';

	let readMore: boolean = false;
</script>

<svelte:head>
	<title>Robert Burns - Web Developer Portfolio</title>
	<meta
		name="description"
		content="As a full-stack web developer, I have the skills and experience to handle every aspect of your website's development, from back-end server configuration to front-end design and user experience. I specialize in Angular, Sveltekit, Node.js, and MongoDB, and am committed to delivering high-quality, scalable solutions for businesses of all sizes."
	/>
	<meta
		name="keywords"
		content="web development, front-end development, back-end development, full-stack development, responsive design, user experience, user interface, HTML, CSS, JavaScript, Typescript, Pocketbase, Angular, Sveltekit, Node.js, Python, e-commerce, portfolio, web developer, software engineer, freelance, remote work, UI design, UX design, mobile-first design, accessibility"
	/>

	<meta property="og:title" content="Robert Burns - Web Developer Portfolio" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.rburns.net/" />
	<meta property="og:image" content="/images/Robert_Burns_Headshot-1.jpg" />
	<meta
		property="og:description"
		content="As a full-stack web developer, I have the skills and experience to handle every aspect of your website's development, from back-end server configuration to front-end design and user experience. I specialize in Angular, Sveltekit, Node.js, and MongoDB, and am committed to delivering high-quality, scalable solutions for businesses of all sizes."
	/>
	<meta property="og:site_name" content="Robert Burns's Portfolio" />
	<meta property="og:locale" content="en_US" />
</svelte:head>

<main id="top" class="w-full bg-base-100 shadow-md p-4">
	<div class="max-w-5xl mx-auto py-6">
		<Section topDivider={false}>
			<div class="hero-content flex-col lg:flex-row p-0">
				<!-- you can add images in the /static/images and link them like this: -->
				<!-- src="/images/Robert_Burns_Headshot-1.jpg"  -->
				<img
					src="https://d57tm.org/wp-content/uploads/2019/04/headshot-placeholder.png"
					class="max-w-sm rounded-lg shadow-2xl w-full"
					alt="headshot of me"
				/>
				<div>
					<h1 class="text-5xl font-bold">John Doe</h1>
					<p class="py-6">
						Hi, I'm John Doe and I do good work. Very good problem solving skills because everyone says that.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio deserunt fugit accusantium accusamus minima vero eligendi, dolores similique a consequatur rerum ipsa magnam ut quam temporibus, nemo illum nesciunt. Ex!
					</p>

					<div class="grid grid-cols gap-4">
						<div class="w-full">
							<a class="btn btn-primary gap-2 font-semibold w-full sm:w-48 after:content-['↗']" href="https://www.linkedin.com/in/robert-burns-rburns-net" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin" ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</div>
		</Section>

		<Section sectionTitle="About me" anchorName="about">
		</Section>

		<Section sectionTitle="Experience" anchorName="experience">
		</Section>

		<Section sectionTitle="Skills" anchorName="skills">
			<!-- you can make split long sections into their own components like I did: -->
			<Skills />
		</Section>

		<Section sectionTitle="Contact" anchorName="contact">
			<ul class="text-xl mb-8">
				<li>
					<strong>Email:</strong>
					<a class="underline" href="mailto:rburns@codestack.co">you@email.example</a>
				</li>
				<li>
					<strong>Phone:</strong>
					 Call or text at 
					 <a class="underline" href="tel:+14174209387">123-456-1234</a>
				</li>
				<li><strong>Local:</strong> City, State</li>
			</ul>
		</Section>

		<!-- you can always add more sections: -->
		<Section sectionTitle="Extra Section">
			<div class="text-xl mt-6 mb-2">Contact me or view some docs if you need help:</div>
			<ul class="list-disc">
				<li class="ml-4">
					<a class="link" href="https://kit.svelte.dev/docs/introduction" target="_blank">SvelteKit Docs</a>
				</li>
				<li class="ml-4">
					<a class="link" href="https://learn.svelte.dev/tutorial/welcome-to-svelte" target="_blank">Svelte Interactive Tutorial</a>
				</li>
				<li class="ml-4">
					<a class="link" href="https://tailwindcss.com/docs/installation" target="_blank">TailwindCSS Docs</a>
				</li>
				<li class="ml-4">
					<a class="link" href="https://daisyui.com/components/" target="_blank">DaisyUI Docs</a>
				</li>
			</ul>
		</Section>
	</div>
</main>

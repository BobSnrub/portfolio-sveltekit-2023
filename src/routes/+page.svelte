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

<!-- <section class="hero min-h-screen bg-base-200 shadow bg-gradient-to-b from-base-300 to-base-100">
    <div class="hero-content flex-col lg:flex-row">
        <img src="/images/Robert_Burns_Headshot-1.jpg" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
            <h1 class="text-5xl font-bold">Robert Burns</h1>
            <p class="py-6">
                Hi, I'm Robert Burns, a certified software engineer.  I have been coding for over three years now and have gained 
                <a class="link" href="/#skills">skills</a>
                in many languages and frameworks. I'm passionate about creating innovative solutions and solving complex problems through clean, efficient, and scalable code.
            </p>
        </div>
    </div>
</section> -->

<!-- <div class="bg-gradient-to-b from-base-200 to-base-100 h-24"></div> -->

<main id="top" class="w-full bg-base-100 shadow-md p-4">
	<div class="max-w-5xl mx-auto py-6">
		<Section topDivider={false}>
			<div class="hero-content flex-col lg:flex-row p-0">
				<img
					src="/images/Robert_Burns_Headshot-1.jpg"
					class="max-w-sm rounded-lg shadow-2xl w-full"
					alt="headshot of me"
				/>
				<div>
					<h1 class="text-5xl font-bold">Robert Burns</h1>
					<p class="py-6">
						Hi, I'm Robert Burns, a certified software engineer. I have been coding for over three
						years now and have gained
						<a class="link" href="/#skills">skills</a>
						in many languages and frameworks. I'm passionate about creating innovative solutions and
						solving complex problems through clean, efficient, and scalable code.
					</p>

					<div class="grid grid-cols gap-4">
						<div class="w-full">
							<a
								class="btn btn-primary gap-2 font-semibold w-full sm:w-48 after:content-['↗']"
								href="https://www.linkedin.com/in/robert-burns-rburns-net"
								target="_blank"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-linkedin"
									><path
										d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
									/><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg
								>
								LinkedIn
							</a>
						</div>
						<div class="w-full">
							<a
								class="btn btn-primary gap-2 font-semibold w-full sm:w-48 after:content-['↗']"
								href="https://github.com/Burns316/"
								target="_blank"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-github"
									><path
										d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
									/></svg
								>
								Github
							</a>
						</div>
					</div>
				</div>
			</div>
		</Section>

		<Section sectionTitle="About me" anchorName="about">
			<div class="relative">
				<div class={`${readMore ? '' : 'line-clamp-6'} pb-3`}>
					<p class="text-lg pb-6">
						Throughout my childhood, I had a knack for problem-solving and fixing things for the
						people around me. From computers to farm equipment, I did it all. This aptitude for
						solving mechanical problems, combined with my attention to detail and ability to keep
						track of complex systems, has led to making me the Software Engineer I am today.
					</p>
					<p class="text-lg whitespace-pre-line pb-6">
						Shortly after highschool, not finding any college opportunities, I found CodeStack
						Academy. CodeStack is an accelerated Software Engineering program by the San Joaquin
						County Office of Education. I went from minimal knowledge of programming to making full
						stack web apps in less than 10 months. Upon completion of the course, I received a
						Software Engineering Certificate signed by the San Joaquin county superintendent of
						schools. I am also proud to have been the youngest person to have graduated from
						CodeStack up to that point.
					</p>
					<p class="text-lg whitespace-pre-line pb-6">
						The year after CodeStack, I started classes for a degree in Electrical Engineering.
						Between classes I’d find myself coding websites configuring my raspberry pi web server,
						3d printing, and doing Arduino and IOT projects. Due to recent circumstances, I have put
						a temporary pause on college and have been focusing more on developing my skills as a
						Web Developer.
					</p>
					<p class="text-lg whitespace-pre-line">
						Known for thinking outside the box, being a hard worker, honest, and clean-cut, I am
						confident in my ability to take on any challenge and deliver the best results possible.
						Overall, my problem solving abilities, technical mindset, and maintaining an attention
						to detail makes me a valuable addition to any team.
					</p>
				</div>

				<div
					class={`absolute h-14 w-full bottom-0 bg-gradient-to-b from-transparent to-base-100 ${
						readMore ? 'hidden' : ''
					}`}
				/>
			</div>
			<div class="w-full flex justify-end">
				<span on:click={() => (readMore = !readMore)} class="btn btn-sm btn-primary mt-2 text-end"
					>{readMore ? 'show less' : 'keep reading'}</span
				>
			</div>

			<!-- <p class="whitespace-pre-line pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere offi consectetur adipisicing elit. Inventore facere offi consectetur adipisicing elit. Inventore facere officia odio eos excepturi a voluptate, omnis numquam! Mollitia sapiente consectetur magni aspernatur harum asperiores ipsum dolorem sint repellat optio.
            </p>
            <p class="whitespace-pre-line pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere officia odio eos excepturi a voluptate, omnis numquam! Mollitia sapiente consectetur magni aspernatur harum asperiores ipsum dolorem sint repellat optio.
            </p>
            <p class="whitespace-pre-line pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere officia odio eos excepturi a voluptate, omnis numquam! Mollitia sapiente consectetur magni aspernatur harum asperiores itia sapiente consectetur magni aspernatur harum asperiores itia sapiente consectetur magni aspernatur harum asperiores itia sapiente consectetur magni aspernatur harum asperiores ipsum dolorem sint repellat optio.
            </p>
            <p class="whitespace-pre-line">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, non consequuntur neque  consectetur adipisicing elit. Inventore facere offi consectetur adipisicing elit. Inventore facere offi consectetur adipisicing elit. Inventore facere offi consectetur adipisicing elit. Inventore facere offi consectetur adipisicing elit. Inventore facere offienim blanditiis in laudantium odit beatae reprehenderit minima animi ipsam recusandae commodi, maiores illo.
            </p> -->

			<!-- <p class="pb-3">Throughout my childhood, I had a knack for problem-solving and fixing things for the people around me. From computers to farm equipment, I did it all. This aptitude for figuring out mechanical things, combined with my attention to detail and ability to keep track of complex systems, has led to making me the Software Engineer I am today.</p>
    
            <p class="pb-3">Shortly after highschool, not finding any college opportunities, I found CodeStack Academy. CodeStack is an accelerated Software Engineering program by the San Joaquin County Office of Education. I went from minimal knowledge of programming to making full stack web apps in less than 10 months. Upon completion of the course, I received a Software Engineering Certificate signed by the San Joaquin county superintendent of schools. I am also proud to have been the youngest person to have graduated from CodeStack up to that point.</p>
    
            <p class="pb-3">The year after CodeStack, I started classes for a degree in Electrical Engineering. Between classes I’d find myself coding websites configuring my raspberry pi web server, 3d printing, and doing Arduino and IOT projects. Due to recent circumstances, I have put a temporary pause on college and have been focusing more on developing my skills as a Web Developer.</p>
    
            <p>Known for thinking outside the box, being a hard worker, honest, and clean-cut, I am confident in my ability to take on any challenge and deliver the best results possible. Overall, my problem solving abilities, technical mindset, and maintaining an attention to detail makes me a valuable addition to any team.</p> -->
		</Section>

		<Section sectionTitle="Experience" anchorName="experience">
			<div class="alert p-3 alert-info shadow-lg w-full sm:w-max">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="stroke-current flex-shrink-0 w-6 h-6"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span><strong>Note:</strong> Will be implemented soon. Please check back later.</span>
				</div>
			</div>
		</Section>

		<Section sectionTitle="Skills" anchorName="skills">
			<Skills />
		</Section>

		<Section sectionTitle="Contact" anchorName="contact">
			<ul class="text-xl mb-8">
				<li>
					<strong>Email:</strong>
					<a class="underline" href="mailto:rburns@codestack.co">rburns@codestack.co</a>
				</li>
				<li>
					<strong>Phone:</strong>
					 Call or text at 
					 <a class="underline" href="tel:+14174209387">417-420-9387</a>
				</li>
				<li><strong>Local:</strong> Springfield, Missouri</li>
			</ul>

			<div class="alert p-3 alert-info shadow-lg w-full sm:w-max">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="stroke-current flex-shrink-0 w-6 h-6"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span><strong>Note:</strong> A contact form will be implemented soon</span>
				</div>
			</div>
		</Section>

		<Section sectionTitle="About this website">
			<ul class="sm:text-xl">
				<li><strong>Frontend framework:</strong> SvelteKit</li>
				<li><strong>UI:</strong> Tailwind CSS & DaisyUI</li>
				<li>
					<strong>Server:</strong> My Raspberry Pi through the Cloudflare network via Cloudflared tunnels
				</li>
				<!-- <li><strong>Time:</strong> ~20 hours of development</li> -->
			</ul>
		</Section>
	</div>
</main>

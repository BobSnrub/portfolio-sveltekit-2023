<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import Toast from '$lib/components/Toast.svelte';
	import type { PageData } from './$types';
	import Section from '$lib/components/Section.svelte';
	import Skills from './Skills.svelte';

	export let data: PageData;
	export let form: FormData;

	let loading = false;

	let messageName = '';
	let messageEmail = '';
	let messagePhone = '';
	let messageMessage = '';

	let toastData = {
		color: '',
		statusIcon: '',
		message: '',
		showToast: false
	}

	let showMessageForm = true;

	const submitMessage = () => {
		
		loading = true;
        return async ({ result }: any) => {
            switch (result.type) {
                case 'success':
					console.log('client: success');

					toastData.color = 'alert-success';
					toastData.statusIcon = 'success';
					toastData.message = 'Message sent! ';
					toastData.showToast = true;

					showMessageForm = false;

                    await invalidateAll();
                    break;
                case 'error':
					console.log('client: error');

					toastData.color = 'alert-error';
					toastData.statusIcon = 'error';
					toastData.message = 'An error has occurred! Please try again or contact via email.';
					toastData.showToast = true;
                    break;
                default:
					console.log('client: default');
                    await applyAction(result);
            }
            loading = false;
        };
    }

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

<main id="top" class="w-full shadow-md p-4">
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
							<a class="btn btn-primary gap-2 font-semibold w-full sm:w-48" href="https://www.linkedin.com/in/robert-burns-rburns-net" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin" ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
								LinkedIn
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
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
				<li class="flex items-end pb-2">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
					<a class="underline ml-4" href="mailto:rburns@codestack.co">you@email.example</a>
				</li>
				<li class="flex items-end pb-2">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
					<span class="ml-4">Call or text at </span>
					<a class="underline ml-2" href="tel:+14174209387">123-456-1234</a>
				</li>
				<li class="flex items-end">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
					<span class="ml-4">City, State</span>
				</li>
			</ul>

			<Toast {...toastData}/>

			{#if showMessageForm}
				<div class="py-12 bg-base-100">
					<div class="hero">
						<div class="hero-content flex-col lg:flex-row w-full">
							<div class="text-center">
								<h3 class="text-4xl font-bold">Get In Touch</h3>
								<div class="hidden sm:block">
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="350" height="256" viewBox="0 0 350 256" xml:space="preserve">
				
										<defs>
										</defs>
										<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
											<path d="M 33.578 56.169 c 0 2.642 2.142 4.784 4.784 4.784 H 79.95 c 2.642 0 4.784 -2.142 4.784 -4.784 V 28.566 c 0 -2.642 -2.142 -4.784 -4.784 -4.784 H 38.362 c -2.642 0 -4.784 2.142 -4.784 4.784 V 56.169 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(35,204,183); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 39.635 43.803 H 1.436 C 0.643 43.803 0 43.161 0 42.367 c 0 -0.793 0.643 -1.436 1.436 -1.436 h 38.199 c 0.793 0 1.436 0.643 1.436 1.436 C 41.071 43.161 40.428 43.803 39.635 43.803 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(35,204,183); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 35.186 35.933 H 17.334 c -0.793 0 -1.436 -0.643 -1.436 -1.436 c 0 -0.793 0.643 -1.436 1.436 -1.436 h 17.852 c 0.793 0 1.436 0.643 1.436 1.436 C 36.622 35.29 35.98 35.933 35.186 35.933 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(35,204,183); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 11.58 35.933 H 6.662 c -0.793 0 -1.436 -0.643 -1.436 -1.436 c 0 -0.793 0.643 -1.436 1.436 -1.436 h 4.918 c 0.793 0 1.436 0.643 1.436 1.436 C 13.016 35.29 12.373 35.933 11.58 35.933 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(35,204,183); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 35.937 51.673 h -24.1 c -0.793 0 -1.436 -0.643 -1.436 -1.436 s 0.643 -1.436 1.436 -1.436 h 24.1 c 0.793 0 1.436 0.643 1.436 1.436 S 36.73 51.673 35.937 51.673 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(35,204,183); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
		
											<path d="M 83.779 66.218 H 42.192 c -3.43 0 -6.221 -2.79 -6.221 -6.22 c 0 -0.793 0.643 -1.436 1.436 -1.436 c 0.793 0 1.436 0.643 1.436 1.436 c 0 1.846 1.502 3.347 3.348 3.347 h 41.588 c 1.847 0 3.348 -1.502 3.348 -3.347 V 32.396 c 0 -1.846 -1.502 -3.348 -3.348 -3.348 H 42.192 c -1.846 0 -3.348 1.502 -3.348 3.348 c 0 0.793 -0.643 1.436 -1.436 1.436 c -0.793 0 -1.436 -0.643 -1.436 -1.436 c 0 -3.43 2.791 -6.221 6.221 -6.221 h 41.588 c 3.43 0 6.221 2.791 6.221 6.221 v 27.603 C 90 63.428 87.209 66.218 83.779 66.218 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 62.986 52.513 c -0.348 0 -0.697 -0.126 -0.971 -0.378 L 43.235 34.907 c -0.584 -0.536 -0.624 -1.445 -0.087 -2.029 c 0.537 -0.583 1.445 -0.623 2.029 -0.087 l 17.809 16.338 L 80.795 32.79 c 0.585 -0.535 1.493 -0.496 2.029 0.087 c 0.536 0.584 0.496 1.493 -0.088 2.029 l -18.78 17.228 C 63.682 52.387 63.334 52.513 62.986 52.513 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 44.206 59.982 c -0.388 0 -0.776 -0.156 -1.059 -0.466 c -0.536 -0.584 -0.497 -1.492 0.087 -2.029 l 13.461 -12.349 c 0.585 -0.535 1.492 -0.496 2.029 0.087 c 0.536 0.585 0.496 1.493 -0.088 2.029 l -13.46 12.349 C 44.901 59.857 44.553 59.982 44.206 59.982 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 81.765 59.982 c -0.347 0 -0.695 -0.125 -0.971 -0.378 l -13.46 -12.349 c -0.584 -0.536 -0.624 -1.445 -0.088 -2.029 c 0.537 -0.584 1.445 -0.623 2.029 -0.087 l 13.46 12.349 c 0.584 0.537 0.624 1.445 0.088 2.029 C 82.541 59.826 82.153 59.982 81.765 59.982 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 43.465 47.633 H 5.266 c -0.793 0 -1.436 -0.643 -1.436 -1.436 c 0 -0.793 0.643 -1.436 1.436 -1.436 h 38.199 c 0.793 0 1.436 0.643 1.436 1.436 C 44.901 46.99 44.258 47.633 43.465 47.633 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 39.016 39.763 H 21.164 c -0.793 0 -1.436 -0.643 -1.436 -1.436 c 0 -0.793 0.643 -1.436 1.436 -1.436 h 17.852 c 0.793 0 1.436 0.643 1.436 1.436 C 40.452 39.12 39.809 39.763 39.016 39.763 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 15.41 39.763 h -4.918 c -0.793 0 -1.436 -0.643 -1.436 -1.436 c 0 -0.793 0.643 -1.436 1.436 -1.436 h 4.918 c 0.793 0 1.436 0.643 1.436 1.436 C 16.846 39.12 16.203 39.763 15.41 39.763 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 39.767 55.503 h -24.1 c -0.793 0 -1.436 -0.643 -1.436 -1.436 c 0 -0.793 0.643 -1.436 1.436 -1.436 h 24.1 c 0.793 0 1.436 0.643 1.436 1.436 C 41.203 54.86 40.56 55.503 39.767 55.503 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
										</g>
									</svg>
								</div>
							</div>

							<form method="POST" use:enhance={submitMessage} class="flex-shrink-0 w-full max-w-md">
								<div class="form-control mt-2">
									<label class="label">
										<span class="label-text">What is your name?</span>
									</label>
									<input name="name" type="text" placeholder="Name"disabled={loading || !showMessageForm} bind:value={messageName} class="input input-bordered" />
								</div>
								<div class="form-control mt-2">
									<label class="label">
										<span class="label-text">What is your email?</span>
									</label>
									<input name="email" type="email" placeholder="Email"disabled={loading || !showMessageForm} bind:value={messageEmail} class="input input-bordered" />
								</div>
								<div class="form-control mt-2">
									<label class="label">
										<span class="label-text">Phone (optional)</span>
									</label>
									<input name="phone" type="phone" placeholder="Phone"disabled={loading || !showMessageForm} bind:value={messagePhone} class="input input-bordered" />
								</div>
								<div class="form-control mt-2">
									<label class="label">
										<span class="label-text">Your Message:</span>
									</label>
									<textarea name="message" disabled={loading || !showMessageForm} bind:value={messageMessage} class="textarea textarea-bordered leading-4" placeholder="Message" required></textarea>
								</div>
								<div class="form-control mt-8">
									<button type="submit" disabled={loading || !showMessageForm} class="btn btn-primary text-lg gap-2">
										Send
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
									</button>
								</div>
							</form>

						</div>
					</div>
				</div>

			{:else}
				<div class="my-24 flex justify-center">
					<p class="max-w-xl border border-base-300 rounded-md p-8 shadow-md bg-base-200">
						<strong>Hi {messageName},</strong>
						<br>
						<br>

						Thank you for reaching out through my portfolio form. I appreciate your message and will make it a priority to respond to you promptly. You can expect to hear back from me soon at the email address you provided.
						<br>

						<br>
						Best regards,
						<br>

						<strong>Robert Burns</strong>
					</p>
				</div>
			{/if}
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

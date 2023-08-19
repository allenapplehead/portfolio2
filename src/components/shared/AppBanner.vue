<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10" id="banner">
		<!-- Banner left contents -->
		<div class="w-full md:w-2/3 text-left mx-10 p-10">
			<h2 class="
				font-general-light
				text-2xl
				md:text-2xl
				xl:text-3xl
				text-center
				sm:text-left
				text-ternary-dark
				dark:text-primary-light
				mb-4
				tracking-wider
				">
				Hi, I'm
			</h2>
			<h1 class="
				font-general-semibold
				text-6xl
				md:text-6xl
				xl:text-7xl
				text-center
				sm:text-left
				text-ternary-dark
				dark:text-primary-light
				mb-4
				tracking-wider
				">
				Allen Tao
			</h1>
			<p class="
				font-general-medium
				mt-2
				text-lg
				sm:text-xl
				xl:text-2xl
				text-center
				sm:text-left
				leading-normal
				text-gray-400
				tracking-wider
				">
				<b>I like to make things that move</b>
			</p>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-2/3 text-right float-right">
			<img v-if="theme === 'light'" src="@/assets/images/allen.jpg" alt="Developer" />
			<img v-else src="@/assets/images/allen.jpg" alt="Developer" />
		</div>
	</section>

	<!-- Bio -->
	<section class="
		flex flex-col
		sm:justify-between
		items-center
		sm:flex-row
		mt-12
		sm:mt-10
		" id="bio">
		<div class="w-full mx-10 p-10">
			<h2 class="
				font-general-semibold
				text-4xl
				md:text-4xl
				xl:text-5xl
				text-center
				sm:text-left
				text-ternary-dark
				dark:text-primary-light
				mb-4
				tracking-wider
			">
				Bio
			</h2>
			<p class="
				font-general-medium
				mt-2
				text-lg
				sm:text-xl
				xl:text-2xl
				text-left
				sm:text-left
				leading-none
				text-gray-400
				tracking-wider">
				Currently, I am a Summer Research Student at the <a
					class="text-blue-600 font-general-semibold no-underline hover:underline"
					href="http://asrl.utias.utoronto.ca/" target="_blank">Autonomous Space Robotics Laboratory</a> with
				Prof. Tim Barfoot, investigating LiDAR based indoor localization.
			</p>
			<p class="
				font-general-medium
				mt-2
				text-lg
				sm:text-xl
				xl:text-2xl
				text-left
				sm:text-left
				leading-none
				text-gray-400
				tracking-wider">
				Previously, I had the pleasure of working as an undergraduate researcher at the <a
					class="text-blue-600 font-general-semibold no-underline hover:underline"
					href="https://www.dynsyslab.org/vision-news/" target="_blank">Learning Systems and Robotics Lab</a>
				under Prof. Angela Schoellig. I investigated control barrier functions and the impacts of code
				reproducibility from robotics, control, and learning perspectives.
			</p>
			<p class="
				font-general-medium
				mt-2
				text-lg
				sm:text-xl
				xl:text-2xl
				text-left
				sm:text-left
				leading-none
				text-gray-400
				tracking-wider">
				In my spare time, I love to build. I have always been big into design teams, from leading my VEX Robotics
				team 2381C to international distinctions at the World Championships, to building an autonomous hexacopter as
				Software Lead on the University of Toronto Aerospace Team's Unmanned Aerial System Division.
			</p>
		</div>
	</section>

	<!-- Education -->
	<section class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-12
      sm:mt-10
    " id="education">
		<div class="w-full mx-10 p-10">
			<h2 class="
            font-general-semibold
            text-4xl
            md:text-4xl
            xl:text-5xl
            text-center
            sm:text-left
            text-ternary-dark
            dark:text-primary-light
            mb-4
            tracking-wider
          ">
				Education
			</h2>

			<div class="flex flex-row
                    ">

				<div class="w-1/3">
					<img v-if="theme === 'light'" src="@/assets/images/UofT-Crest-Square.png" alt="University of Toronto Crest" />
					<img v-else src="@/assets/images/UofT-Crest-Square-Light.png" alt="University of Toronto Crest" />
				</div>

				<div class="w-2/3 ml-4">
					<p class="
                font-general-medium
                mt-2
                text-lg
                sm:text-xl
                xl:text-2xl
                text-left
                sm:text-left
                leading-none
                text-gray-400
                tracking-wider
              ">
						<b class="font-general-semibold">University of Toronto</b> <span class="font-general-light">(cGPA:
							3.98/4.0)</span><br><br>
						BASc. in <a href="https://engsci.utoronto.ca/program/what-is-engsci/" target="_blank"
							class="font-general-semibold text-blue-600 no-underline hover:underline">Engineering Science</a>
						| 2021-2026 <br>
						<b>Robotics </b> Major, <b>Artificial Intelligence</b> Minor <br>
						<b>Relevant Courses</b>: <span class="font-general-medium">Deep Learning, Mobile Robotics,
							Algorithms and Data Structures (Python, C), Digital and Computer Systems, Statistics</span>
					</p>
				</div>

			</div>

			<!-- <p
          class="
            font-general-light
            mt-4
            text-gray-400
            tracking-wider
          "
        >
          My academic journey combines the fascinating fields of robotics and AI, positioning me at the frontier of technological advancement.
        </p> -->
		</div>
	</section>
</template>

<style scoped></style>

<script>
export default {
	props: ['project'],
};
</script>

<template>
	<router-link :to="`/projects/${project.id}`"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project">
		<div>
			<img :src="project.img" :alt="project.title" class="rounded-t-md border-none" />
		</div>
		<div class="text-center px-4 py-6">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
				{{ project.title }}
			</p>
			<p class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light mb-2"><b>Summary</b>:
				{{ project.blurb }}
			</p>
			<span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"><b>Category</b>:
				{{ project.category }}</span>
		</div>
	</router-link>
</template>

<style lang="scss" scoped></style>

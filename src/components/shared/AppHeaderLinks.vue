<script>
export default {
    props: ['showModal', 'isOpen'],
    methods: {
        scrollToSection(event) {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // If the anchor exists on the current page, scroll to it
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                history.pushState(null, null, targetId);
            } else {
                // If not, redirect to the homepage (or the page containing the anchors) and append the anchor to the URL
                window.location.href = '/' + targetId;
            }
        }
    }
};
</script>



<template>
    <!-- Header links -->
    <div
        :class="isOpen ? 'block' : 'hidden'"
        class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
    >
        <a
            href="#bio"
            @click="scrollToSection"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-6 mb-2 sm:py-2"
            aria-label="Bio"
        >Bio</a>
        <a
            href="#education"
            @click="scrollToSection"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-6 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Education"
        >Education</a>
        <a
            href="#publication"
            @click="scrollToSection"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-6 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Publication"
        >Publication</a>
        <a
            href="#projects"
            @click="scrollToSection"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-6 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Projects"
        >Projects</a>
        <a
            href="#contact"
            @click="scrollToSection"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-6 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Contact"
        >Contact</a>
    </div>
</template>


<style lang="scss" scoped></style>

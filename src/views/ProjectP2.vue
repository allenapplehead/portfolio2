<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';

export default {
    name: 'Projects',
    components: {
        ProjectHeader,
        ProjectGallery,
        ProjectInfo,
    },
    data: () => {
        return {
            singleProjectHeader: {
                singleProjectTitle: 'Touch Guitar',
                singleProjectDate: 'Apr 18, 2022',
                singleProjectTag: 'Coursework',
            },
            projectImages: [
                {
                    id: 1,
                    title: 'Touch Guitar',
                    img: require('@/assets/images/touchguitar.jpg'),
                },
                {
                    id: 2,
                    title: 'Showcase Poster',
                    img: require('@/assets/images/praxis21.png'),
                },
                {
                    id: 3,
                    title: 'Playing Guitar Through Touchscreen',
                    img: require('@/assets/images/praxis22.png'),
                },
            ],
            projectInfo: {
                objectivesHeading: 'Objective',
                objectivesDetails:
                    "Summative Design Project for our 1st Year Engineering Science Design Capstone ESC102. We were tasked with designing a device that would help guitarists suffering from arthritis retain their capability to play the guitar. We chose to design a touch guitar that enables the user to play the guitar with minimal force while retaining the 'feel' and authenticity of playing guitar.",
                technologies: [
                    {
                        title: 'Tools & Technologies',
                        techs: [
                            "Arduino",
                            "MIT App Inventor",
                            "Circuits (Servos, Bluetooth)",
                            "Autodesk Inventor Professional",
                            "Woodworking",
                        ],
                    },
                ],
                projectDetailsHeading: 'Challenge',
                projectDetails: [
                    {
                        id: 1,
                        details:
                            "Arthritis is characterized by limited grip strength and range of motion in the fingers and hands. Over 83% of acoustic guitarists report musculoskeletal issues over their lifetime.",
                    },
                    {
                        id: 2,
                        details:
                            "The Touch Guitar is an attachment that allows guitarists to play the guitar without the strain of pushing down on strings. Motors translate the notes played on the virtual touchscreen strings onto the guitar neck."
                    },
                    {
                        id: 3,
                        details:
                            "I developed the app which displays 6 guitar strings on your mobile phone, along with vibration feedback. I also developed all the Arduino circuit and code that takes the string presses transmitted over Bluetooth and commands servo motors to depress the corresponding strings. Finally, I helped build the wooden housing of our prototype, and performed detailed research into 3D printing alternatives."
                    },
                    // {
                    //     id: 3,
                    //     details:
                    //         "Servo Motors: covers all chord combinations, allows for single note control, pushes rods down onto strings",
                    // },
                    // {
                    //     id: 4,
                    //     details:
                    //         "Touchscreen Interface: eliminates need to fret physical strings, near zero activation force, tactile strings to retain feeling",
                    // },
                    // {
                    //     id: 5,
                    //     details:
                    //         "Adjustable Mount: pegs allow touchscreen angle to be customized, ranges from 0 to 90 degrees",
                    // },
                    // {
                    //     id: 6,
                    //     details:
                    //         "Housing / Attachment Body: removable attachment that clamps on to neck, eliminates damage to guitar",
                    // },
                ],
                socialSharingsHeading: 'Media',
                socialSharings: [
                    {
                        id: 1,
                        name: 'GitHub',
                        icon: 'github',
                        url: 'https://github.com/allenapplehead/Praxis2Showcase',
                    },
                    {
                        id: 2,
                        name: 'Youtube',
                        icon: 'youtube',
                        url: 'https://youtu.be/X0F2iBCeoXg',
                    },
                    // {
                    // 	id: 3,
                    // 	name: 'Facebook',
                    // 	icon: 'facebook',
                    // 	url: 'https://facebook.com/',
                    // },
                    // {
                    // 	id: 4,
                    // 	name: 'LinkedIn',
                    // 	icon: 'linkedin',
                    // 	url: 'https://linkedin.com/',
                    // },
                    // {
                    // 	id: 5,
                    // 	name: 'Youtube',
                    // 	icon: 'youtube',
                    // 	url: 'https://www.youtube.com/c/StomanStudio',
                    // },
                ],
            },
            relatedProject: {
                relatedProjectsHeading: 'Related Projects',
                relatedProjects: [
                    {
                        id: 1,
                        title: 'Mobile UI',
                        img: require('@/assets/images/mobile-project-1.jpg'),
                    },
                    {
                        id: 2,
                        title: 'Web Application',
                        img: require('@/assets/images/web-project-1.jpg'),
                    },
                    {
                        id: 3,
                        title: 'UI Design',
                        img: require('@/assets/images/ui-project-2.jpg'),
                    },
                    {
                        id: 4,
                        title: 'Kabul Mobile App UI',
                        img: require('@/assets/images/mobile-project-2.jpg'),
                    },
                ],
            },
        };
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
    methods: {},
};
</script>

<template>
    <div class="container mx-auto mt-10 sm:mt-20">
        <!-- Project header -->
        <ProjectHeader :singleProjectHeader="singleProjectHeader" />

        <!-- Project gallery -->
        <ProjectGallery :projectImages="projectImages" />

        <!-- Project information -->
        <ProjectInfo :projectInfo="projectInfo" />

    </div>
</template>

<style scoped></style>

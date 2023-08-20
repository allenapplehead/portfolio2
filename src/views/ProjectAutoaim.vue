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
                singleProjectTitle: 'Autoaim Crossbow',
                singleProjectDate: 'Aug 31, 2021',
                singleProjectTag: 'Personal Project',
            },
            projectImages: [
                {
                    id: 1,
                    title: 'Crossbow',
                    img: require('@/assets/images/autoaim.jpg'),
                },
                {
                    id: 2,
                    title: 'Incoming Projectile',
                    img: require('@/assets/images/autoaim1.png'),
                },
                {
                    id: 3,
                    title: 'Live Object Detections',
                    img: require('@/assets/images/autoaim2.png'),
                },
            ],
            projectInfo: {
                objectivesHeading: 'Objective',
                objectivesDetails:
                    "This project is an autoaiming autoloading crossbow, with a mounted webcam trained on a fast neural net to detect toy soldiers, aim, and shoot them fully automatically. Shooting accuracy is near perfect at 60cm, and can detect 3 different types of toy soldiers.",
                technologies: [
                    {
                        title: 'Tools & Technologies',
                        techs: [
                            "Tensorflow",
                            "Python",
                            "OpenCV",
                            "PID Control",
                            "Multi Threading",
                            "Lego"
                        ],
                    },
                ],
                projectDetailsHeading: 'Challenge',
                projectDetails: [
                    // {
                    //     id: 1,
                    //     details:
                    //         "This project is an autoaiming autoloading crossbow, with a mounted webcam trained on a fast neural net to detect toy soldiers, aim, and shoot them fully automatically. Shooting accuracy is near perfect at 60cm, and can detect 3 different types of toy soldiers.",
                    // },
                    {
                        id: 1,
                        details:
                            "I trained a SSD MobileNet V2 FPNLite 320x320 object detection model from the TensorFlow Detection Model Zoo to detect green toy soldiers of 3 different types: GreenMachineGunner, GreenMultiGunner, and GreenRadioman. I chose this single shot detector mobilenet due to its high speed as the webcam tracks the targets (toy soldiers) in real time on a live webcam feed. This model is then fed into OpenCV, which then allows bounding boxes to be drawn around the targets (toy soldiers) live on the camera feed, and informing their exact coordinates, tracking multiple targets at once. As this process is computationally expensive, I am running all code on my computer, and instructing the EV3 Mindstorms brick to execute commands using Christoph Gaukel's ev3 direct commands library ev3_dc in python. Multithreading and modified PID control was used to move the pan (turntable) and tilt (tilter) motors to move in a more efficient manner.",
                    },
                    {
                        id: 2,
                        details:
                        "The crossbow was built using LEGO on the EV3 Mindstorms platform. The principle by which the shooting mechanism works was inspired by ats1995's autoloading lego crossbow, while its implementation, along with the rest of the build are original. Shoots consistently out to about 30 inches, and can shoot about 2 projectiles per second. Clip size can be as large as you like, as the next round is loaded in by gravity. 2 large motors control the crossbow's pan and tilt, which allows it to be aimed by the webcam.",
                    },
                ],
                socialSharingsHeading: 'Media',
                socialSharings: [
                    {
                        id: 1,
                        name: 'GitHub',
                        icon: 'github',
                        url: 'https://github.com/allenapplehead/AutoaimCrossbow',
                    },
                    {
                        id: 2,
                        name: 'Youtube',
                        icon: 'youtube',
                        url: 'https://youtu.be/BRknQZD5vVs',
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

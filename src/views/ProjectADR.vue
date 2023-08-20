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
                singleProjectTitle: 'Autonomous Drone Racing',
                singleProjectDate: 'In Progress',
                singleProjectTag: 'Design Team',
            },
            projectImages: [
                {
                    id: 1,
                    title: 'Homepage',
                    img: require('@/assets/images/adr.png'),
                },
                {
                    id: 2,
                    title: 'Board',
                    img: require('@/assets/images/ekf.png'),
                },
                {
                    id: 3,
                    title: 'Move Highlighting',
                    img: require('@/assets/images/gates.jpg'),
                },
            ],
            projectInfo: {
                objectivesHeading: 'Objective',
                objectivesDetails:
                    "Develop a fully autonomous autopilot that races a quadcopter around a series of gates, using only an onboard camera, IMU, and companion computer.",
                technologies: [
                    {
                        title: 'Tools & Technologies',
                        techs: [
                            "ROS",
                            "C++",
                            "NVIDIA Jetson",
                            "Computer Vision",
                            "OpenCV",
                            "Gazebo",
                            "Extended Kalman Filter",
                            "Visual Inertial Odometry",
                        ],
                    },
                ],
                projectDetailsHeading: 'Challenge',
                projectDetails: [
                    {
                        id: 1,
                        details:
                            "The Autonomous Drone Racing team is working on developing a fully autonomous racing drone, both in simulation (Gazebo, FlightGoggles), and on real hardware. Most notably, this involves developing the localization, control, and planning components.",
                    },
                    {
                        id: 2,
                        details:
                            "I am currently leading development on the localization component, using visual inertial odometry as well as the extended Kalman filter to better localize the drone at high speed.",
                    },
                ],
                // socialSharingsHeading: 'Media',
                // socialSharings: [
                //     {
                //         id: 1,
                //         name: "Youtube",
                //         icon: "youtube",
                //         url: "https://www.youtube.com/channel/UCHB6SeUT8tRKPbdgq9At18w",
                //     },
                //     {
                //         id: 2,
                //         name: "GitHub",
                //         icon: "github",
                //         url: "https://github.com/allenapplehead/2381C-Vex-VRC-Change-Up-2020-2021/tree/master",
                //     },
                //     {
                //         id: 3,
                //         name: "Worlds",
                //         icon: "award",
                //         url: "https://roboticseducation.org/2021-live-remote-vex-robotics-world-championship-winners/",
                //     },
                //     {
                //         id: 4,
                //         name: "Worlds",
                //         icon: "award",
                //         url: "https://www.robotevents.com/teams/VRC/2381C",
                //     },
                // ],
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

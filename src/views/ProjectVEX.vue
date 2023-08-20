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
                singleProjectTitle: 'VEX Robotics',
                singleProjectDate: 'May 22, 2021',
                singleProjectTag: 'Design Team',
            },
            projectImages: [
                {
                    id: 1,
                    title: 'Homepage',
                    img: require('@/assets/images/vexcu.png'),
                },
                {
                    id: 2,
                    title: 'Board',
                    img: require('@/assets/images/vexttv.png'),
                },
                {
                    id: 3,
                    title: 'Move Highlighting',
                    img: require('@/assets/images/vextp.png'),
                },
            ],
            projectInfo: {
                objectivesHeading: 'Objective',
                objectivesDetails:
                    "I had the pleasure of competing in 3 seasons, with the latter 2 as Team Captain, Lead Builder, Programmer, and Driver of my team, 2381C. Some highlights include leading my team to finish top 10 internationally at the 2021 VEX Robotics Live Remote Skills World Championship, becoming the most awarded team in Canada that year, and me deriving our custom autonomous motion algorithm that catalyzed said results, which was so robust we ran it in place of our driver!",
                technologies: [
                    {
                        title: 'Tools & Technologies',
                        techs: [
                            "C++",
                            "Autodesk Inventor Professional",
                            "Basic Mechanical Design",
                            "Basic Control Theory",
                        ],
                    },
                ],
                projectDetailsHeading: 'Challenge',
                projectDetails: [
                    {
                        id: 1,
                        details:
                            "Change Up (2020-2021 season): the game is to score and descore balls into 9 goals onto the field strategically to maximize points by completing certain patterns. This year, as Team Captain, Lead Builder, Programmer, and Driver, I CADded and built the entirety of our 4 iterations of our competition robot, and devised our custom autonomous motion algorithm codebase, leading us to place top 10 in the world championship, and win 15 competition awards, making us the most awarded team in Canada that year.",
                    },
                    {
                        id: 2,
                        details:
                            "Tower Takeover (2019-2020 season): the game is the collect and stack cubes in your zones as high as possible, as well as strategically placing cubes in towers to multiply the points scored by stacked cubes of the corresponding colour. I served as Team Captain, Lead Builder, Programmer, and Driver, designing and building our competition robot in whole, ending the season with 3x Tournament Champions, 2x Excellence Awards, and 1x Innovate Award.",
                    },
                    {
                        id: 3,
                        details:
                            "Turning Point (2018-2019 season): the game's challenge is threefold: robots strive to shoot flags with balls, flip and score caps on the floor and on poles, and finally climb an elevated platform. This was my first year joining VEX Robotics, where I served as Builder and Driver for the team.",
                    },
                ],
                socialSharingsHeading: 'Media',
                socialSharings: [
                    {
                        id: 1,
                        name: "Youtube",
                        icon: "youtube",
                        url: "https://www.youtube.com/channel/UCHB6SeUT8tRKPbdgq9At18w",
                    },
                    {
                        id: 2,
                        name: "GitHub",
                        icon: "github",
                        url: "https://github.com/allenapplehead/2381C-Vex-VRC-Change-Up-2020-2021/tree/master",
                    },
                    {
                        id: 3,
                        name: "Worlds",
                        icon: "award",
                        url: "https://roboticseducation.org/2021-live-remote-vex-robotics-world-championship-winners/",
                    },
                    {
                        id: 4,
                        name: "Worlds",
                        icon: "award",
                        url: "https://www.robotevents.com/teams/VRC/2381C",
                    },
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

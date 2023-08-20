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
                singleProjectTitle: '3D Chess',
                singleProjectDate: 'Jun 18, 2021',
                singleProjectTag: 'Coursework',
            },
            projectImages: [
                {
                    id: 1,
                    title: 'Homepage',
                    img: require('@/assets/images/3DChess1.png'),
                },
                {
                    id: 2,
                    title: 'Board',
                    img: require('@/assets/images/3DChess.png'),
                },
                {
                    id: 3,
                    title: 'Move Highlighting',
                    img: require('@/assets/images/3DChess2.png'),
                },
            ],
            projectInfo: {
                objectivesHeading: 'Objective',
                objectivesDetails:
                    "A full implementation of the Raumschach 3D chess variant, with a fully functional AI. The game is fully playable in your browser.",
                technologies: [
                    {
                        title: 'Tools & Technologies',
                        techs: [
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "WebAssembly",
                            "C++",
                        ],
                    },
                ],
                projectDetailsHeading: 'Challenge',
                projectDetails: [
                    {
                        id: 1,
                        details:
                            "This project is a complete interactive game of the Raumschach variant of 3D Chess and was made as our ICS4U summative. Users may choose to play against an AI with 3 difficulty levels or with another player locally.",
                    },
                    {
                        id: 2,
                        details:
                            "Features: 4 different game modes (PvP + 3 AI difficulties), UI to select pieces for pawn promotions, Highlights to show legal moves and the opponent's last move, Game history, Panel showing piece captures of each side, Game evaluation bar",
                    },
                    {
                        id: 3,
                        details:
                        "The move logic, checkmate+stalemate detection and AI were all programmed in C++ and were compiled to WebAssembly using Emscripten so that it could be run on the browser. The visual interface of the game was made using vanilla JavaScript, HTML and CSS.",
                    },
                    {
                        id: 4,
                        details:
                            "Our chess AI was made from scratch and uses the minimax algorithm with alpha-beta pruning for optimization.",
                    },
                ],
                socialSharingsHeading: 'Media',
                socialSharings: [
                    {
                        id: 1,
                        name: 'GitHub',
                        icon: 'github',
                        url: 'https://github.com/edweenie123/3D-Chess',
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

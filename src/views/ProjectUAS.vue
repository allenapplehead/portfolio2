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
				singleProjectTitle: 'UTAT UAS: Cyclone',
				singleProjectDate: 'May 08, 2023',
				singleProjectTag: 'Design Team',
			},
			projectImages: [
				{
					id: 1,
					title: 'Cyclone in Flight',
					img: require('@/assets/images/cyclone2.jpeg'),
				},
				{
					id: 2,
					title: 'Cyclone near Landing Pad',
					img: require('@/assets/images/cyclone.jpeg'),
				},
				{
					id: 3,
					title: 'CV Simulation Tests',
					img: require('@/assets/images/uas2.jpg'),
				},
			],
			projectInfo: {
				objectivesHeading: 'Objective',
				objectivesDetails:
					"This year's challenge was to design an Unmanned Aerial Mobility System (UAMS) capable of ferrying passengers between waypoints in an optimal manner. At each waypoint, the drone is also challenged with autonomous in-flight obstacle avoidance and precision landing onto landing pads.",
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'ROS',
							'MAVLink',
							'PX4 Firmware',
							'Gazebo Simulation',
							'Computer Vision',
							'Graph Theory',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							"As Software Lead, I led the design and integration of our software stack in MAVROS on top of PX4 firmware capable of autonomous waypoint following, landing, and obstacle avoidance, validated in simulation and real world flight.",
					},
					{
						id: 2,
						details:
							"Moreover, I designed the graph optimization algorithm to optimally select routes based on profit and distance."
					},
					{
						id: 3,
						details:
						"In addition to coordinating tasks, timelines, and the design vision of 10 undergraduates, I managed all team software on GitLab and led workshops to onboard memebers with the requisite development skills.",
					},
					{
						id: 4,
						details:
							"In the end, we placed 2nd overall for our Design Paper, and 3rd for our team presentation.",
					},
				],
				// socialSharingsHeading: 'Share This',
				socialSharings: [
					// {
					// 	id: 1,
					// 	name: 'Twitter',
					// 	icon: 'twitter',
					// 	url: 'https://twitter.com/realstoman',
					// },
					// {
					// 	id: 2,
					// 	name: 'Instagram',
					// 	icon: 'instagram',
					// 	url: 'https://instagram.com/realstoman',
					// },
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

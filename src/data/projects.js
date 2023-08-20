// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 6,
		title: 'Autonomous Racing Drone',
		category: 'Design Team',
		blurb: "Making a quadrotor fly autonomously around a track, fast",
		img: require('@/assets/images/adr.png'),
	},
	{
		id: 5,
		title: 'UTAT UAS: Cyclone',
		category: 'Design Team',
		blurb: "Designing an autonomous hexacopter for the AEAC National UAS Challenge",
		img: require('@/assets/images/cyclone2.jpeg'),
	},
	{
		id: 4,
		title: 'Touch Guitar',
		category: 'Coursework',
		blurb: "Helping those with arthritis play the guitar",
		img: require('@/assets/images/touchguitar.jpg'),
	},
	{
		id: 3,
		title: 'Autoaim Crossbow',
		category: 'Personal Project',
		blurb: "Autonomously detect, aim and shoot targets",
		img: require('@/assets/images/autoaim.jpg'),
	},
	{
		id: 2,
		title: '3D Chess',
		category: 'Coursework',
		blurb: "A full implementation of the Raumschach variant of 3D Chess, play PVP or against AI",
		img: require('@/assets/images/3DChess.png'),
	},
	{
		id: 1,
		title: 'VEX Robotics Competition',
		category: 'Design Team',
		blurb: "Team Captain, Lead Builder, Programmer, Driver",
		img: require('@/assets/images/vex2.png'),
	},
];

export default projects;

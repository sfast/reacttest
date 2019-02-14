import Portal from '../../views/portal/Portal/Portal';

import { CoursesContainer } from '../../views/portal/Courses';
import { Courses } from '../../views/portal/Courses';
import { CourseDetails } from '../../views/portal/Courses'

import Env from '../../views/portal/Env/Env';

import Policies from '../../views/portal/Policies/Policies';

import Templates from '../../views/portal/Templates/Templates';

import Classes from '../../views/portal/Classes/Classes';

import Vms from '../../views/portal/Vms/Vms';

import Administartion  from '../../views/portal/Administration/Administration';

import Reports  from '../../views/portal/Reports/Reports';


export const pages = [
	{
		name: "Dashboard",
		icon: 'fa fa-th-large',
		component: Portal,
		paths: [
			{
				path:"/portal/dashboard",
				component: Portal,
			}
		]
	},
	{
		name: "Environments",
		icon: 'fa fa-sitemap',
		component: Env,
		paths: [
			{
				path: "/portal/environments",
				component: Env,
			}
		]
	},
	{
		name: "Templates",
		icon: 'fa fa-sliders',
		component: Templates,
		paths: [
			{
			path: "/portal/templates",
			 component: Templates
			}
		]
	},
	{
		name: "Policies",
		icon: 'fa fa-file-text-o',
		component: Policies,
		paths: [
			{
				path:"/portal/policies",
				component: Policies
			},
		]
	},
	{
		name: "VM Images",
		icon: 'fa fa-cogs',
		component: Vms,
		paths: [
			{
				path:"/portal/vms",
				component: Vms
			},
			
		]
	},
	{
		name: "Courses",
		icon: 'fa fa-puzzle-piece',
		component: CoursesContainer,
		paths: [
			{
				path:"/portal/courses",
				component: Courses
			},
			{
				path:"/portal/courses/:id/:tab",
				component: CourseDetails
			},		
		]
	},
	{
		name: "Classes",
		icon: 'fa fa-graduation-cap',
		component: Classes,	
		paths: [
			{
				path:"/portal/classes",
				component: Classes
			},
		]																																							
	}, 
	{
		collapse: true,
		name: "Administration",
		icon: 'fa fa-cogs',
		component: Administartion,
		paths:[
			{ 
				path: '/portal/administration',  
				component: Administartion
			}
		],
		views: [
			{
				name: "Users",
				icon: 'fa fa-th-large',
				component: Administartion,
				paths: [
					{ 
						path: '/portal/administration/users',  
						component: Administartion,
					}
				]
			},
			{
				name: "Groups",
				icon: 'fa fa-sitemap',
				component: Administartion,
				paths: [
					{ 
						path:"/portal/administration/groups",
						component: Administartion,
					}
				]
			},
			{
				name: "Coupon Codes",
				icon: 'fa fa-sliders',
				component: Administartion,
				paths: [
					{ 
						path:"/portal/administration/coupons",
						component: Administartion,
					}
				]
			},
			{
				name: "Email Templates",
				icon: 'fa fa-file-text-o',
				component: Administartion,
				paths: [
					{ 
						path: "/portal/administration/email-templates",
						component: Administartion,
					}
				]
			},
			{
				name: "Company Details",
				icon: 'fa fa-cogs',
				component: Administartion,
				paths: [
					{ 
						path:	"/portal/administration/lti",
						component: Administartion,
					}
				]
			},
			{
				name: "Company Details",
				icon: 'fa fa-cogs',
				component: Administartion,
				paths: [
					{ 
						path:"/portal/administration/company-details",
						component: Administartion,
					}
				]
			},
			{
				name: "Reports",
				icon: 'fa fa-cogs',
				component: Administartion,
				paths: [
					{ 
						path:"/portal/administration/reports",
						component: Administartion,
					}
				]
			},
		],
	},
	{
		collapse: true,
		name: "Reports",
		icon: 'fa fa-university',
		component: Reports,
		paths: [
			{
				path:'/portal/reports',
				component: Reports
			}
		],	
		views: [
			{
				name: "Users",
				component: Reports,
				paths: [
					{
						path:"/portal/reports/users",
						component: Reports
					},
				]
			},
			{
				name: "Grades",
				component: Reports,
				paths: [
					{
						path:"/portal/reports/grades",	
						component: Reports
					},
				]
			},
			{
				name: "Usage",
				component: Reports,
				paths: [
					{
						path:"/portal/reports/usage",
						component: Reports
					},
				]
			},
			{
				name: "Virtual Machines",
				component: Reports,
				paths: [
					{
						path:"/portal/reports/vms",
						component: Reports
					},
				]
			},
			{
				name: "Storage",
				component: Reports,
				paths: [
					{
						path:"/portal/reports/storage",
						component: Reports
					},
				]
			},
		],
	},

];


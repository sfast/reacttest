import MyLabs from '../../views/portal/User/MyLabs/MyLabs';
import Library from '../../views/portal/User/Library/Library';
import Archive from '../../views/portal/User/Archive/Archive';


// export const pages = [
// 	{
// 		path: "/portal/mylabs",
// 		name: "My Labs",
// 		icon: 'fa fa-flask',
// 		component: 'MyLabs',
// 	}, 
// 	{
// 		path: "/portal/library",
// 		name: "Library",
// 		icon: 'fa fa-book',
// 		component: 'Library',
// 	}, 
// 	{
// 		path: "/portal/archive",
// 		name: "Archive",
// 		icon: 'fa fa-archive',
// 		component: 'Archive',
//     }, 

// ]
export const pages = [
	{
		// path: "/portal/mylabs",
		name: "My Labs",
		icon: 'fa fa-flask',
		component: MyLabs,
		paths: [
			{
				path: "/portal/mylabs",
				component: MyLabs,
			}
		]
	},
	{
		path: "/portal/library",
		name: "Library",
		icon: 'fa fa-book',
		component: Library,
		paths: [
			{
				path: "/portal/library",
				component: Library,
			}
		]
	},
	{
		path: "/portal/archive",
		name: "Archive",
		icon: 'fa fa-archive',
		component: Archive,
		paths: [
			{
			path: "/portal/archive",
			 component: Archive
			}
		]
	},
]
import Auth from '../../../components/auth';
import RegisterContainer, { RegisterCompleted, CompleteRegistration } from '../../../components/auth/register';
import Forgot from '../../../components/auth/forgot';
import Expired from '../../../components/auth/expired';
import Mfa from '../../../components/auth/mfa';
import Login from '../../../components/auth/login';

const pages = [
    {
        path: "/auth/register",
		component: RegisterContainer,
	},
	{
        path: "/auth/register/completed",
		component: RegisterCompleted,
    },
    {
        path: "/auth/forgot",
		component: Forgot,
    },
    {
        path: "/auth/forgot/reset",
		component: Auth,
    },
    {
        path: "/auth/expired",
		component: Expired,
    },
    {
        path: "/auth/register/complete",
		component: CompleteRegistration,
    },
    {
        path: "/auth/login/mfa",
		component: Mfa,
	},
    {
        path: "/",
        component: Login,
    },
];

export default pages;
  
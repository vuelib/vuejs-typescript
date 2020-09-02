const { page } = require("./index");
export default [
    {
        name: "login",
        path: "/prihlasit-se",
        component: page("auth/login.vue"),
        props: true
    },
    {
        name: "register",
        path: "/registrovat",
        component: page("auth/register.vue"),
        props: true
    },
    {
        name: "forgotpassowrd",
        path: "/zapomenute-heslo",
        component: page("auth/password/forgotPassowrd.vue"),
        props: true
    },
    {
        name: "resetpassword",
        path: "/vytvorit-nove-heslo",
        component: page("auth/resetPassword.vue"),
        props: true
    },
    {
        props: true,
        path: "/api/password/reset",
        redirect: to => ({
            name: "resetpassword",
            props: { token: to.params.token, email: to.params.email }
        })
    },
    {
        name: "logout",
        path: "/logout",
        component: page("auth/logout.vue")
    }
];

const Auth = [
    {
        name: "login",
        path: "/prihlasit-se",
        component: () => import("../components/auth/login.vue"),
        props: true,
        meta: {
            title: "Šotola Miroslav - Přihlásit se",
            metaTags: [
                {
                    name: "description",
                    content: "Hlavní stránka"
                },
                {
                    property: "og:description",
                    content: "Hlavní stránka."
                }
            ]
        }
    },
    {
        name: "register",
        path: "/registrovat",
        component: () => import("../components/auth/register.vue"),
        props: true,
        meta: {
            title: "Šotola Miroslav - Registrovat",
            metaTags: [
                {
                    name: "description",
                    content: "Hlavní stránka"
                },
                {
                    property: "og:description",
                    content: "Hlavní stránka."
                }
            ]
        }
    },
    {
        name: "forgotpassowrd",
        path: "/zapomenute-heslo",
        component: () => import("../components/auth/forgotPassowrd.vue"),
        props: true,
        meta: {
            title: "Šotola Miroslav - Zapomenuté heslo",
            metaTags: [
                {
                    name: "description",
                    content: "Hlavní stránka"
                },
                {
                    property: "og:description",
                    content: "Hlavní stránka."
                }
            ]
        }
    },
    {
        name: "resetpassword",
        path: "/vytvorit-nove-heslo",
        component: () => import("../components/auth/resetPassword.vue"),
        props: true,
        meta: {
            title: "Šotola Miroslav - Vytvořit nové heslo",
            metaTags: [
                {
                    name: "description",
                    content: "Hlavní stránka"
                },
                {
                    property: "og:description",
                    content: "Hlavní stránka."
                }
            ]
        }
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
        component: () => import("../components/auth/Logout.vue")
    }
];

export default Auth;

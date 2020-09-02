import store from "../state";

export default async (to, from, next) => {
    if (!store.getters["loggedIn"]) {
        next({ name: "login" });
    } else {
        next();
    }
};

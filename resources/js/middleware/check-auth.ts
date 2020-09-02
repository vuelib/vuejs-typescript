import store from "../state";

export default async (to, from, next) => {
    if (store.getters["loggedIn"] && store.getters["token"]) {
        try {
            await store.dispatch("fetchUser");
        } catch (e) {}
    }

    next();
};

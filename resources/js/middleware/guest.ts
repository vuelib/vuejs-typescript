import store from "../state";

export default (to, from, next) => {
    if (store.getters["loggedIn"]) {
        next({ name: "home" });
    } else {
        next();
    }
};

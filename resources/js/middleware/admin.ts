import store from "../state";

export default (to, from, next) => {
    if (store.getters["user"].role.name !== "admin") {
        next({ name: "Home" });
    } else {
        next();
    }
};

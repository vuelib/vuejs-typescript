import store from "../state";
import { isNull } from "lodash";

export default (to, from, next) => {
    if (isNull(store.getters["user"].invoice)) {
        next({ name: "invoice" });
    } else {
        next();
    }
};

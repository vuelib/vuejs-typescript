import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import { HasError, AlertError, AlertSuccess } from "vform";

// Require in a base component context

const requireComponent = require.context(".", false, /\.vue$/);

requireComponent.keys().forEach(fileName => {
    if (fileName === "./App.vue") return;
    if (fileName === "./Footer.vue") return;
    //Get component config
    const componentConfig = requireComponent(fileName);

    //Get PascalCase name of component
    const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
    );

    //Register component globally
    Vue.component(componentName, componentConfig.default || componentConfig);
    [HasError, AlertError, AlertSuccess].forEach(Component => {
        Vue.component(Component.name, Component);
    });
});

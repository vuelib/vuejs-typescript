import axios from "axios";
// import Echo from "laravel-echo";
// window.Pusher = require("pusher-js");

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// window.Echo = new Echo({
//     broadcaster: "pusher",
//     key: "somekey",
//     encrypted: false,
//     wsHost: window.location.hostname,
//     wsPort: 6001,
//     disableStats: true
// });

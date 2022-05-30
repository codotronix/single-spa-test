import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@barick-poc/spa-app0",
  app: () => System.import("@barick-poc/spa-app0"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});

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
  activeWhen: () => true
});

registerApplication({
  name: "@barick-poc/spa-app1",
  app: () => System.import("@barick-poc/spa-app1"),
  activeWhen: location => {
    const b = location.pathname.startsWith('/app1')
    console.log('active ? = ', b)
    return b
  }
});

registerApplication({
  name: "@barick-poc/spa-app2",
  app: () => System.import("@barick-poc/spa-app2"),
  activeWhen: location => location.pathname.startsWith('/app2'),
});

start({
  urlRerouteOnly: true,
});

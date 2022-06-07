import { registerApplication, start } from "single-spa";
import { ReplaySubject, BehaviorSubject } from 'rxjs';


const messenger = new BehaviorSubject('Messenger Ready');

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
  activeWhen: () => true,
  customProps: {
    msg: 'My name is App0',
    messenger
  }
});

registerApplication({
  name: "@barick-poc/spa-app1",
  app: () => System.import("@barick-poc/spa-app1"),
  activeWhen: location => {
    const b = location.pathname.startsWith('/app1')
    console.log('active ? = ', b)
    return b
  },
  customProps: {
    msg: 'My name is App1',
    messenger
  }
});

registerApplication({
  name: "@barick-poc/spa-app2",
  app: () => System.import("@barick-poc/spa-app2"),
  activeWhen: location => location.pathname.startsWith('/app2'),
  customProps: {
    msg: 'My name is App2',
    messenger
  }
});

start({
  urlRerouteOnly: true,
});

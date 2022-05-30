import React from "react";
import ReactDOM from 'react-dom/client';
import singleSpaReact from 'single-spa-react'
import App from "./App";

const lifecycles = singleSpaReact({
    React,
    ReactDOM: ReactDOM.createRoot(domElementGetter()),
    rootComponent: App,
    domElementGetter,
    errorBoundary() {
        return <div>This renders when a catastrophic error occurs</div>;
    },
})

export const { bootstrap, mount, unmount } = lifecycles

function domElementGetter () {
    let el = document.getElementById('app2')
    if(!el) {
        el = document.createElement('div')
        el.setAttribute('id', 'app2')
        document.body.append(el)
    }
    console.log('el = ', el)
    return el
}
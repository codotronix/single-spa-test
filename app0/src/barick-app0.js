import React from "react";
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react'
import App from "./App";

// console.log('1>>', document.getElementById('root'))

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    domElementGetter,
    errorBoundary() {
        return <div>This renders when a catastrophic error occurs</div>;
    },
})

export const { bootstrap, mount, unmount } = lifecycles

function domElementGetter () {
    let el = document.getElementById('static-app0')
    // let el = document.getElementById('app0')
    // if(!el) {
    //     el = document.createElement('div')
    //     el.setAttribute('id', 'app0')
    //     document.body.append(el)
    // }
    // console.log('el = ', el)
    return el
}
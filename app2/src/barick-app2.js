import React from "react";
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react'
import App from "./App";

let customProps = null

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: () => <App customProps={customProps} />,
    domElementGetter,
    errorBoundary() {
        return <div>This renders when a catastrophic error occurs</div>;
    },
})

const {  mount, unmount } = lifecycles

export { bootstrap, mount, unmount }

function bootstrap (props) {
    console.log('from bootstrap of app2')
    console.log('props')
    console.log(props)

    if(!customProps) {
        customProps = props
    }

    return Promise.resolve()
}

function domElementGetter () {
    let el = document.getElementById('static-app2')
    // let el = document.getElementById('app2')
    // if(!el) {
    //     el = document.createElement('div')
    //     el.setAttribute('id', 'app2')
    //     document.body.append(el)
    // }
    // console.log('el = ', el)
    return el
}
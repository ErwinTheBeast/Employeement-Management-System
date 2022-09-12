import React from 'react'

const Linker = ({href}) => {

        window.history.pushState({}, "",href)
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

    return (
        <>
        </>
    )
}
export default Linker;
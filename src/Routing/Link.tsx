import React from 'react'

const Link = ({href, children}) => {

    const onButtonClick = (event) => {
        event.preventDefault();
        //pushState just changes the URL without refreshing the page
        window.history.pushState({}, "",href)
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a
         href = {href} 
         onClick = {(event)=> onButtonClick(event)}
         >
            {children}
        </a>
    )
}

export default Link;
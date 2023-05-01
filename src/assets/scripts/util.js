function goUrl(link) {
    window.open(link, '_blank')
}

function getMousePosition(event) {
    let x, y,
        doc = document.documentElement,
        body = document.body;
    if (!event) event = window.event;

    x = (doc && doc.scrollLeft || body && body.scrollLeft || 0)
        - (doc && doc.clientLeft || body && body.clientLeft || 0);
    y = (doc && doc.scrollTop || body && body.scrollTop || 0)
        - (doc && doc.clientTop || body && body.clientTop || 0);

    x += event.clientX;
    y += event.clientY;
    return {'x': x, 'y': y};
}

export {goUrl, getMousePosition}
async function postData(url = '', data = {}) {
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

function removeProperty(waitBeforeAction = 2, elementId, property) {
    const element = document.getElementById(elementId);

    setTimeout(() => {
        element.style.removeProperty(property);
    }, waitBeforeAction * 1000);
}

function addClass(waitBeforeAction = 2, elementId, className) {
    const element = document.getElementById(elementId);

    setTimeout(() => {
        element.classList.add(className);
    }, waitBeforeAction * 1000);
}

function removeClass(waitBeforeAction = 2, elementId, className) {
    const element = document.getElementById(elementId);

    setTimeout(() => {
        element.classList.remove(className);
    }, waitBeforeAction * 1000);
}

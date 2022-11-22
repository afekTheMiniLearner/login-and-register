async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
    });
    return response.json();
}

postData('/auth', userData).then((data) => {});

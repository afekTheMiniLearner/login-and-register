async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
    });
    return response.json();
}

function registerUser() {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const retypePassword = document.querySelector(
        'input[name="re-password"]'
    ).value;
    
    // change to confirm
    // validate fields example must conatain numbers 5+ digits etc

    postData('/auth', { username, password }).then((data) => {});
}

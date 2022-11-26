window.onload = () => {
    removeClass(2, 'bigTitle', 'titleInitialAnimation');
};

async function loginUser() {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    await postData('/auth/login', {
        username: username,
        password: password,
    })
        .then(() => {
            window.location.replace('/success');
            localStorage.setItem('successLoginUsername', username);
        })
        .catch((e) => {
            alert('error occured', e);
        });
}

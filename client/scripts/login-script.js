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
            localStorage.setItem('successLoginUsername', username);
        })
        .catch((e) => {
            alert('Incorrect username or password', e);
        });
}

function soundEffect(name) {
    new Audio(`../assets/${name}-sound.mp3`).play();
}

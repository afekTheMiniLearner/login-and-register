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
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            localStorage.setItem('successLoginUsername', username);
            localStorage.setItem('jwtAccessToken', data.accessToken);
            localStorage.setItem('jwtRefreshToken', data.refreshToken);
        })
        .then(() => {
            window.location.href = '/success';
        })
        .catch((e) => {
            alert('Incorrect username or password', e);
        });
}

function soundEffect(name) {
    new Audio(`../assets/sounds/${name}-sound.mp3`).play();
}

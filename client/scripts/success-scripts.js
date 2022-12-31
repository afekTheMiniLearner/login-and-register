window.onload = () => {
    const refreshToken = localStorage.getItem('jwtRefreshToken');
    //if (!refreshToken) window.location.href = '/login';

    postData('/auth/token', {
        refreshToken: refreshToken,
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            localStorage.setItem('jwtAccessToken', data.accessToken);
        })
        .catch((e) => {});

    const accessToken = localStorage.getItem('jwtAccessToken');

    if (!accessToken) window.location.href = '/login';

    getData('/auth/user-authenticated').catch(() => {
        localStorage.removeItem('jwtAccessToken');
        alert('Not authorized');
        window.location.href = '/login';
    });

    document.getElementById(
        'bigTitle'
    ).innerHTML = `Welcome ${localStorage.getItem(
        'successLoginUsername'
    )}</br> you are logged in`;

    removeClass(2, 'bigTitle', 'titleInitialAnimation');
};

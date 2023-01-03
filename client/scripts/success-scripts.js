window.onload = () => {
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

async function logoutUser() {
    getData('/auth/logout')
        .catch(() => {})
        .finally(() => {
            window.location.href = '/login';
            localStorage.removeItem('jwtAccessToken');
        });
}

window.onload = () => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) window.location.href = '/login';

    getData('/auth/user-authenticated')
        .catch(() => {
            localStorage.removeItem('jwt');
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

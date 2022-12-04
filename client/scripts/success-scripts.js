window.onload = () => {
    document.getElementById(
        'bigTitle'
    ).innerHTML = `Welcome ${localStorage.getItem(
        'successLoginUsername'
    )}</br> you are logged in`;

    removeClass(2, 'bigTitle', 'titleInitialAnimation');
};

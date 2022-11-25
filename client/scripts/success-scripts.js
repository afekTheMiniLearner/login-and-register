window.onload = () => {
    document.getElementById(
        'bigTitle'
    ).innerHTML = `Welcome ${localStorage.getItem(
        'successLoginUsername'
    )} you are logged in`;
};

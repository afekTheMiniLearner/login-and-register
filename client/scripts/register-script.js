async function registerUser() {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const retypePassword = document.querySelector(
        'input[name="re-password"]'
    ).value;

    if (password.length < 5) {
        return alert('Password must contain at least 5 characters');
    }
    if (password !== retypePassword) return alert('Password fields not match');

    await postData('/auth/register', {
        username: username,
        password: password,
    }).then(() => {
        window.location.replace('/login');
    });
}

const media = document.getElementById('media');
let oneTime = true;

if (oneTime) {
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 3000);
    oneTime = false;
}
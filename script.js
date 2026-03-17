function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0,0);
}

function checkPassword() {
    const input = document.getElementById('pwInput').value;
    if (input === "sophie") {
        showPage('page4');
        document.getElementById('pwInput').value = ""; 
    } else {
        alert("Fout wachtwoord! Probeer het opnieuw.");
    }
}

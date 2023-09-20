window.onload = function () {
    const errorMsg = document.getElementById('errorMsg');
    const refreshBtn = document.getElementById('refreshBtn');
    errorMsg.style.opacity = "1";
    errorMsg.style.transform = "translateY(0)";
    refreshBtn.style.opacity = "1";
    refreshBtn.style.transform = "translateY(0)";
};

function refreshPage() {
    location.reload();
}

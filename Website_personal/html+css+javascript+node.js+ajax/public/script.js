document.addEventListener('DOMContentLoaded', function() {
    const refreshBtn = document.getElementById('refreshBtn');

    refreshBtn.addEventListener('click', function() {
        location.reload();
    });
});

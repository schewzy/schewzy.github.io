// Header-Search Bar Expand
document.querySelector('.search-btn').addEventListener('click', function () {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    
    searchContainer.classList.toggle('expanded');
    
    if (searchContainer.classList.contains('expanded')) {
        searchInput.placeholder = "Search..."; 
        searchInput.focus(); 
    } else {
        searchInput.placeholder = "";  
        searchInput.blur();  
    }
});
// Header-Dropdown Bahasa
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
        this.querySelector('.dropdown-menu').classList.add('show');
    });

    dropdown.addEventListener('mouseleave', function () {
        this.querySelector('.dropdown-menu').classList.remove('show');
    });
});

// Semua-Carousel Automatisasi
var carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'), {
    interval: 200,
    ride: 'carousel'
});

// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal if user clicks outside the modal content
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

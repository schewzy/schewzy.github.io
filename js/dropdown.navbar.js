document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item.dropnav');
    let dropdownSaatIni = null;

    navItems.forEach(item => {
        const dropdown = item.querySelector('.dropnav-content');

        if (dropdown) {
            item.addEventListener('mouseover', function () {
                if (dropdownSaatIni && dropdownSaatIni !== dropdown) {
                    dropdownSaatIni.style.opacity = '0';
                    dropdownSaatIni.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        dropdownSaatIni.style.display = 'none';
                    }, 300);
                }
                dropdown.style.display = 'flex';
                setTimeout(() => {
                    dropdown.style.opacity = '1';
                    dropdown.style.transform = 'translateY(0)';
                }, 10);
                dropdownSaatIni = dropdown;
            });

            item.addEventListener('mouseout', function (e) {
                if (!dropdown.contains(e.relatedTarget)) {
                    dropdown.style.opacity = '0';
                    dropdown.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        dropdown.style.display = 'none';
                    }, 300);
                    dropdownSaatIni = null;
                }
            });

            dropdown.addEventListener('mouseover', function () {
                dropdown.style.opacity = '1';
                dropdown.style.transform = 'translateY(0)';
                dropdownSaatIni = dropdown;
            });

            dropdown.addEventListener('mouseout', function (e) {
                if (!item.contains(e.relatedTarget)) {
                    dropdown.style.opacity = '0';
                    dropdown.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        dropdown.style.display = 'none';
                    }, 300);
                    dropdownSaatIni = null;
                }
            });
        } else {
            item.addEventListener('mouseover', function () {
                if (dropdownSaatIni) {
                    dropdownSaatIni.style.opacity = '0';
                    dropdownSaatIni.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        dropdownSaatIni.style.display = 'none';
                    }, 300);
                    dropdownSaatIni = null;
                }
            });
        }
    });

    // Scroll Menutup Dropdown Navbar
    window.addEventListener('scroll', function () {
        if (dropdownSaatIni) {
            dropdownSaatIni.style.opacity = '0';
            dropdownSaatIni.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                if (dropdownSaatIni && !dropdownSaatIni.closest('.nav-item.dropnav').contains(document.querySelector(':hover'))) {
                    dropdownSaatIni.style.display = 'none';
                }
            }, 300);
            dropdownSaatIni = null;
        }
    });
});
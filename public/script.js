// Feature Section
function applyDropDown(navItem) {
    const parentDiv = document.getElementById(navItem);
    const arrowDown = parentDiv.querySelector('#arrow-down');
    const arrowUp = parentDiv.querySelector('#arrow-up');
    const dropDownDiv = parentDiv.querySelector('#drop-down');

            dropDownDiv.classList.toggle('hidden');
            arrowDown.classList.toggle('hidden');
            arrowUp.classList.toggle('hidden');
}


// Mobule Nav
const bars = document.getElementById("bars");
const cross = document.getElementById("cross");
const mobileNav = document.getElementById('mobile-nav');
const navParent = document.getElementById("nav-parent");
const navChild = document.getElementById("nav-child");

// Remove mobile nav
cross.addEventListener("click" ,()=>{
    mobileNav.classList.add
    ('hidden');
    navChild.classList.add('hidden');
    navParent.appendChild(navChild);

})

// Add mobile nav
bars.addEventListener("click" , () =>{
    mobileNav.classList.remove
    ('hidden');
    navChild.classList.remove('hidden');
    mobileNav.appendChild(navChild);
})



// get html file with svg included in...
function loadComponent() {
    return fetch('../components/people-counter.html')
       .then(data => data.text())
       .then(html => document.getElementById('peoplecounter-tutorial').innerHTML = html
    );
 }
 
 async function main() {
    await loadComponent();
    const script = document.createElement('script')
    script.src = '../js/peopleCounter.js'
    document.head.append(script)

    let specifiedElement = document.getElementById('menu-btn');
    //I'm using "click" but it works with any event
    document.addEventListener('click', function(event) {
    let isClickInside = specifiedElement.contains(event.target);
        if (!isClickInside) {
            document.getElementById("menu-btn").checked = false;
        }
    });
 
    // sticky navbar
    window.onscroll = function() {myFunction()};
    let navbar = document.getElementById("nav");
    let sticky = navbar.offsetTop;
 
    function myFunction() {
       if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
       } else {
          navbar.classList.remove("sticky");
       }
    }
    
 }
 main();
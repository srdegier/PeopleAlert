// get html file with svg included in...
function loadComponent() {
    console.log('getting svg...');
    return fetch('../components/people-alert.html')
       .then(data => data.text())
       .then(html => document.getElementById('peoplecounter-tutorial').innerHTML = html
    );
 }
 
 async function main() {
    await loadComponent();
    const script = document.createElement('script')
    script.src = '../js/peopleAlert.js'
    document.head.append(script)
    console.log('DOM ready!');


    // nav 
    // Check
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
          console.log('sticky');
       } else {
          navbar.classList.remove("sticky");
       }
    }
    
 }
 main();
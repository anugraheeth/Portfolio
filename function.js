


var tablinks = document.getElementsByClassName("links")
var tabcontents = document.getElementsByClassName("tabcontent")


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active")
    }
    event.currentTarget.classList.add("active")
    document.getElementById(tabname).classList.add("active")

}
//menufunctions


var sidemenu = document.getElementById("menu")

    function openmenu(){
        sidemenu.style.right="0";
    }

    function closemenu(){
        sidemenu.style.right ="-200px";
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwJDK_k55SnhKM9WXkvPFZ-3PzfpC1mfb_ldVzqKZ5Ajo65w_jECfRDFUp9TXM4rlzUmQ/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Mesaage Sent Successfully!"
                setTimeout(function(){
                    msg.innerHTML=""
                },3000)
                form.reset()
        })
            .catch(error => {
                 msg.innerHTML = "Error" + error.message
                 setTimeout(function(){
                    msg.innerHTML=""
                },3000)
                form.reset()
            })
            
        })


        //typewriting functions

        const texts = [
            { text: "UI/UX Designer", class: "type1" },
            { text: "FullStack Developer", class: "type2" },
            { text: "Graphic Designer", class: "type3" }
        ];
        const typewriterElement = document.querySelector('.typewriter-text');
        let textIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < texts[textIndex].text.length) {
                typewriterElement.innerHTML += texts[textIndex].text.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typewriterElement.innerHTML = texts[textIndex].text.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            }
        }

        function startTyping() {
            typewriterElement.className = `typewriter-text ${texts[textIndex].class}`;
            type();
        }

        startTyping();
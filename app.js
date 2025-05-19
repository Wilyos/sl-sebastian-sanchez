const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector('.hover-sign');

//side bar elements//
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeSideBar = document.querySelector('.close-icon');



const videoList = [video1, video2, video3];

videoList.forEach((video) => {
  video.addEventListener('mouseover', () => {
    video.play();
    hoverSign.classList.add("active");
  });

  video.addEventListener('mouseout', () => {
    video.pause();
    video.currentTime = 0;
    hoverSign.classList.remove("active");
  });
} 
)

//sidebar//

menu.addEventListener('click', () => { 
  sideBar.classList.add('open-sidebar');
  sideBar.classList.remove('close-sidebar');
});

closeSideBar.addEventListener('click', () => {
  sideBar.classList.remove('open-sidebar');
  sideBar.classList.add('close-sidebar');
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const message = document.getElementById('formMessage');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = form.action;
        message.innerHTML = "Enviando...";
        try {
            const response = await fetch(action, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                message.innerHTML = "<span style='color: #7ABA49;'>¡Mensaje enviado correctamente!</span>";
                form.reset();
            } else {
                message.innerHTML = "<span style='color: #ff4d4d;'>Ocurrió un error. Intenta de nuevo.</span>";
            }
        } catch (error) {
            message.innerHTML = "<span style='color: #ff4d4d;'>Ocurrió un error. Intenta de nuevo.</span>";
        }
    });
});
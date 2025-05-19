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
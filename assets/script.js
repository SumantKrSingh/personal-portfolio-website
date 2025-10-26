const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const sidebar = document.querySelector(".sidebar");
const menubtn = document.querySelector(".menu-icon");
const closebtn = document.querySelector(".close-icon");


const videoList = [video1, video2];

videoList.forEach((video) => {
    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.pause();
    });
});


// Hamburg Menu open
menubtn.addEventListener("click", () => {
    sidebar.classList.remove("close-sidebar")
    sidebar.classList.add("open-sidebar")
})
// Hamburg Menu close
closebtn.addEventListener("click", () => {
    sidebar.classList.remove("open-sidebar")
    sidebar.classList.add("close-sidebar")
})


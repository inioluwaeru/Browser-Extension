let burnaBoy = [
    "https://www.vanguardngr.com/wp-content/uploads/2019/12/burna-boy.jpg",
    "https://guardian.ng/wp-content/uploads/2021/01/Burna-Boy-1062x598.jpg",
    "https://guardian.ng/wp-content/uploads/2021/01/Burna-Boy-1062x598.jpg",
    "https://notjustok.com/wp-content/uploads/2019/07/Burna-boy-african-gaint.jpg",
    "https://thisday-846548948316-wp-data.storage.googleapis.com/wp-media/c0b9e7ca-burna-boy.jpg",
    "https://i0.wp.com/i.pinimg.com/550x/63/d4/79/63d47974f5c79d8b1483fc8873ba8673.jpg?w=790&ssl=1",
    "https://tribuneonlineng.com/wp-content/uploads/2021/11/Burna-Boy-new.jpg",
    "https://media.pitchfork.com/photos/5f9c3a58e6fc05c7f21c7a80/1:1/w_960,h_960,c_limit/Burna%20boy%202.png",
    "https://media.pitchfork.com/photos/5e585320230d040009b1f05c/4:3/w_2000,h_1500,c_limit/Burna%20Boy-GettyImages-1179901116.jpg"
];


const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++){
    const randomImg = Math.floor(Math.random() * burnaBoy.length)
    imgs[i].src = burnaBoy[randomImg];
}
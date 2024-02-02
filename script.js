//My resume Download btn
document.querySelector('#cv').addEventListener('click', ()=>{
    var link = document.createElement('a');
    link.href = './SHAVEEN_resume.pdf'; 
    link.download = 'SHAVEEN_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

//Contact info
document.getElementById('contact-info').addEventListener('click', function() {
    var contactSection = document.getElementById('contact');
    if (contactSection.style.display === 'none' || contactSection.style.display === '') {
        contactSection.style.display = 'block';
        contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        contactSection.style.display = 'none';
    }
});

//LinkedIn Profile url btn
document.getElementById('linkdin').addEventListener('click', ()=>{
    window.location.href = "https://www.linkedin.com/in/shaveen-kumar08";
});

//Github Profile url btn
document.getElementById('github').addEventListener('click', ()=>{
    window.location.href = "https://github.com/shaveen08";
});

//Rock Paper Scissor Game btn
document.getElementById('rps-game-link').addEventListener('click', ()=>{
    window.location.href = "https://github.com/shaveen08/RockPaperScissor-Game";
});
document.getElementById('rps-game-demo').addEventListener('click', ()=>{
    window.location.href = "https://shaveen08.github.io/RockPaperScissor-Game/";
});

//E-commerce website btn
document.getElementById('ecommerce-link').addEventListener('click', ()=>{
    window.location.href = "https://github.com/shaveen08/E-commerce-website";
});
document.getElementById('ecommerce-demo').addEventListener('click', ()=>{
    window.location.href = "https://shaveen08.github.io/E-commerce-website/";
});

//Apple Store Clone
document.getElementById('apple-store-link').addEventListener('click', ()=>{
    window.location.href = "https://github.com/shaveen08/Netflix-clone";
});
document.getElementById('apple-store-demo').addEventListener('click', ()=>{
    window.location.href = "https://shaveen08.github.io/Apple_homepage_clone/";
});

//Basic project btn
document.getElementById('basic-proj-link').addEventListener('click', ()=>{
    window.location.href = "https://github.com/shaveen08/Basic-Projects";
});

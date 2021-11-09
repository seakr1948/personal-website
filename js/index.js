projectCards = document.querySelectorAll(".project-card");
console.log(projectCards);


const appearOptions = {
    threshold: 1
};

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("project-card-animation");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

projectCards.forEach(card => {
    appearOnScroll.observe(card);
})
const images = document.querySelectorAll("[data-src]");

const options = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    console.log(src)
    if (!src) {
        return;
    } 
    img.src = src;
    img.classList.toggle("img-loading")
    img.classList.toggle("img-loaded")
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        } else {
            return;
        }
    })
    }, options
)

images.forEach(image => {
    imgObserver.observe(image)
})
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');

const gradients = ['linear-gradient(to right top,#00F260,#0575E6',
    'linear-gradient(to right top,#74ebd5,#ACB6E5)',
    'linear-gradient(to right top,#667db6,#0082c8,#0082c8,#667db6)'
];

const options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        // console.log(entry);
        let className = entry.target.className;
        console.log(className);
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        console.log(gradientIndex);
        const coordinatesOfActiveAnchor = activeAnchor.getBoundingClientRect(); // Width and height of active anchor div

        const directions = {
            width: coordinatesOfActiveAnchor.width,
            height: coordinatesOfActiveAnchor.height,
            top: coordinatesOfActiveAnchor.top,
            left: coordinatesOfActiveAnchor.left
        }
        if (entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    })
}
sections.forEach(section => {
    observer.observe(section);
})
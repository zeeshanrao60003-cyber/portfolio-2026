const canvas = document.getElementById("spaceCanvas");
const hero = document.querySelector(".hero");

if (canvas && hero) {

    const ctx = canvas.getContext("2d");

    function resize() {

        canvas.width = window.innerWidth;
        canvas.height = hero.offsetHeight;

    }

    resize();

    window.addEventListener("resize", resize);

    const stars = [];

    for (let i = 0; i < 180; i++) {

        stars.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2,
            dx: (Math.random() - .5) * 0.2,
            dy: (Math.random() - .5) * 0.2,
            o: Math.random()

        });

    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(s => {

            s.x += s.dx;
            s.y += s.dy;

            if (s.x < 0) s.x = canvas.width;
            if (s.x > canvas.width) s.x = 0;

            if (s.y < 0) s.y = canvas.height;
            if (s.y > canvas.height) s.y = 0;

            ctx.beginPath();

            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);

            ctx.fillStyle = "rgba(255,255,255," + s.o + ")";

            ctx.fill();

        });

        requestAnimationFrame(animate);

    }

    animate();

}
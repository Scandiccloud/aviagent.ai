// Ensure DOM is loaded before execution
document.addEventListener("DOMContentLoaded", function () {
    // Set Current Year in Footer
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Smooth Scroll for Join Button
    document.querySelectorAll('a[href="#tally-form"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const formSection = document.getElementById('tally-form');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // AI Network Animation (Fixed & Optimized)
    const canvas = document.getElementById("ai-network");
    if (canvas) {
        const ctx = canvas.getContext("2d");

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas(); // Initialize size

        const nodes = [];
        const numNodes = 40; // Increased for better effect

        for (let i = 0; i < numNodes; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3, // Slower movement
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 3 + 1.5
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(42, 92, 170, ${1 - distance / 150})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            for (let i = 0; i < nodes.length; i++) {
                ctx.fillStyle = `rgba(42, 92, 170, ${Math.random() * 0.6 + 0.4})`;
                ctx.beginPath();
                ctx.arc(nodes[i].x, nodes[i].y, nodes[i].size, 0, Math.PI * 2);
                ctx.fill();

                nodes[i].x += nodes[i].vx;
                nodes[i].y += nodes[i].vy;

                // Keep nodes within bounds (Bounce Effect)
                if (nodes[i].x <= 0 || nodes[i].x >= canvas.width) nodes[i].vx *= -1;
                if (nodes[i].y <= 0 || nodes[i].y >= canvas.height) nodes[i].vy *= -1;
            }

            requestAnimationFrame(draw);
        }

        draw();
    }

    // Contact Form Submission Handling
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message.length < 10) {
                document.getElementById("response-message").innerText = "Please fill in all fields correctly.";
                return;
            }

            fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("response-message").innerText = data.message;
            })
            .catch(error => {
                document.getElementById("response-message").innerText = "Error sending message.";
            });
        });
    }
});
        var canvas = document.getElementById('snowCanvas');
        var ctx = canvas.getContext('2d');
        var w = canvas.width = window.innerWidth;
        var h = canvas.height = window.innerHeight;
        var particles = [];

        function Particle(x, y) {
            this.x = x;
            this.y = y;
            this.vx = Math.random() * 2 - 1;
            this.vy = Math.random() * 2 - 1;
            this.r = Math.random() * 5 + 5; // Increase the radius to make the snowflakes larger
        }

        Particle.prototype.update = function() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > w) {
                this.vx *= -1;
            }

            if (this.y < 0 || this.y > h) {
                this.vy *= -1;
            }
        };

        Particle.prototype.render = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 192, 203, 0.5)'; // Change the color to pink
            ctx.fill();
        };

        function createParticles() {
            for (var i = 0; i < 100; i++) {
                particles.push(new Particle(Math.random() * w, Math.random() * h));
            }
        }

        function update() {
            ctx.clearRect(0, 0, w, h);

            for (var i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].render();
            }
        }

        createParticles();
        setInterval(update, 16);

'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ParticleBackgroundProps {
  color: string;
  children: ReactNode;
}

const ParticleBackground = ({ color, children }: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: Particle[] = [];
    const fireworks: FireworkParticle[] = [];
    
    // 设置canvas尺寸
    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // 创建粒子
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        // 随机颜色
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 50) + 50; // 50-100%
        const lightness = Math.floor(Math.random() * 30) + 60; // 60-90%
        const alpha = Math.random() * 0.5 + 0.2; // 0.2-0.7
        this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > (canvas?.width || 0)) this.x = 0;
        else if (this.x < 0) this.x = (canvas?.width || 0);
        
        if (this.y > (canvas?.height || 0)) this.y = 0;
        else if (this.y < 0) this.y = (canvas?.height || 0);
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      
      checkCollision(particles: Particle[]) {
        for (let i = 0; i < particles.length; i++) {
          if (this === particles[i]) continue;
          
          const dx = this.x - particles[i].x;
          const dy = this.y - particles[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < this.size + particles[i].size) {
            // 碰撞发生，创建烟花效果
            createFirework(this.x, this.y, this.color);
            
            // 改变方向
            this.speedX = -this.speedX;
            this.speedY = -this.speedY;
            particles[i].speedX = -particles[i].speedX;
            particles[i].speedY = -particles[i].speedY;
            
            return true;
          }
        }
        return false;
      }
    }
    
    // 烟花粒子
    class FireworkParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      maxLife: number;
      
      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 0.5;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;
        this.color = color;
        this.life = 0;
        this.maxLife = Math.random() * 30 + 20;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedX *= 0.95;
        this.speedY *= 0.95;
        this.life++;
        this.size -= 0.05;
        if (this.size < 0) this.size = 0;
      }
      
      draw() {
        if (!ctx) return;
        ctx.globalAlpha = 1 - (this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      
      isDead() {
        return this.life >= this.maxLife || this.size <= 0;
      }
    }
    
    // 创建烟花效果
    const createFirework = (x: number, y: number, color: string) => {
      const particleCount = Math.floor(Math.random() * 10) + 10;
      for (let i = 0; i < particleCount; i++) {
        fireworks.push(new FireworkParticle(x, y, color));
      }
    };
    
    // 初始化粒子
    const initParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };
    
    // 动画循环
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 更新和绘制粒子
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].checkCollision(particles);
        particles[i].draw();
      }
      
      // 更新和绘制烟花粒子
      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].draw();
        
        if (fireworks[i].isDead()) {
          fireworks.splice(i, 1);
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    initParticles();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className={`relative w-full h-48 ${color} flex items-center justify-center`}>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParticleBackground; 
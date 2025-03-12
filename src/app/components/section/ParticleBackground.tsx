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
      mass: number;
      
      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.mass = this.size;
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
            // 物理碰撞效果
            this.resolveCollision(this, particles[i]);
            return true;
          }
        }
        return false;
      }
      
      // 物理碰撞解决方案
      resolveCollision(particle: Particle, otherParticle: Particle) {
        const xVelocityDiff = particle.speedX - otherParticle.speedX;
        const yVelocityDiff = particle.speedY - otherParticle.speedY;
        
        const xDist = otherParticle.x - particle.x;
        const yDist = otherParticle.y - particle.y;
        
        // 防止重叠粒子卡住
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
          // 计算碰撞角度
          const angle = -Math.atan2(yDist, xDist);
          
          // 粒子质量
          const m1 = particle.mass;
          const m2 = otherParticle.mass;
          
          // 碰撞前速度
          const u1 = this.rotate(particle.speedX, particle.speedY, angle);
          const u2 = this.rotate(otherParticle.speedX, otherParticle.speedY, angle);
          
          // 碰撞后速度 (一维弹性碰撞公式)
          const v1 = { 
            x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), 
            y: u1.y 
          };
          const v2 = { 
            x: u2.x * (m2 - m1) / (m1 + m2) + u1.x * 2 * m1 / (m1 + m2), 
            y: u2.y 
          };
          
          // 旋转回原来的坐标系
          const vFinal1 = this.rotate(v1.x, v1.y, -angle);
          const vFinal2 = this.rotate(v2.x, v2.y, -angle);
          
          // 更新速度
          particle.speedX = vFinal1.x;
          particle.speedY = vFinal1.y;
          otherParticle.speedX = vFinal2.x;
          otherParticle.speedY = vFinal2.y;
        }
      }
      
      // 辅助函数：旋转坐标系
      rotate(x: number, y: number, angle: number) {
        return {
          x: x * Math.cos(angle) - y * Math.sin(angle),
          y: x * Math.sin(angle) + y * Math.cos(angle)
        };
      }
    }
    
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
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

interface WebGLExperienceProps {
  onReady?: () => void;
}

let triggerToTheMoonAnimation: (() => void) | null = null;

export const launchToTheMoon = () => {
  if (triggerToTheMoonAnimation) {
    triggerToTheMoonAnimation();
  }
};

const degenPhrases = [
  "gm ser 🌅",
  "wen moon? 🚀",
  "WAGMI fam 💎",
  "diamond hands only 💎🙌",
  "LFG!!! 🔥",
  "This is the way 🫡",
  "not financial advice ser 👀",
  "bullish af 📈",
  "ngmi if you sell 📉",
  "dev do something 👨‍💻",
  "ser wen airdrop? 🪂",
  "probably nothing... 👀",
  "few understand 🧠",
  "HODL strong 💪",
  "to the moon! 🌙",
  "lambo wen? 🏎️",
  "trust the process 🙏",
  "this is early 🎯",
  "still early ser ⏰",
  "we're so back 📈"
];

export default function WebGLExperience({ onReady }: WebGLExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [speechBubble, setSpeechBubble] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    creature: THREE.Group;
    isDragging: boolean;
    previousMousePosition: { x: number; y: number };
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const creature = new THREE.Group();

    const bodyGeometry = new THREE.SphereGeometry(1, 32, 32);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0x4a90e2,
      shininess: 100,
      emissive: 0x1a4d7a,
      emissiveIntensity: 0.3
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    creature.add(body);

    const eyeGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.3, 0.2, 0.9);
    creature.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.3, 0.2, 0.9);
    creature.add(rightEye);

    const pupilGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

    const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    leftPupil.position.set(-0.3, 0.2, 1.0);
    creature.add(leftPupil);

    const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    rightPupil.position.set(0.3, 0.2, 1.0);
    creature.add(rightPupil);

    const rocketBodyGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.8, 16);
    const rocketMaterial = new THREE.MeshPhongMaterial({
      color: 0x6b5ce7,
      metalness: 0.6,
      shininess: 100
    });

    const rocketConeGeometry = new THREE.ConeGeometry(0.15, 0.3, 16);
    const rocketConeMaterial = new THREE.MeshPhongMaterial({
      color: 0x8b7ce7,
      metalness: 0.8
    });

    const flameGeometry = new THREE.ConeGeometry(0.12, 0.4, 8);
    const flameMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6b35,
      transparent: true,
      opacity: 0.9
    });

    const leftRocket = new THREE.Group();
    const leftRocketBody = new THREE.Mesh(rocketBodyGeometry, rocketMaterial);
    const leftRocketCone = new THREE.Mesh(rocketConeGeometry, rocketConeMaterial);
    leftRocketCone.position.y = 0.55;
    const leftFlame = new THREE.Mesh(flameGeometry, flameMaterial);
    leftFlame.position.y = -0.6;
    leftFlame.rotation.x = Math.PI;
    leftRocket.add(leftRocketBody);
    leftRocket.add(leftRocketCone);
    leftRocket.add(leftFlame);
    leftRocket.position.set(-0.8, -0.6, -0.3);
    leftRocket.rotation.z = 0.2;
    creature.add(leftRocket);

    const rightRocket = new THREE.Group();
    const rightRocketBody = new THREE.Mesh(rocketBodyGeometry, rocketMaterial);
    const rightRocketCone = new THREE.Mesh(rocketConeGeometry, rocketConeMaterial);
    rightRocketCone.position.y = 0.55;
    const rightFlame = new THREE.Mesh(flameGeometry, flameMaterial);
    rightFlame.position.y = -0.6;
    rightFlame.rotation.x = Math.PI;
    rightRocket.add(rightRocketBody);
    rightRocket.add(rightRocketCone);
    rightRocket.add(rightFlame);
    rightRocket.position.set(0.8, -0.6, -0.3);
    rightRocket.rotation.z = -0.2;
    creature.add(rightRocket);

    scene.add(creature);

    const particles = new THREE.Group();
    const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: 0x4a90e2,
      transparent: true,
      opacity: 0.6
    });

    for (let i = 0; i < 100; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      particles.add(particle);
    }
    scene.add(particles);

    const asteroids: THREE.Mesh[] = [];
    const asteroidGeometry = new THREE.IcosahedronGeometry(0.3, 0);
    const asteroidMaterial = new THREE.MeshPhongMaterial({
      color: 0x8b7355,
      flatShading: true
    });

    for (let i = 0; i < 15; i++) {
      const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
      asteroid.position.set(
        (Math.random() - 0.5) * 25,
        Math.random() * 15 + 5,
        (Math.random() - 0.5) * 15
      );
      asteroid.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      const scale = Math.random() * 0.5 + 0.5;
      asteroid.scale.set(scale, scale, scale);
      asteroids.push(asteroid);
      scene.add(asteroid);
    }

    sceneRef.current = {
      scene,
      camera,
      renderer,
      creature,
      isDragging: false,
      previousMousePosition: { x: 0, y: 0 }
    };

    let blinkTimer = 0;
    let isBlinking = false;
    let toTheMoonPhase = 0;
    let isToTheMoon = false;
    let scrollTargetX = 0;
    let scrollTargetY = 0;
    let cardTargetX = 0;
    let cardTargetY = 0;
    let isHoveringCard = false;

    triggerToTheMoonAnimation = () => {
      if (!isToTheMoon) {
        isToTheMoon = true;
        toTheMoonPhase = 0;
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);

      if (sceneRef.current) {
        creature.rotation.y += 0.003;

        leftRocket.rotation.z = Math.sin(Date.now() * 0.003) * 0.1 + 0.2;
        rightRocket.rotation.z = Math.sin(Date.now() * 0.003) * -0.1 - 0.2;

        if (isToTheMoon) {
          toTheMoonPhase++;

          if (toTheMoonPhase < 60) {
            const shakeIntensity = 0.05;
            creature.position.x += (Math.random() - 0.5) * shakeIntensity;
            creature.position.y += (Math.random() - 0.5) * shakeIntensity;

            const smokeScale = 1 + (toTheMoonPhase / 60) * 2;
            leftFlame.scale.y = smokeScale;
            rightFlame.scale.y = smokeScale;
            leftFlame.material.opacity = 0.3;
            rightFlame.material.opacity = 0.3;
          } else if (toTheMoonPhase < 180) {
            const launchProgress = (toTheMoonPhase - 60) / 120;
            creature.position.z -= 0.3;
            creature.position.y += 0.1;
            leftFlame.scale.y = 3 + Math.sin(toTheMoonPhase * 0.2) * 0.5;
            rightFlame.scale.y = 3 + Math.sin(toTheMoonPhase * 0.2) * 0.5;
            leftFlame.material.opacity = 1;
            rightFlame.material.opacity = 1;

            if (toTheMoonPhase === 179) {
              setTimeout(() => {
                window.location.href = '/launch';
              }, 200);
            }
          }
        } else {
          const targetX = isHoveringCard ? cardTargetX : scrollTargetX;
          const targetY = isHoveringCard ? cardTargetY : scrollTargetY;
          creature.position.x += (targetX - creature.position.x) * 0.1;
          creature.position.y += (targetY - creature.position.y) * 0.1;
        }

        asteroids.forEach((asteroid, i) => {
          asteroid.position.y -= 0.02;
          asteroid.rotation.x += 0.01;
          asteroid.rotation.y += 0.005;

          if (asteroid.position.y < -10) {
            asteroid.position.y = 15;
            asteroid.position.x = (Math.random() - 0.5) * 25;
            asteroid.position.z = (Math.random() - 0.5) * 15;
          }
        });

        particles.rotation.y += 0.001;
        particles.children.forEach((particle: THREE.Object3D, i: number) => {
          particle.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
        });

        blinkTimer++;
        if (blinkTimer > 180 && !isBlinking) {
          isBlinking = true;
          leftEye.scale.y = 0.1;
          rightEye.scale.y = 0.1;
          setTimeout(() => {
            leftEye.scale.y = 1;
            rightEye.scale.y = 1;
            isBlinking = false;
            blinkTimer = 0;
          }, 150);
        }

        renderer.render(scene, camera);
      }
    };

    const handleScroll = () => {
      const scrollProgress = Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1);

      const startX = 0;
      const startY = 0;
      const endX = 4;
      const endY = -3;

      scrollTargetX = startX + (endX - startX) * scrollProgress;
      scrollTargetY = startY + (endY - startY) * scrollProgress;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const updateCardPosition = (card: Element) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const aspectRatio = window.innerWidth / window.innerHeight;
      const x = ((centerX / window.innerWidth) * 2 - 1) * aspectRatio * 5;
      const y = (-(centerY / window.innerHeight) * 2 + 1) * 5;

      cardTargetX = x;
      cardTargetY = y;
    };

    const handleCardHover = () => {
      const cards = document.querySelectorAll('[data-tech-card]');

      cards.forEach((card, index) => {
        const handleMouseEnter = () => {
          updateCardPosition(card);
          isHoveringCard = true;
          setHoveredCard(index);
        };

        const handleMouseLeave = () => {
          isHoveringCard = false;
          setHoveredCard(null);
        };

        const handleMouseMove = () => {
          if (isHoveringCard) {
            updateCardPosition(card);
          }
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
        card.addEventListener('mousemove', handleMouseMove);
      });
    };

    setTimeout(handleCardHover, 1000);

    window.addEventListener('scroll', () => {
      if (isHoveringCard) {
        const cards = document.querySelectorAll('[data-tech-card]');
        cards.forEach(card => {
          if (card.matches(':hover')) {
            updateCardPosition(card);
          }
        });
      }
    });

    const showRandomPhrase = () => {
      const randomPhrase = degenPhrases[Math.floor(Math.random() * degenPhrases.length)];
      setSpeechBubble(randomPhrase);
      setTimeout(() => {
        setSpeechBubble(null);
      }, 3000);
    };

    const phraseInterval = setInterval(() => {
      if (!isToTheMoon && Math.random() > 0.3) {
        showRandomPhrase();
      }
    }, 8000);

    setTimeout(() => showRandomPhrase(), 2000);

    animate();

    const handleResize = () => {
      if (sceneRef.current) {
        sceneRef.current.camera.aspect = window.innerWidth / window.innerHeight;
        sceneRef.current.camera.updateProjectionMatrix();
        sceneRef.current.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (sceneRef.current) {
        sceneRef.current.isDragging = true;
        sceneRef.current.previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (sceneRef.current && sceneRef.current.isDragging) {
        const deltaX = e.clientX - sceneRef.current.previousMousePosition.x;
        const deltaY = e.clientY - sceneRef.current.previousMousePosition.y;

        sceneRef.current.creature.rotation.y += deltaX * 0.01;
        sceneRef.current.creature.rotation.x += deltaY * 0.01;

        sceneRef.current.previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      if (sceneRef.current) {
        sceneRef.current.isDragging = false;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (sceneRef.current && e.touches.length === 1) {
        sceneRef.current.isDragging = true;
        sceneRef.current.previousMousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (sceneRef.current && sceneRef.current.isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - sceneRef.current.previousMousePosition.x;
        const deltaY = e.touches[0].clientY - sceneRef.current.previousMousePosition.y;

        sceneRef.current.creature.rotation.y += deltaX * 0.01;
        sceneRef.current.creature.rotation.x += deltaY * 0.01;

        sceneRef.current.previousMousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    const handleTouchEnd = () => {
      if (sceneRef.current) {
        sceneRef.current.isDragging = false;
      }
    };

    window.addEventListener('resize', handleResize);
    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    setIsLoaded(true);
    onReady?.();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      clearInterval(phraseInterval);
      triggerToTheMoonAnimation = null;

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onReady]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f]">
          <div className="text-blue-400 text-2xl animate-pulse">Loading Experience...</div>
        </div>
      )}
      <AnimatePresence>
        {speechBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
            style={{ marginTop: '-120px', marginLeft: '100px' }}
          >
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-2xl shadow-2xl border-2 border-blue-500 font-bold text-lg">
                {speechBubble}
              </div>
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white/95 rotate-45 border-r-2 border-b-2 border-blue-500"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

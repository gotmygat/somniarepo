import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface WebGLExperienceProps {
  onReady?: () => void;
}

export default function WebGLExperience({ onReady }: WebGLExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
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

    const animate = () => {
      requestAnimationFrame(animate);

      if (sceneRef.current) {
        creature.rotation.y += 0.003;

        leftWing.rotation.z = Math.sin(Date.now() * 0.003) * 0.3 + Math.PI / 6;
        rightWing.rotation.z = Math.sin(Date.now() * 0.003) * -0.3 - Math.PI / 6;

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
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);

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
    </div>
  );
}

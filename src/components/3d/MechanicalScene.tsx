import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { APP_IMAGES } from '../../assets/images';

interface MechanicalSceneProps {
  onLoaded?: () => void;
  className?: string;
}

export const MechanicalScene: React.FC<MechanicalSceneProps> = ({ onLoaded, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      return;
    }

    // Check mobile screen
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // WebGL support check
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasError(true);
        return;
      }
    } catch {
      setHasError(true);
      return;
    }

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x030712, 0.045);

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        42,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 7.5);

      // Renderer setup with transmission support
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      container.appendChild(renderer.domElement);

      // Lighting: 3-point + Aurora ambient
      const ambientLight = new THREE.AmbientLight(0x0f172a, 1.8);
      scene.add(ambientLight);

      // Aurora Key Light (Emerald / Cyan)
      const keyLight = new THREE.DirectionalLight(0x10b981, 3.2);
      keyLight.position.set(5, 6, 4);
      scene.add(keyLight);

      // Aurora Rim Light (Teal / Arctic Ice)
      const rimLight = new THREE.DirectionalLight(0x06b6d4, 3.8);
      rimLight.position.set(-6, -4, -3);
      scene.add(rimLight);

      // Warm Accent Light (representing mechanical heat / natural gas flame)
      const warmAccentLight = new THREE.PointLight(0xf59e0b, 2.5, 12);
      warmAccentLight.position.set(0, -1, 2);
      scene.add(warmAccentLight);

      // Root Assembly Group
      const assemblyGroup = new THREE.Group();
      scene.add(assemblyGroup);

      // Materials
      // 1. Frosted Transmission Glass Material for Outer Casing
      const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x93c5fd,
        metalness: 0.1,
        roughness: 0.15,
        transmission: 0.88,
        thickness: 1.2,
        transparent: true,
        opacity: 0.85,
        reflectivity: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        ior: 1.45,
      });

      // 2. High-Grade Brushed Titanium / Steel for Mechanical Flanges
      const steelMaterial = new THREE.MeshStandardMaterial({
        color: 0x334155,
        metalness: 0.85,
        roughness: 0.25,
      });

      // 3. Polished Copper / Brass for Specialized Alaskan Piping Valves
      const copperMaterial = new THREE.MeshStandardMaterial({
        color: 0xd97706,
        metalness: 0.9,
        roughness: 0.3,
      });

      // 4. Glowing Aurora Core Material
      const coreEmissiveMaterial = new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        emissive: 0x10b981,
        emissiveIntensity: 1.8,
        roughness: 0.2,
      });

      // Geometry 1: Outer Glass Manifold Chamber
      const outerTorusGeo = new THREE.TorusGeometry(2.0, 0.42, 32, 64);
      const outerTorus = new THREE.Mesh(outerTorusGeo, glassMaterial);
      assemblyGroup.add(outerTorus);

      // Geometry 2: Titanium Flange Collar Rings (4 cross-junction collars)
      const collarGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.22, 32);
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        const collar = new THREE.Mesh(collarGeo, steelMaterial);
        collar.position.set(Math.cos(angle) * 2.0, Math.sin(angle) * 2.0, 0);
        collar.rotation.z = angle + Math.PI / 2;
        assemblyGroup.add(collar);

        // Copper hex nut fittings on each collar
        const boltGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.3, 6);
        const bolt = new THREE.Mesh(boltGeo, copperMaterial);
        bolt.position.set(Math.cos(angle) * 2.0, Math.sin(angle) * 2.0, 0.15);
        assemblyGroup.add(bolt);
      }

      // Geometry 3: Internal Flow Turbine Rotor
      const rotorGroup = new THREE.Group();
      assemblyGroup.add(rotorGroup);

      const centralHubGeo = new THREE.SphereGeometry(0.7, 32, 32);
      const centralHub = new THREE.Mesh(centralHubGeo, coreEmissiveMaterial);
      rotorGroup.add(centralHub);

      // Turbine rotor blades
      const bladeGeo = new THREE.BoxGeometry(0.12, 1.35, 0.04);
      for (let i = 0; i < 6; i++) {
        const bladeAngle = (i * Math.PI) / 3;
        const blade = new THREE.Mesh(bladeGeo, copperMaterial);
        blade.position.set(Math.cos(bladeAngle) * 0.75, Math.sin(bladeAngle) * 0.75, 0);
        blade.rotation.z = bladeAngle;
        blade.rotation.x = 0.4;
        rotorGroup.add(blade);
      }

      // Geometry 4: Concentric Precision Measurement Ring
      const precisionRingGeo = new THREE.RingGeometry(1.2, 1.25, 64);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.65,
      });
      const precisionRing = new THREE.Mesh(precisionRingGeo, ringMaterial);
      assemblyGroup.add(precisionRing);

      // Geometry 5: Ambient Fluid / Hydronic Particles
      const particleCount = 180;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const radius = 1.6 + Math.random() * 1.5;
        const z = (Math.random() - 0.5) * 2.0;

        positions[i * 3] = Math.cos(theta) * radius;
        positions[i * 3 + 1] = Math.sin(theta) * radius;
        positions[i * 3 + 2] = z;

        // Gradient from emerald (0.06, 0.72, 0.5) to cyan (0.02, 0.7, 0.83)
        const isEmerald = Math.random() > 0.5;
        colors[i * 3] = isEmerald ? 0.06 : 0.02;
        colors[i * 3 + 1] = isEmerald ? 0.72 : 0.71;
        colors[i * 3 + 2] = isEmerald ? 0.5 : 0.83;
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.055,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });
      const particleSystem = new THREE.Points(particleGeo, particleMat);
      assemblyGroup.add(particleSystem);

      // Mouse and Scroll tracking state
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;
      let scrollOffset = 0;

      const handleMouseMove = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const normX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
        targetX = normX * 0.45;
        targetY = normY * 0.35;
      };

      const handleScroll = () => {
        scrollOffset = window.scrollY * 0.0015;
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Handle Resize
      const handleResize = () => {
        if (!container) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener('resize', handleResize);

      // Animation Loop
      let clock = new THREE.Clock();
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Smooth cursor lerp
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        // Assembly tilt reacting to cursor and subtle organic breath
        assemblyGroup.rotation.y = mouseX + elapsedTime * 0.2 + scrollOffset;
        assemblyGroup.rotation.x = mouseY + Math.sin(elapsedTime * 0.5) * 0.08;
        assemblyGroup.rotation.z = Math.cos(elapsedTime * 0.3) * 0.05;

        // Rotor spins steadily like an active mechanical turbine
        rotorGroup.rotation.z = -elapsedTime * 0.9;

        // Precision measurement ring counter-rotates
        precisionRing.rotation.z = elapsedTime * 0.35;

        // Swirl particles
        particleSystem.rotation.z = elapsedTime * 0.15;
        particleSystem.rotation.y = Math.sin(elapsedTime * 0.2) * 0.2;

        renderer.render(scene, camera);
      };

      animate();
      if (onLoaded) onLoaded();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch {
      setHasError(true);
    }
  }, [onLoaded]);

  // Fallback view for mobile, reduced-motion, or WebGL context error
  if (hasError || isReducedMotion || isMobile) {
    return (
      <div className={`relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl ${className}`}>
        <img
          src={APP_IMAGES.heroMechanical}
          alt="Precision mechanical contractor engineering systems in Anchorage Alaska"
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Commercial Mechanical Infrastructure
          </div>
          <div className="text-sm font-medium text-slate-200 mt-1">
            Engineered for sub-arctic conditions across Anchorage and Alaska.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[440px] md:min-h-[560px] cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Interactive 3D model of mechanical valve and hydronic transmission manifold"
    />
  );
};

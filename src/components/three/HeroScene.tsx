import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, 0.85);
    leafShape.bezierCurveTo(0.85, 0.55, 0.9, -0.45, 0, -0.85);
    leafShape.bezierCurveTo(-0.9, -0.45, -0.85, 0.55, 0, 0.85);

    const leafGeometry = new THREE.ShapeGeometry(leafShape);
    const materials = [
      new THREE.MeshBasicMaterial({ color: '#2E7D32', transparent: true, opacity: 0.74 }),
      new THREE.MeshBasicMaterial({ color: '#F57C00', transparent: true, opacity: 0.58 }),
      new THREE.MeshBasicMaterial({ color: '#FFC107', transparent: true, opacity: 0.48 }),
    ];

    const leaves: THREE.Mesh[] = [];

    for (let index = 0; index < 46; index += 1) {
      const leaf = new THREE.Mesh(leafGeometry, materials[index % materials.length]);
      leaf.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      );
      const scale = 0.16 + Math.random() * 0.28;
      leaf.scale.set(scale, scale * 1.25, scale);
      leaf.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      leaf.userData = {
        speed: 0.003 + Math.random() * 0.008,
        drift: 0.004 + Math.random() * 0.012,
      };
      leaves.push(leaf);
      group.add(leaf);
    }

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerRef.current = {
        x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
      };
    };

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y += 0.0015;
      group.rotation.x += (pointerRef.current.y * 0.08 - group.rotation.x) * 0.025;
      group.rotation.z += (pointerRef.current.x * 0.08 - group.rotation.z) * 0.025;

      leaves.forEach((leaf, index) => {
        leaf.rotation.y += leaf.userData.speed;
        leaf.rotation.z += leaf.userData.speed * 0.6;
        leaf.position.y += Math.sin(elapsed + index) * leaf.userData.drift;
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    mount.addEventListener('pointermove', handlePointerMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      mount.removeEventListener('pointermove', handlePointerMove);
      mount.removeChild(renderer.domElement);
      leafGeometry.dispose();
      materials.forEach((material) => material.dispose());
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}

/**
 * Neural Network Animation Module
 * Generates animated neural network visualization in hero section
 */

const neuralNetwork = (function() {
  const canvas = document.getElementById('pfCanvas');
  if (!canvas) return { updateColors: () => {} };

  const ctx = canvas.getContext('2d');
  const layers = [4, 6, 6, 4];
  let nodes = [];
  let edges = [];
  let pulses = [];
  
  let nodeColor = '#79c6d2';
  let edgeColor = '54,125,138';
  let pulseColor = '#a8e6ef';

  const root = document.getElementById('pfRoot');

  function updateColors() {
    const isLight = root.getAttribute('data-theme') === 'light';
    nodeColor = isLight ? '#285F6B' : '#79c6d2';
    edgeColor = isLight ? '40,95,107' : '54,125,138';
    pulseColor = isLight ? '#0d2426' : '#c8f3f9';
  }

  function layoutNetwork() {
    nodes = [];
    const marginX = canvas.width * 0.1;
    const marginY = canvas.height * 0.18;
    
    layers.forEach((count, li) => {
      const x = marginX + (canvas.width - 2 * marginX) * (li / (layers.length - 1));
      const arr = [];
      
      for (let n = 0; n < count; n++) {
        const y = count === 1 ? canvas.height / 2 : marginY + (canvas.height - 2 * marginY) * (n / (count - 1));
        arr.push({ x, y, activation: 0 });
      }
      nodes.push(arr);
    });

    edges = [];
    for (let li = 0; li < layers.length - 1; li++) {
      nodes[li].forEach(a => {
        nodes[li + 1].forEach(b => {
          edges.push({ a, b });
        });
      });
    }
  }

  function sizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    layoutNetwork();
  }

  function spawnPulse(li, nodeIndex) {
    if (li >= layers.length - 1) return;
    const fromNode = nodes[li][nodeIndex];
    const targets = nodes[li + 1];
    const targetIdx = Math.floor(Math.random() * targets.length);
    const target = targets[targetIdx];
    
    pulses.push({
      x1: fromNode.x,
      y1: fromNode.y,
      x2: target.x,
      y2: target.y,
      t: 0,
      targetLayer: li + 1,
      targetIdx
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw edges
    ctx.lineWidth = 1;
    edges.forEach(e => {
      ctx.beginPath();
      ctx.moveTo(e.a.x, e.a.y);
      ctx.lineTo(e.b.x, e.b.y);
      ctx.strokeStyle = `rgba(${edgeColor},0.18)`;
      ctx.stroke();
    });

    // Spawn pulses randomly
    if (Math.random() < 0.08) {
      const ni = Math.floor(Math.random() * layers[0]);
      spawnPulse(0, ni);
    }

    // Update and draw pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.t += 0.025;
      const x = p.x1 + (p.x2 - p.x1) * p.t;
      const y = p.y1 + (p.y2 - p.y1) * p.t;
      
      ctx.beginPath();
      ctx.arc(x, y, 2.6, 0, Math.PI * 2);
      ctx.fillStyle = pulseColor;
      ctx.shadowBlur = 8;
      ctx.shadowColor = pulseColor;
      ctx.fill();
      ctx.shadowBlur = 0;
      
      if (p.t >= 1) {
        nodes[p.targetLayer][p.targetIdx].activation = 1;
        if (Math.random() < 0.75 && p.targetLayer < layers.length - 1) {
          spawnPulse(p.targetLayer, p.targetIdx);
        }
        pulses.splice(i, 1);
      }
    }

    // Draw nodes
    nodes.forEach(layer => {
      layer.forEach(n => {
        n.activation *= 0.94;
        const r = 3 + n.activation * 4;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.globalAlpha = 0.55 + n.activation * 0.45;
        if (n.activation > 0.15) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = nodeColor;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });
    });

    requestAnimationFrame(animate);
  }

  // Initialize
  sizeCanvas();
  window.addEventListener('resize', sizeCanvas);
  animate();

  return { updateColors };
})();

window.neuralNetwork = neuralNetwork;
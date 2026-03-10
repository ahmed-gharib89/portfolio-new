"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Sources", x: 0, y: 50, icon: "📊" },
  { label: "Ingest", x: 20, y: 30, icon: "⚡" },
  { label: "Transform", x: 40, y: 55, icon: "🔄" },
  { label: "Model", x: 60, y: 25, icon: "🧠" },
  { label: "Store", x: 75, y: 50, icon: "💾" },
  { label: "Visualize", x: 92, y: 35, icon: "📈" },
];

export default function DataFlowAnimation() {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-28 overflow-hidden">
      {/* Flow lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="none">
        {nodes.slice(0, -1).map((node, i) => {
          const next = nodes[i + 1];
          return (
            <motion.line
              key={i}
              x1={node.x + 4}
              y1={node.y}
              x2={next.x}
              y2={next.y}
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-primary/30"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: i * 0.3 + 0.5, duration: 0.6 }}
            />
          );
        })}
        
        {/* Animated data dots flowing along paths */}
        {nodes.slice(0, -1).map((node, i) => {
          const next = nodes[i + 1];
          return (
            <motion.circle
              key={`dot-${i}`}
              r="0.8"
              fill="currentColor"
              className="text-primary"
              initial={{ cx: node.x + 4, cy: node.y }}
              animate={{
                cx: [node.x + 4, next.x],
                cy: [node.y, next.y],
              }}
              transition={{
                delay: i * 0.3 + 1,
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          );
        })}
      </svg>

      {/* Pipeline nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
          className="absolute flex flex-col items-center"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-sm shadow-sm hover:border-primary/50 hover:shadow-primary/10 hover:shadow-md transition-all cursor-default">
            {node.icon}
          </div>
          <span className="text-[10px] text-muted-foreground mt-1 whitespace-nowrap">{node.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

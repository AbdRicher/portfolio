'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  IconBrain,
  IconTerminal2,
  IconPlayerPlay,
  IconCpu,
  IconDatabase,
  IconNetwork,
  IconRefresh,
  IconCode,
  IconServer,
  IconBolt,
  IconSparkles
} from '@tabler/icons-react';

const ShopifyIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.64 6.77c-.04-.26-.23-.46-.49-.49l-3.32-.42-2.12-4.14a.55.55 0 0 0-.96 0L10.63 5.86 7.31 6.28c-.26.03-.45.23-.49.49l-.75 5.89 6.72 9.5a.55.55 0 0 0 .9 0l6.7-9.5-.75-5.89zm-7.14 12.82L7.14 12.1l.62-4.88 2.76 5.43 1.98 6.94zm.96 0l1.98-6.94 2.76-5.43.62 4.88-5.36 7.49z" />
  </svg>
);

type TabType = 'ai' | 'shopify' | 'terminal';

export default function InteractiveHeroWorkspace() {
  const [activeTab, setActiveTab] = useState<TabType>('ai');
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string>('vector');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '[INIT] Agentic RAG core loaded (v2.4.0)',
    '[INFO] Hybrid Vector index connected: 1.2M vectors',
    '[READY] ReAct agent idle. Awaiting trigger...'
  ]);
  const [activeCodeFile, setActiveCodeFile] = useState<'agent' | 'shopify' | 'redis'>('agent');
  const [ping, setPing] = useState(14);

  // 3D Card Tilt on Mouse Move
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    damping: 25,
    stiffness: 180
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    damping: 25,
    stiffness: 180
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Periodic latency simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(11 + Math.random() * 6));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);

    if (activeTab === 'ai') {
      setTerminalOutput((prev) => [
        ...prev.slice(-3),
        '-> [QUERY] Ingesting prompt embedding (1536-dim)...',
        '-> [RETRIEVAL] Found 4 top-k chunks with score 0.942',
        '-> [REASONING] Multi-agent tool call executed: 12ms',
        '-> [STREAM] Synthesizing context-grounded response.'
      ]);
    } else if (activeTab === 'shopify') {
      setTerminalOutput((prev) => [
        ...prev.slice(-3),
        '-> [WEBHOOK] order/created dispatched -> HMAC verified',
        '-> [EDGE] Edge worker ingested payload in 4ms',
        '-> [CACHE] Redis cache invalidated for inventory ID: #8841',
        '-> [GRAPHQL] Shopify Admin API sync complete (200 OK)'
      ]);
    } else {
      setTerminalOutput((prev) => [
        ...prev.slice(-3),
        '-> [EXEC] Compiling typescript AST...',
        '-> [TEST] 14 unit tests passed (100% coverage)',
        '-> [DEPLOY] Distributed microservice container hot-reloaded.'
      ]);
    }

    setTimeout(() => {
      setIsSimulating(false);
    }, 1800);
  };

  const aiNodes = [
    {
      id: 'query',
      name: 'User Prompt',
      tag: 'Input',
      metric: 'Realtime Tokenizer',
      color: 'from-cyan-500 to-blue-500',
      icon: IconBrain
    },
    {
      id: 'vector',
      name: 'Vector DB (RAG)',
      tag: 'Pinecone / Milvus',
      metric: 'Top-K: 4 | 0.94 Score',
      color: 'from-sky-400 to-cyan-500',
      icon: IconDatabase
    },
    {
      id: 'agent',
      name: 'ReAct Agent',
      tag: 'Reasoning Engine',
      metric: 'Tool Invocation: 14ms',
      color: 'from-indigo-500 to-purple-500',
      icon: IconCpu
    },
    {
      id: 'stream',
      name: 'Streamed Output',
      tag: 'SSE / WebSocket',
      metric: '68 tokens / sec',
      color: 'from-emerald-400 to-cyan-400',
      icon: IconSparkles
    }
  ];

  const shopifyNodes = [
    {
      id: 'webhook',
      name: 'Shopify Webhook',
      tag: 'Event Stream',
      metric: 'HMAC Verified',
      color: 'from-emerald-500 to-teal-600',
      icon: ShopifyIcon
    },
    {
      id: 'edge',
      name: 'Edge Gateway',
      tag: 'Cloudflare / Node',
      metric: 'Latency: 6ms',
      color: 'from-cyan-500 to-sky-600',
      icon: IconNetwork
    },
    {
      id: 'redis',
      name: 'Redis Cache',
      tag: 'In-Memory State',
      metric: 'Hit Rate: 99.4%',
      color: 'from-rose-500 to-amber-500',
      icon: IconDatabase
    },
    {
      id: 'graphql',
      name: 'Shopify GraphQL',
      tag: 'Admin / Storefront',
      metric: 'SLA: 99.99%',
      color: 'from-blue-500 to-indigo-600',
      icon: IconServer
    }
  ];

  const codeSnippets = {
    agent: `// Agentic AI & RAG Orchestration
import { OpenAIEmbeddings, PineconeVectorStore } from "@langchain/community";
import { createAgentPipeline } from "@/lib/ai/agent";

export async function processRAGQuery(query: string) {
  const vectorStore = await PineconeVectorStore.fromExistingIndex({
    embeddings: new OpenAIEmbeddings(),
    indexName: "portfolio-knowledge-base"
  });

  const retriever = vectorStore.asRetriever({ k: 4 });
  const agent = createAgentPipeline({
    model: "gpt-4o-mini",
    tools: ["shopifyAPI", "codeExecutor"],
    temperature: 0.1
  });

  return await agent.stream({ query, retriever });
}`,
    shopify: `// Shopify Webhook & GraphQL Store Sync
import { verifyShopifyHMAC } from "@/lib/shopify/auth";
import { redis } from "@/lib/redis";

export async function handleOrderCreated(req: Request) {
  const isVerified = await verifyShopifyHMAC(req);
  if (!isVerified) return new Response("Unauthorized", { status: 401 });

  const payload = await req.json();
  const cacheKey = \`store:inventory:\${payload.line_items[0].product_id}\`;
  
  // High-performance Distributed Invalidation
  await redis.del(cacheKey);
  await redis.publish("order_events", JSON.stringify({
    orderId: payload.id,
    timestamp: Date.now()
  }));

  return Response.json({ success: true, processedInMs: 8 });
}`,
    redis: `// Distributed High-Throughput Worker
package main

import (
  "context"
  "github.com/redis/go-redis/v9"
  "log"
)

func StreamWorker(ctx context.Context, rdb *redis.Client) {
  for {
    streams, err := rdb.XRead(ctx, &redis.XReadArgs{
      Streams: []string{"ai_events", "$"},
      Block:   0,
      Count:   50,
    }).Result()
    if err != nil {
      log.Printf("Worker error: %v", err)
      continue
    }
    // High-speed parallel dispatch
    dispatchEvents(streams)
  }
}`
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto select-none"
      style={{ perspective: 1200 }}
    >
      {/* Ambient Neon Glow Aura Backdrop */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/25 via-sky-500/20 to-blue-600/25 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10 animate-pulse-glow" />

      {/* Main 3D Tilted Interactive Chassis */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="relative w-full rounded-2xl bg-[#090f23]/90 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden transition-shadow duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(6,182,212,0.25)]"
      >
        {/* Top Window Control Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#060a19]/90 border-b border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)] cursor-pointer hover:opacity-100" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)] cursor-pointer hover:opacity-100" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)] cursor-pointer hover:opacity-100" />
            <span className="ml-2 font-mono text-xs text-slate-400 hidden sm:inline-block">
              abdullah-core // neural-workspace
            </span>
          </div>

          <div className="flex items-center space-x-3 font-mono text-[11px]">
            <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>LIVE MATRIX</span>
            </div>
            <div className="flex items-center space-x-1 text-slate-400">
              <IconBolt size={13} className="text-cyan-400" />
              <span>{ping}ms</span>
            </div>
          </div>
        </div>

        {/* Tab Selector Buttons */}
        <div className="grid grid-cols-3 p-1.5 bg-[#050814]/80 border-b border-cyan-500/15 gap-1.5">
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl font-mono text-xs font-semibold transition-all duration-200 ${
              activeTab === 'ai'
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
            }`}
          >
            <IconBrain size={15} className="text-cyan-400" />
            <span className="truncate">AI & RAG</span>
          </button>

          <button
            onClick={() => setActiveTab('shopify')}
            className={`flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl font-mono text-xs font-semibold transition-all duration-200 ${
              activeTab === 'shopify'
                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
            }`}
          >
            <ShopifyIcon size={15} className="text-emerald-400" />
            <span className="truncate">Shopify & Scale</span>
          </button>

          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl font-mono text-xs font-semibold transition-all duration-200 ${
              activeTab === 'terminal'
                ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-400/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
            }`}
          >
            <IconTerminal2 size={15} className="text-indigo-400" />
            <span className="truncate">Code & Terminal</span>
          </button>
        </div>

        {/* Tab Body Viewports */}
        <div className="p-4 sm:p-5 min-h-[290px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {activeTab === 'ai' && (
              <motion.div
                key="tab-ai"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Visual Pipeline Nodes */}
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400/80 mb-2">
                  <span>AGENTIC ARCHITECTURE GRAPH</span>
                  <span className="text-slate-400 text-[11px]">Click nodes to inspect</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {aiNodes.map((node) => {
                    const Icon = node.icon;
                    const isSelected = selectedNode === node.id;
                    return (
                      <div
                        key={node.id}
                        onClick={() => setSelectedNode(node.id)}
                        className={`p-3 rounded-xl cursor-pointer border transition-all duration-200 flex flex-col items-center text-center relative ${
                          isSelected
                            ? 'bg-cyan-950/60 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-[1.02]'
                            : 'bg-[#0b132b]/60 border-slate-800 hover:border-cyan-500/40 hover:bg-[#0e1938]'
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center text-white mb-2 shadow-sm`}
                        >
                          <Icon size={18} />
                        </div>
                        <span className="text-xs font-medium text-slate-200 truncate w-full">
                          {node.name}
                        </span>
                        <span className="text-[10px] text-cyan-400 font-mono mt-0.5 truncate w-full">
                          {node.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Node Inspector details */}
                <div className="p-3 rounded-xl bg-[#060b1c] border border-cyan-500/20 font-mono text-xs text-slate-300 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>Selected:</span>
                    <span className="text-cyan-300 font-semibold">
                      {aiNodes.find((n) => n.id === selectedNode)?.name || 'Vector DB'}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Metric:{' '}
                    <span className="text-emerald-400 font-semibold">
                      {aiNodes.find((n) => n.id === selectedNode)?.metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'shopify' && (
              <motion.div
                key="tab-shopify"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400/80 mb-2">
                  <span>HIGH-THROUGHPUT PIPELINE</span>
                  <span className="text-slate-400 text-[11px]">Click nodes to inspect</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {shopifyNodes.map((node) => {
                    const Icon = node.icon;
                    const isSelected = selectedNode === node.id;
                    return (
                      <div
                        key={node.id}
                        onClick={() => setSelectedNode(node.id)}
                        className={`p-3 rounded-xl cursor-pointer border transition-all duration-200 flex flex-col items-center text-center relative ${
                          isSelected
                            ? 'bg-emerald-950/60 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-[1.02]'
                            : 'bg-[#0b132b]/60 border-slate-800 hover:border-emerald-500/40 hover:bg-[#0e1938]'
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center text-white mb-2 shadow-sm`}
                        >
                          <Icon size={18} />
                        </div>
                        <span className="text-xs font-medium text-slate-200 truncate w-full">
                          {node.name}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-mono mt-0.5 truncate w-full">
                          {node.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Node Inspector details */}
                <div className="p-3 rounded-xl bg-[#060b1c] border border-emerald-500/20 font-mono text-xs text-slate-300 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Selected:</span>
                    <span className="text-emerald-300 font-semibold">
                      {shopifyNodes.find((n) => n.id === selectedNode)?.name || 'Redis Cache'}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    SLA:{' '}
                    <span className="text-cyan-400 font-semibold">
                      {shopifyNodes.find((n) => n.id === selectedNode)?.metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'terminal' && (
              <motion.div
                key="tab-terminal"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                {/* Code file tabs */}
                <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
                  <button
                    onClick={() => setActiveCodeFile('agent')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center space-x-1.5 transition-colors ${
                      activeCodeFile === 'agent'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <IconCode size={13} />
                    <span>agent.ts</span>
                  </button>
                  <button
                    onClick={() => setActiveCodeFile('shopify')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center space-x-1.5 transition-colors ${
                      activeCodeFile === 'shopify'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <ShopifyIcon size={13} />
                    <span>shopify_sync.ts</span>
                  </button>
                  <button
                    onClick={() => setActiveCodeFile('redis')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center space-x-1.5 transition-colors ${
                      activeCodeFile === 'redis'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <IconServer size={13} />
                    <span>worker.go</span>
                  </button>
                </div>

                {/* Code snippet display */}
                <div className="p-3 rounded-xl bg-[#040714] border border-slate-800/80 font-mono text-[11px] text-slate-300 max-h-[140px] overflow-y-auto remove-scrollbar">
                  <pre className="text-cyan-300/90 whitespace-pre-wrap leading-relaxed">
                    {codeSnippets[activeCodeFile]}
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Simulation & Execution Console */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2.5">
            <div className="p-2.5 rounded-xl bg-[#040714] border border-cyan-500/20 font-mono text-[11px] space-y-1">
              <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1 border-b border-slate-800">
                <span>TERMINAL LOG STREAM</span>
                <span>STATUS: READY</span>
              </div>
              <div className="space-y-0.5">
                {terminalOutput.slice(-3).map((log, idx) => (
                  <div
                    key={idx}
                    className={`truncate ${
                      log.includes('->')
                        ? 'text-cyan-400 font-medium'
                        : 'text-slate-400'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Trigger Button */}
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className={`w-full py-2.5 px-4 rounded-xl font-mono text-xs font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-md ${
                isSimulating
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                  : 'bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(6,182,212,0.35)] transform hover:-translate-y-0.5'
              }`}
            >
              {isSimulating ? (
                <>
                  <IconRefresh size={15} className="animate-spin text-cyan-400" />
                  <span>Processing Neural Pipeline...</span>
                </>
              ) : (
                <>
                  <IconPlayerPlay size={15} className="fill-current" />
                  <span>
                    {activeTab === 'ai'
                      ? 'Simulate RAG Inference'
                      : activeTab === 'shopify'
                      ? 'Dispatch Webhook Event'
                      : 'Run Sandbox Test'}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Floating Skill Badges Strip */}
        <div className="px-4 py-2.5 bg-[#050814]/90 border-t border-cyan-500/15 flex flex-wrap items-center justify-between gap-1.5 font-mono text-[10px] text-slate-400">
          <span className="text-cyan-400 font-medium">TECH STACK:</span>
          <div className="flex flex-wrap items-center gap-1.5">
            {['Next.js 15', 'LangChain', 'Shopify GraphQL', 'FastAPI', 'Redis', 'Docker'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-slate-900/80 border border-cyan-500/20 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

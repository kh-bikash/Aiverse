import {
  Bot,
  BrainCircuit,
  Boxes,
  CheckCircle2,
  Cpu,
  DatabaseZap,
  Eye,
  Fingerprint,
  GitBranch,
  Layers3,
  MessageSquareCode,
  Network,
  Orbit,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react';

export const aiDomains = [
  { id: 'ai', label: 'Artificial Intelligence', depth: 'Core', status: 'Unlocked', x: 0, y: 0 },
  { id: 'ml', label: 'Machine Learning', depth: 'Models', status: 'Active', x: -210, y: 120 },
  { id: 'dl', label: 'Deep Learning', depth: 'Neural', status: 'Active', x: 210, y: 120 },
  { id: 'llm', label: 'LLMs', depth: 'Language', status: 'Live Lab', x: -330, y: 280 },
  { id: 'cv', label: 'Computer Vision', depth: 'Perception', status: 'Unlocked', x: 0, y: 300 },
  { id: 'agents', label: 'AI Agents', depth: 'Autonomy', status: 'Beta', x: 330, y: 280 },
  { id: 'safety', label: 'AI Safety', depth: 'Alignment', status: 'Required', x: -110, y: 470 },
  { id: 'mlops', label: 'MLOps', depth: 'Systems', status: 'Ops', x: 180, y: 470 },
];

export const roadmapEdges = [
  ['ai', 'ml'],
  ['ai', 'dl'],
  ['ml', 'llm'],
  ['dl', 'cv'],
  ['dl', 'agents'],
  ['llm', 'safety'],
  ['agents', 'mlops'],
  ['cv', 'mlops'],
];

export const tokenSequence = ['Master', 'AI', 'with', 'visual', 'systems', 'that', 'explain', 'themselves'];

export const attentionMatrix = [
  [0.98, 0.36, 0.22, 0.44, 0.18, 0.12],
  [0.41, 0.94, 0.58, 0.32, 0.48, 0.24],
  [0.18, 0.46, 0.96, 0.76, 0.37, 0.15],
  [0.22, 0.31, 0.72, 0.97, 0.61, 0.28],
  [0.14, 0.48, 0.38, 0.67, 0.95, 0.54],
  [0.1, 0.24, 0.19, 0.35, 0.66, 0.99],
];

export const probabilityData = [
  { token: 'learn', probability: 42 },
  { token: 'build', probability: 27 },
  { token: 'align', probability: 14 },
  { token: 'deploy', probability: 10 },
  { token: 'debug', probability: 7 },
];

export const modelGallery = [
  { name: 'GPT', type: 'Decoder', metric: 'Token reasoning', icon: MessageSquareCode },
  { name: 'BERT', type: 'Encoder', metric: 'Bidirectional context', icon: Layers3 },
  { name: 'LLaMA', type: 'Open weights', metric: 'Efficient inference', icon: BrainCircuit },
  { name: 'Gemini', type: 'Multimodal', metric: 'Cross-modal fusion', icon: Sparkles },
  { name: 'Stable Diffusion', type: 'Diffusion', metric: 'Latent denoising', icon: Orbit },
  { name: 'CLIP', type: 'Vision-language', metric: 'Embedding alignment', icon: Eye },
  { name: 'Whisper', type: 'Speech', metric: 'Audio transcription', icon: Radar },
  { name: 'ResNet', type: 'Vision', metric: 'Residual learning', icon: Boxes },
  { name: 'YOLO', type: 'Detection', metric: 'Real-time perception', icon: Fingerprint },
];

export const timelineEvents = [
  { year: '1950', title: 'Turing Test', detail: 'A question becomes a benchmark for machine intelligence.' },
  { year: '1958', title: 'Perceptron', detail: 'Early neural learning moves from theory into hardware.' },
  { year: '1986', title: 'Backpropagation', detail: 'Gradient-based training unlocks deep network learning.' },
  { year: '1997', title: 'Deep Blue', detail: 'Search and expert systems defeat a chess champion.' },
  { year: '2012', title: 'AlexNet', detail: 'GPU-powered deep vision changes computer perception.' },
  { year: '2017', title: 'Transformer', detail: 'Attention becomes the interface for modern sequence models.' },
  { year: '2020', title: 'Diffusion Rise', detail: 'Iterative denoising turns text prompts into visual worlds.' },
  { year: '2023+', title: 'Agents + RAG', detail: 'Models learn to retrieve, reason, call tools, and collaborate.' },
];

export const workflowNodes = [
  { id: 'prompt', label: 'Prompt', icon: MessageSquareCode },
  { id: 'embedding', label: 'Embedding', icon: Network },
  { id: 'vector', label: 'Vector DB', icon: DatabaseZap },
  { id: 'retriever', label: 'Retriever', icon: GitBranch },
  { id: 'llm', label: 'LLM', icon: Cpu },
  { id: 'response', label: 'Response', icon: Bot },
];

export const tutorMessages = [
  { role: 'mentor', text: 'A transformer reads tokens as relationships, not as isolated words.' },
  { role: 'student', text: 'Show me where attention happens.' },
  { role: 'mentor', text: 'Watch the heatmap: brighter cells mean stronger information routing between tokens.' },
];

export const datasetPoints = Array.from({ length: 36 }, (_, index) => {
  const cluster = index % 3;
  return {
    id: index,
    cx: 18 + ((index * 17 + cluster * 23) % 64),
    cy: 16 + ((index * 29 + cluster * 11) % 62),
    cluster,
  };
});

export const principles = [
  { label: 'Visual First', value: 'Every concept becomes an inspectable system.' },
  { label: 'Keyboard Native', value: 'Controls expose real focus states and semantic actions.' },
  { label: 'Simulation Led', value: 'Learners change parameters and see model behavior shift.' },
  { label: 'Future Ready', value: 'Architecture leaves space for APIs, datasets, and labs.' },
];

export const footerLinks = [
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Transformer Lab', href: '#llm' },
  { label: 'Simulator', href: '#simulator' },
  { label: 'Playground', href: '#playground' },
  { label: 'Docs', href: '#footer' },
];

export const safetyPillars = [
  { icon: ShieldCheck, label: 'Alignment checks' },
  { icon: DatabaseZap, label: 'Grounded retrieval' },
  { icon: Workflow, label: 'Tool audit trails' },
];

export const learningModules = [
  { id: 'tokenization', title: 'Tokenization Lab', domain: 'LLM', level: 'Foundation', minutes: 18, progress: 84, skill: 'Split text into model-readable units.' },
  { id: 'attention', title: 'Attention Routing', domain: 'Transformers', level: 'Core', minutes: 26, progress: 68, skill: 'Trace how tokens exchange meaning.' },
  { id: 'rag', title: 'RAG Systems', domain: 'Retrieval', level: 'Applied', minutes: 34, progress: 52, skill: 'Ground model answers with vector search.' },
  { id: 'agents', title: 'Agent Tool Use', domain: 'Agents', level: 'Advanced', minutes: 31, progress: 38, skill: 'Plan, call tools, observe, and revise.' },
  { id: 'diffusion', title: 'Diffusion Models', domain: 'Generative AI', level: 'Core', minutes: 29, progress: 45, skill: 'Understand denoising through latent space.' },
  { id: 'safety', title: 'Safety Eval Studio', domain: 'AI Safety', level: 'Required', minutes: 22, progress: 61, skill: 'Spot risks, mitigations, and guardrails.' },
];

export const conceptIndex = [
  { term: 'KV Cache', domain: 'LLM', detail: 'Stores previous keys and values so generation can reuse attention history.' },
  { term: 'LoRA', domain: 'Fine-Tuning', detail: 'Trains compact low-rank adapters while freezing the base model.' },
  { term: 'Top-p Sampling', domain: 'LLM', detail: 'Samples from the smallest token set whose cumulative probability crosses p.' },
  { term: 'Vector Database', domain: 'RAG', detail: 'Indexes embeddings so semantic search can retrieve related chunks.' },
  { term: 'Policy Gradient', domain: 'RL', detail: 'Optimizes action policies from reward signals.' },
  { term: 'Quantization', domain: 'Infrastructure', detail: 'Reduces numeric precision to lower memory and speed inference.' },
  { term: 'CLIP Embeddings', domain: 'Multimodal', detail: 'Aligns image and text representations in a shared vector space.' },
  { term: 'RLHF', domain: 'Alignment', detail: 'Uses human preference data to tune model behavior.' },
];

export const quizBank = [
  {
    id: 'q1',
    question: 'What does self-attention primarily help a transformer do?',
    options: ['Route information between tokens', 'Compress images only', 'Store training data verbatim'],
    answer: 'Route information between tokens',
    explanation: 'Self-attention computes token-to-token relevance so each representation can mix useful context.',
  },
  {
    id: 'q2',
    question: 'Why does RAG use a vector database?',
    options: ['To retrieve semantically similar context', 'To make CSS animations faster', 'To replace all model weights'],
    answer: 'To retrieve semantically similar context',
    explanation: 'RAG embeds the query and finds nearby chunks before the LLM writes a grounded answer.',
  },
  {
    id: 'q3',
    question: 'What is LoRA designed to reduce?',
    options: ['Fine-tuning cost', 'HTML semantics', 'Keyboard focus visibility'],
    answer: 'Fine-tuning cost',
    explanation: 'LoRA trains small adapter matrices instead of updating every base-model parameter.',
  },
];

export const comparisonModels = [
  { name: 'GPT-style Decoder', latency: 72, context: 88, grounding: 63, cost: 58 },
  { name: 'BERT Encoder', latency: 86, context: 42, grounding: 71, cost: 75 },
  { name: 'RAG Assistant', latency: 61, context: 92, grounding: 94, cost: 67 },
  { name: 'Vision-Language Model', latency: 54, context: 76, grounding: 68, cost: 49 },
];

export const ragDocuments = [
  { id: 'doc-1', title: 'Transformer Paper Notes', score: 0.94, chunk: 'Attention creates content-aware routing between sequence positions.' },
  { id: 'doc-2', title: 'Vector DB Field Guide', score: 0.88, chunk: 'Embeddings convert documents into searchable semantic coordinates.' },
  { id: 'doc-3', title: 'MLOps Deployment Memo', score: 0.73, chunk: 'Observability tracks latency, drift, quality, and safety incidents.' },
  { id: 'doc-4', title: 'Safety Eval Checklist', score: 0.69, chunk: 'Guardrails combine policy, retrieval constraints, and output checks.' },
];

export const agentSteps = [
  { id: 'plan', label: 'Plan', icon: Target, output: 'Break the learner goal into testable subtasks.' },
  { id: 'retrieve', label: 'Retrieve', icon: DatabaseZap, output: 'Fetch examples, definitions, and diagrams.' },
  { id: 'simulate', label: 'Simulate', icon: Cpu, output: 'Run the visual lab with chosen parameters.' },
  { id: 'critique', label: 'Critique', icon: ShieldCheck, output: 'Check accuracy, grounding, and safety.' },
  { id: 'complete', label: 'Complete', icon: CheckCircle2, output: 'Generate next exercise and mastery score.' },
];

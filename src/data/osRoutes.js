import {
  Activity,
  AppWindow,
  AudioLines,
  Binary,
  Boxes,
  BrainCircuit,
  Camera,
  ChartNoAxesCombined,
  CircuitBoard,
  Code2,
  Cpu,
  DatabaseZap,
  FlaskConical,
  GitBranch,
  GraduationCap,
  Image,
  Layers3,
  LayoutDashboard,
  MessageSquareCode,
  Network,
  Radar,
  Route,
  Settings,
  ShieldCheck,
  Sigma,
  Sparkles,
  Trophy,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';

export const learningSteps = [
  'Visual explanation',
  'Interactive simulation',
  'Parameter experiment',
  'Code walkthrough',
  'Real-world use case',
  'Challenge mode',
  'Validation quiz',
];

export const osRouteGroups = [
  {
    label: 'Core OS',
    routes: [
      { path: '/dashboard', title: 'Dashboard', icon: LayoutDashboard, domain: 'Operating System', identity: 'Mission control for learning velocity, XP, saved labs, and AI skill growth.', accent: 'primary', xp: 12840, mastery: 78 },
      { path: '/learn', title: 'Learn', icon: GraduationCap, domain: 'Learning Engine', identity: 'Guided modular lessons with simulations, quizzes, code, and challenges.', accent: 'success', xp: 9240, mastery: 64 },
      { path: '/roadmaps', title: 'Roadmaps', icon: Route, domain: 'Skill Trees', identity: 'Branching paths for every AI specialization and certification track.', accent: 'warning', xp: 8120, mastery: 59 },
      { path: '/labs', title: 'Labs', icon: FlaskConical, domain: 'Experiment Hub', identity: 'Saved experiments, replayable simulations, and challenge labs.', accent: 'primary', xp: 10220, mastery: 71 },
    ],
  },
  {
    label: 'Interactive Workspaces',
    routes: [
      { path: '/playgrounds', title: 'Playgrounds', icon: AppWindow, domain: 'Developer Sandbox', identity: 'Prompt, embedding, model, vector, agent, and attention playgrounds.', accent: 'primary', xp: 7460, mastery: 55 },
      { path: '/simulations', title: 'Simulations', icon: Activity, domain: 'Simulation Engine', identity: 'Universal real-time parameter-controlled AI simulation runtime.', accent: 'success', xp: 11200, mastery: 73 },
      { path: '/visualizers', title: 'Visualizers', icon: ChartNoAxesCombined, domain: 'Visualization Suite', identity: 'Attention maps, embeddings, matrices, loss curves, and decision boundaries.', accent: 'warning', xp: 9800, mastery: 67 },
      { path: '/models', title: 'Models', icon: Boxes, domain: 'Model Index', identity: 'Compare GPT, BERT, LLaMA, diffusion, vision, speech, and multimodal systems.', accent: 'primary', xp: 8700, mastery: 62 },
      { path: '/architectures', title: 'Architectures', icon: CircuitBoard, domain: 'Architecture Explorer', identity: 'Inspect blocks, layers, memory, routing, and deployment patterns.', accent: 'success', xp: 10900, mastery: 76 },
    ],
  },
  {
    label: 'AI Domains',
    routes: [
      { path: '/agents', title: 'Agents', icon: Workflow, domain: 'Agent OS', identity: 'Spawn agents, assign tools, inspect memory, and observe orchestration.', accent: 'warning', xp: 9300, mastery: 66 },
      { path: '/rag', title: 'RAG', icon: DatabaseZap, domain: 'Retrieval Systems', identity: 'Chunk, embed, retrieve, inject context, and evaluate grounded answers.', accent: 'primary', xp: 10100, mastery: 70 },
      { path: '/transformers', title: 'Transformers', icon: Layers3, domain: 'Transformer Lab', identity: 'Explore tokens, attention, masks, logits, sampling, KV cache, LoRA, and RLHF.', accent: 'success', xp: 13200, mastery: 82 },
      { path: '/neural-networks', title: 'Neural Networks', icon: BrainCircuit, domain: 'Network Sandbox', identity: 'Build layers, connect neurons, tune weights, and watch gradients flow.', accent: 'warning', xp: 11700, mastery: 75 },
      { path: '/generative-ai', title: 'Generative AI', icon: Sparkles, domain: 'Generation Lab', identity: 'Text generation, diffusion timelines, denoising, latent traversal, and prompt control.', accent: 'primary', xp: 12100, mastery: 77 },
      { path: '/computer-vision', title: 'Computer Vision', icon: Camera, domain: 'Vision Studio', identity: 'Camera simulation, convolution, segmentation, detection, and feature maps.', accent: 'success', xp: 8200, mastery: 58 },
      { path: '/nlp', title: 'NLP', icon: MessageSquareCode, domain: 'Language Lab', identity: 'Parse, classify, embed, translate, summarize, and reason over language.', accent: 'warning', xp: 7300, mastery: 54 },
      { path: '/reinforcement-learning', title: 'Reinforcement Learning', icon: Radar, domain: 'RL Arena', identity: 'Policies, rewards, exploration, Q-values, and environment feedback loops.', accent: 'primary', xp: 6900, mastery: 49 },
      { path: '/vector-databases', title: 'Vector Databases', icon: Network, domain: 'Vector Space', identity: 'Index embeddings, tune distance metrics, and inspect cluster retrieval.', accent: 'success', xp: 7900, mastery: 57 },
      { path: '/fine-tuning', title: 'Fine-Tuning', icon: GitBranch, domain: 'Adaptation Studio', identity: 'LoRA, adapters, datasets, evals, quantization, and deployment recipes.', accent: 'warning', xp: 8400, mastery: 61 },
      { path: '/mlops', title: 'MLOps', icon: Cpu, domain: 'AI Infrastructure', identity: 'Pipelines, monitoring, drift, evaluation gates, incidents, and deployment systems.', accent: 'primary', xp: 7600, mastery: 53 },
      { path: '/datasets', title: 'Datasets', icon: Binary, domain: 'Dataset Lab', identity: 'Upload, profile, cluster, reduce dimensions, and inspect data quality.', accent: 'success', xp: 6800, mastery: 51 },
      { path: '/prompt-engineering', title: 'Prompt Engineering', icon: Code2, domain: 'Prompt Studio', identity: 'System prompts, chain-of-thought patterns, eval prompts, and response shaping.', accent: 'warning', xp: 8800, mastery: 63 },
      { path: '/ai-safety', title: 'AI Safety', icon: ShieldCheck, domain: 'Safety Lab', identity: 'Alignment, red teaming, policy checks, grounding, evals, and guardrails.', accent: 'primary', xp: 9400, mastery: 69 },
      { path: '/multimodal', title: 'Multimodal', icon: Image, domain: 'Multimodal Lab', identity: 'Text, image, audio, video, and sensor fusion learning environments.', accent: 'success', xp: 8100, mastery: 56 },
    ],
  },
  {
    label: 'Community',
    routes: [
      { path: '/leaderboards', title: 'Leaderboards', icon: Trophy, domain: 'Challenge Rankings', identity: 'XP, streaks, challenge wins, and simulation mastery badges.', accent: 'warning', xp: 15400, mastery: 88 },
      { path: '/community', title: 'Community', icon: Users, domain: 'Learning Network', identity: 'Shared labs, mentor rooms, project critiques, and collaborative research spaces.', accent: 'primary', xp: 5400, mastery: 43 },
      { path: '/settings', title: 'Settings', icon: Settings, domain: 'OS Preferences', identity: 'Density, motion, accessibility, API keys, saved labs, and learning profile.', accent: 'success', xp: 3200, mastery: 38 },
    ],
  },
];

export const osRoutes = osRouteGroups.flatMap((group) => group.routes.map((route) => ({ ...route, group: group.label })));

export const domainToolkits = {
  '/transformers': ['Token dragger', 'Attention beams', 'Masked attention', 'KV cache inspector', 'Sampling console', 'LoRA adapter viewer'],
  '/computer-vision': ['Camera simulator', 'Convolution kernel pad', 'Segmentation mask painter', 'Object detection stage', 'Feature map stack'],
  '/neural-networks': ['Layer builder', 'Weight editor', 'Gradient heatmap', 'Loss landscape', 'Backprop replay'],
  '/rag': ['Chunk splitter', 'Embedding map', 'Vector search scorer', 'Context injector', 'Grounded answer evaluator'],
  '/agents': ['Agent spawner', 'Tool router', 'Memory graph', 'Planning trace', 'Autonomy monitor'],
  '/generative-ai': ['Diffusion timeline', 'Latent explorer', 'Denoising replay', 'Prompt matrix', 'Style control'],
  '/vector-databases': ['Distance metric switcher', 'ANN index explorer', 'Cluster renderer', 'Hybrid search mixer'],
  '/prompt-engineering': ['Prompt debugger', 'System message lab', 'Eval harness', 'Output contract tester'],
  '/ai-safety': ['Red-team console', 'Policy checker', 'Grounding meter', 'Refusal boundary explorer'],
  '/multimodal': ['Image-text aligner', 'Audio token stream', 'Video frame sampler', 'Fusion attention map'],
};

export const defaultToolkits = ['Architecture explorer', 'Simulation console', 'Code walkthrough', 'Challenge lab', 'Quiz validator'];

export const achievements = [
  { title: 'Attention Architect', detail: 'Completed transformer attention challenges.', icon: Layers3 },
  { title: 'RAG Cartographer', detail: 'Mapped retrieval flow from query to answer.', icon: DatabaseZap },
  { title: 'Gradient Runner', detail: 'Reduced loss in the neural sandbox.', icon: Sigma },
  { title: 'Agent Operator', detail: 'Built a safe multi-agent mission loop.', icon: Workflow },
  { title: 'Prompt Surgeon', detail: 'Debugged a prompt with eval-backed changes.', icon: Zap },
  { title: 'Vision Mapper', detail: 'Explored segmentation and feature activations.', icon: AudioLines },
];

const routeCommandItems = osRoutes.flatMap((route) => [
  { label: route.title, detail: route.identity, href: route.path, type: 'route' },
  { label: `${route.title} simulation`, detail: `Open ${route.domain} simulation controls`, href: route.path, type: 'simulation' },
]);

const labCommandItems = [
  { label: 'Transformer Playground', detail: 'Drag tokens, replay inference, inspect logits, and tune sampling.', href: '/transformers', type: 'lab' },
  { label: 'Attention Visualizer', detail: 'Inspect multi-head attention beams, masks, and matrix heatmaps.', href: '/transformers', type: 'visualizer' },
  { label: 'GPT Architecture', detail: 'Open decoder-only transformer architecture and generation flow.', href: '/architectures', type: 'architecture' },
  { label: 'Transformer Quiz', detail: 'Validate tokenization, KV cache, masking, and probability concepts.', href: '/transformers', type: 'quiz' },
  { label: 'Transformer Sandbox', detail: 'Modify layers, context windows, heads, and embedding dimensions.', href: '/transformers', type: 'sandbox' },
  { label: 'Multi-Head Attention Lab', detail: 'Compare heads and observe how each routes a different relation.', href: '/transformers', type: 'lab' },
  { label: 'RAG Lab', detail: 'Chunk documents, embed queries, rank retrieval, and inject grounded context.', href: '/rag', type: 'lab' },
  { label: 'Diffusion Sandbox', detail: 'Animate denoising steps and latent traversal.', href: '/generative-ai', type: 'sandbox' },
  { label: 'Neural Network Builder', detail: 'Connect neurons, tune weights, and watch backpropagation.', href: '/neural-networks', type: 'lab' },
  { label: 'Agent Playground', detail: 'Spawn agents, assign tools, inspect memory, and observe orchestration.', href: '/agents', type: 'lab' },
  { label: 'Claude Mechanics', detail: 'Explore long-context assistant flow and constitutional safety shaping.', href: '/models', type: 'model' },
  { label: 'Gemini Mechanics', detail: 'Explore multimodal fusion and cross-modal attention.', href: '/multimodal', type: 'model' },
  { label: 'ChatGPT Mechanics', detail: 'Explore context assembly, tool calling, sampling, and safety layers.', href: '/models', type: 'model' },
];

export const commandPaletteItems = [...labCommandItems, ...routeCommandItems];

export const curriculumGroups = [
  {
    label: 'AI Fundamentals',
    items: [
      { title: 'Introduction to AI', progress: 92, xp: 1200, minutes: 24, difficulty: 'Beginner', unlocked: true, href: '/learn' },
      { title: 'Machine Learning Basics', progress: 74, xp: 980, minutes: 32, difficulty: 'Beginner', unlocked: true, href: '/learn' },
      { title: 'Statistics', progress: 58, xp: 760, minutes: 28, difficulty: 'Intermediate', unlocked: true, href: '/learn' },
      { title: 'Optimization', progress: 41, xp: 620, minutes: 36, difficulty: 'Intermediate', unlocked: true, href: '/learn' },
    ],
  },
  {
    label: 'Machine Learning',
    items: [
      { title: 'Regression', progress: 66, xp: 840, minutes: 22, difficulty: 'Beginner', unlocked: true, href: '/models' },
      { title: 'Classification', progress: 61, xp: 810, minutes: 27, difficulty: 'Beginner', unlocked: true, href: '/models' },
      { title: 'Clustering', progress: 49, xp: 690, minutes: 30, difficulty: 'Intermediate', unlocked: true, href: '/datasets' },
      { title: 'Decision Trees', progress: 35, xp: 520, minutes: 21, difficulty: 'Intermediate', unlocked: true, href: '/models' },
      { title: 'Random Forests', progress: 22, xp: 360, minutes: 26, difficulty: 'Advanced', unlocked: true, href: '/models' },
      { title: 'SVM', progress: 18, xp: 310, minutes: 33, difficulty: 'Advanced', unlocked: false, href: '/models' },
    ],
  },
  {
    label: 'Deep Learning',
    items: [
      { title: 'Neural Networks', progress: 75, xp: 1170, minutes: 42, difficulty: 'Intermediate', unlocked: true, href: '/neural-networks' },
      { title: 'CNNs', progress: 46, xp: 720, minutes: 35, difficulty: 'Intermediate', unlocked: true, href: '/computer-vision' },
      { title: 'RNNs', progress: 31, xp: 540, minutes: 34, difficulty: 'Advanced', unlocked: true, href: '/nlp' },
      { title: 'Transformers', progress: 82, xp: 1320, minutes: 51, difficulty: 'Advanced', unlocked: true, href: '/transformers' },
      { title: 'Attention', progress: 68, xp: 980, minutes: 39, difficulty: 'Advanced', unlocked: true, href: '/transformers' },
    ],
  },
  {
    label: 'Generative AI',
    items: [
      { title: 'LLMs', progress: 77, xp: 1240, minutes: 45, difficulty: 'Advanced', unlocked: true, href: '/transformers' },
      { title: 'Diffusion Models', progress: 45, xp: 820, minutes: 41, difficulty: 'Advanced', unlocked: true, href: '/generative-ai' },
      { title: 'GANs', progress: 20, xp: 360, minutes: 38, difficulty: 'Research', unlocked: true, href: '/generative-ai' },
      { title: 'Prompt Engineering', progress: 63, xp: 880, minutes: 29, difficulty: 'Intermediate', unlocked: true, href: '/prompt-engineering' },
      { title: 'AI Agents', progress: 66, xp: 930, minutes: 43, difficulty: 'Advanced', unlocked: true, href: '/agents' },
    ],
  },
  {
    label: 'AI Infrastructure',
    items: [
      { title: 'GPUs', progress: 44, xp: 650, minutes: 30, difficulty: 'Intermediate', unlocked: true, href: '/mlops' },
      { title: 'MLOps', progress: 53, xp: 760, minutes: 48, difficulty: 'Advanced', unlocked: true, href: '/mlops' },
      { title: 'Vector Databases', progress: 57, xp: 790, minutes: 36, difficulty: 'Intermediate', unlocked: true, href: '/vector-databases' },
      { title: 'Model Serving', progress: 33, xp: 510, minutes: 40, difficulty: 'Advanced', unlocked: true, href: '/mlops' },
      { title: 'Fine-Tuning', progress: 61, xp: 840, minutes: 46, difficulty: 'Advanced', unlocked: true, href: '/fine-tuning' },
    ],
  },
  {
    label: 'Interactive Labs',
    items: [
      { title: 'Transformer Lab', progress: 82, xp: 1320, minutes: 52, difficulty: 'Advanced', unlocked: true, href: '/transformers' },
      { title: 'RAG Simulator', progress: 70, xp: 1010, minutes: 44, difficulty: 'Intermediate', unlocked: true, href: '/rag' },
      { title: 'Diffusion Sandbox', progress: 45, xp: 820, minutes: 41, difficulty: 'Advanced', unlocked: true, href: '/generative-ai' },
      { title: 'Neural Network Builder', progress: 75, xp: 1170, minutes: 42, difficulty: 'Intermediate', unlocked: true, href: '/neural-networks' },
      { title: 'Agent Playground', progress: 66, xp: 930, minutes: 43, difficulty: 'Advanced', unlocked: true, href: '/agents' },
    ],
  },
];

export const learningModes = [
  { id: 'visual', label: 'Visual Learning', depth: 'conceptual', intensity: 42, layout: 'diagram-first' },
  { id: 'sandbox', label: 'Interactive Sandbox', depth: 'hands-on', intensity: 78, layout: 'controls-first' },
  { id: 'guided', label: 'Guided Tutorial', depth: 'stepwise', intensity: 54, layout: 'lesson-first' },
  { id: 'research', label: 'Research Mode', depth: 'paper-grade', intensity: 91, layout: 'evidence-first' },
  { id: 'engineer', label: 'Engineer Mode', depth: 'implementation', intensity: 84, layout: 'code-first' },
  { id: 'beginner', label: 'Beginner Mode', depth: 'plain-language', intensity: 28, layout: 'comfort-first' },
  { id: 'challenge', label: 'Challenge Mode', depth: 'validation', intensity: 96, layout: 'score-first' },
  { id: 'code', label: 'Code-First Mode', depth: 'developer', intensity: 88, layout: 'editor-first' },
];

export const aiModels = [
  { id: 'gpt4', name: 'GPT-4', family: 'Decoder Transformer', params: '1T+', context: '128K', flow: ['tokens', 'decoder stack', 'attention heads', 'logits', 'tool calls'], style: 'balanced reasoning' },
  { id: 'claude', name: 'Claude', family: 'Constitutional Assistant', params: 'large', context: '200K+', flow: ['safety policy', 'long context', 'reasoning plan', 'response draft'], style: 'careful synthesis' },
  { id: 'gemini', name: 'Gemini', family: 'Multimodal Transformer', params: 'mixture', context: '1M+', flow: ['text', 'image/audio frames', 'cross-modal attention', 'tool routing'], style: 'multimodal fusion' },
  { id: 'llama', name: 'LLaMA', family: 'Open-weight Decoder', params: '8B-405B', context: 'variable', flow: ['token stream', 'decoder layers', 'adapter hooks', 'local inference'], style: 'efficient customization' },
  { id: 'mistral', name: 'Mistral', family: 'Sparse/efficient LLM', params: '7B-large', context: '32K+', flow: ['sliding window', 'grouped attention', 'fast decode'], style: 'low-latency reasoning' },
  { id: 'deepseek', name: 'DeepSeek', family: 'Reasoning LLM', params: 'MoE', context: '64K+', flow: ['problem parse', 'reasoning trace', 'verification', 'final answer'], style: 'deep problem solving' },
  { id: 'sd', name: 'Stable Diffusion', family: 'Latent Diffusion', params: 'UNet/VAE', context: 'prompt', flow: ['prompt embedding', 'noise latent', 'denoise steps', 'decode image'], style: 'image generation' },
  { id: 'bert', name: 'BERT', family: 'Encoder Transformer', params: '110M-340M', context: '512', flow: ['masked tokens', 'bidirectional attention', 'pooled output'], style: 'understanding' },
  { id: 'whisper', name: 'Whisper', family: 'Speech Transformer', params: '39M-1.5B', context: 'audio window', flow: ['audio frames', 'spectrogram', 'encoder', 'decoder text'], style: 'speech recognition' },
];

export const visualizationDropdowns = {
  visualization: ['Heatmap', '3D Flow', 'Matrix View', 'Attention Graph', 'Token Graph', 'Probability Flow'],
  difficulty: ['Beginner', 'Intermediate', 'Advanced', 'Research'],
  quality: ['Low', 'Medium', 'High', 'Ultra'],
  theme: ['Minimal', 'Matrix', 'Cyberpunk', 'NVIDIA', 'OpenAI', 'Research Lab'],
};

export const workspacePanels = [
  { id: 'simulation', title: 'Simulation', status: 'running', span: 'lg:col-span-2', content: 'Live engine output with animated state transitions and parameter sync.' },
  { id: 'tutor', title: 'AI Tutor', status: 'listening', span: '', content: 'Voice-ready mentor explains the active architecture and suggests next steps.' },
  { id: 'notes', title: 'Notes', status: 'autosaved', span: '', content: 'Capture hypotheses, diagrams, and quiz corrections in your learning notebook.' },
  { id: 'terminal', title: 'AI Terminal', status: 'ready', span: 'lg:col-span-2', content: 'Type commands like simulate transformer, launch rag-lab, or visualize embeddings.' },
  { id: 'architecture', title: 'Architecture Viewer', status: 'interactive', span: '', content: 'Inspect model layers, routing, memory, tools, and inference stages.' },
];

export const terminalCommands = [
  { command: 'simulate transformer', output: 'Launching token flow, attention beams, logits, and sampling replay.' },
  { command: 'launch rag-lab', output: 'Opening chunking, embedding, vector retrieval, and context injection pipeline.' },
  { command: 'open diffusion', output: 'Preparing denoising timeline, latent traversal, and sampler comparison.' },
  { command: 'visualize embeddings', output: 'Rendering vector clusters, semantic similarity, and nearest-neighbor scores.' },
  { command: 'spawn agent team', output: 'Creating planner, retriever, critic, and executor agents with shared memory.' },
];

export const recommendations = [
  { title: 'Replay masked attention', reason: 'Your transformer mastery is high, but masking needs one more challenge.', href: '/transformers' },
  { title: 'Run RAG ranking drill', reason: 'Retrieval scores are your fastest path to grounded AI fluency.', href: '/rag' },
  { title: 'Try diffusion denoising', reason: 'Generative AI progress is below your LLM track.', href: '/generative-ai' },
  { title: 'Complete safety eval', reason: 'Unlock the AI Safety certification branch.', href: '/ai-safety' },
];

export const marketplaceItems = [
  { title: 'Transformer Architecture Pack', type: 'architecture', downloads: '18K', price: 'Free' },
  { title: 'RAG Enterprise Workflow', type: 'workflow', downloads: '9.4K', price: 'Free' },
  { title: 'Cyber Matrix Theme', type: 'theme', downloads: '12K', price: 'Free' },
  { title: 'Diffusion Sampler Studio', type: 'simulation', downloads: '6.7K', price: 'Pro' },
  { title: 'Agent Ops Plugin', type: 'plugin', downloads: '5.1K', price: 'Pro' },
  { title: 'Vision Segmentation Lab', type: 'tutorial', downloads: '7.8K', price: 'Free' },
];

export const collaborators = [
  { name: 'Aarav', role: 'RAG lab', status: 'chunking documents' },
  { name: 'Mira', role: 'Transformer lab', status: 'annotating attention' },
  { name: 'Kenji', role: 'Agent arena', status: 'debugging tools' },
  { name: 'Sofia', role: 'Safety lab', status: 'running evals' },
];

export const modelMechanics = [
  { stage: 'Input parsing', detail: 'User text, images, audio, or files are converted into model-readable tokens or embeddings.' },
  { stage: 'Context assembly', detail: 'System instructions, conversation history, retrieved documents, and tool outputs are packed into context.' },
  { stage: 'Attention routing', detail: 'The model computes relationships across context so useful signals can influence the next hidden state.' },
  { stage: 'Reasoning and tool use', detail: 'Assistant models may plan, call tools, inspect outputs, and revise their next action.' },
  { stage: 'Sampling or decoding', detail: 'Logits become probabilities; temperature, top-p, and policies shape the generated response.' },
  { stage: 'Safety and formatting', detail: 'Responses pass through instruction hierarchy, safety policy, grounding checks, and output formatting.' },
];

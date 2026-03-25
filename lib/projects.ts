// lib/projects.ts
export type Project = {
  id: string
  tag: string
  title: string
  description: string
  url?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'longitude-marine',
    tag: 'E-Commerce · Full Stack',
    title: 'Longitude Marine',
    description:
      'Full-stack parts catalog and e-commerce platform for a marine supply company. Built end to end — product database, search, and checkout — and shipped to production.',
    url: 'https://longitudemarine.com',
    featured: true,
  },
  {
    id: 'cop-completer',
    tag: 'Machine Learning · Android',
    title: 'Complete Operating Picture',
    description:
      'NLP/BERT-powered Android app for military situational awareness. Led the team and trained the MobileBERT model using TensorFlow Lite for on-device inference.',
    featured: false,
  },
  {
    id: 'ar-furniture',
    tag: 'AR · Android · Unity',
    title: 'Augmented Reality App',
    description:
      'AR furniture visualization app for Android built in Unity. Led an Agile team through full product delivery — from concept to working app.',
    featured: false,
  },
  {
    id: 'discord-bot',
    tag: 'Python · Automation',
    title: 'Discord Demo Bot',
    description:
      'Python automation bot running on Linux. Resolved architecture-level issues at scale and built reliable automation workflows on top of the Discord API.',
    featured: false,
  },
  {
    id: 'opneclaw',
    tag: 'AI · Agentic Systems',
    title: 'OpenClaw / ArbTrade',
    description:
      'Autonomous agentic AI system with Discord and SMS integration. Handles tasks independently — routing, notifications, and decision-making without human-in-the-loop.',
    featured: false,
  },
]

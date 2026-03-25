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
      'Full-stack parts catalog and e-commerce platform for a marine supply company. Built end to end — from product database to checkout.',
    url: 'https://longitudemarine.com',
    featured: true,
  },
  {
    id: 'project-2',
    tag: 'Full Stack',
    title: 'Coming Soon',
    description: 'Resume project — to be added.',
    featured: false,
  },
  {
    id: 'project-3',
    tag: 'Full Stack',
    title: 'Coming Soon',
    description: 'Resume project — to be added.',
    featured: false,
  },
]

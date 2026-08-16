import {
  HiOutlineBolt,
  HiOutlineCommandLine,
  HiOutlineShieldCheck,
  HiOutlineCpuChip,
  HiOutlinePuzzlePiece,
  HiOutlineSparkles,
} from 'react-icons/hi2'

export const whyFeatures = [
  {
    icon: HiOutlineBolt,
    title: 'Stay in flow',
    description: 'No tab-switching to a browser. Prompts, diffs, and results live right next to your code.',
  },
  {
    icon: HiOutlineCpuChip,
    title: 'Full project context',
    description: 'Claude can read across your entire repository, not just the file you have open.',
  },
  {
    icon: HiOutlineCommandLine,
    title: 'Terminal-native',
    description: 'Runs in the integrated terminal you already use — no extra windows, no context switching.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'You approve every change',
    description: 'Diff-based edits mean nothing lands in your codebase without your review.',
  },
  {
    icon: HiOutlinePuzzlePiece,
    title: 'Extensible via MCP',
    description: 'Plug in Model Context Protocol servers to connect docs, tickets, and internal tools.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Built for real codebases',
    description: 'Designed for large, messy, real-world projects — not just toy demos.',
  },
]

export default whyFeatures

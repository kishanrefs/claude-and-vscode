export const faqs = [
  {
    question: 'Do I need a paid plan to use Claude in VS Code?',
    answer:
      'Claude Code works with Claude Pro, Max, Team, and Enterprise plans, as well as pay-as-you-go API billing through the Anthropic Console. A free trial is available for new accounts.',
  },
  {
    question: 'Which languages and frameworks does it support?',
    answer:
      'Claude works with essentially any text-based language or framework — JavaScript/TypeScript, Python, Go, Rust, Java, and more — since it reasons over your actual source files rather than relying on a fixed language server.',
  },
  {
    question: 'Can I control how much autonomy Claude has?',
    answer:
      'Yes. Permission modes range from "ask before every change" to fully autonomous runs, and you can always review diffs before they\'re applied to your files.',
  },
  {
    question: 'Does my code get used to train the model?',
    answer:
      'By default, code from Claude Code sessions is not used to train Anthropic\'s models. Check Anthropic\'s current data usage policy for the specifics that apply to your plan.',
  },
  {
    question: 'Will it work alongside GitHub Copilot or other extensions?',
    answer:
      'Yes — Claude Code runs independently in its own panel and terminal session, so it plays nicely alongside linters, formatters, and other AI extensions you already have installed.',
  },
]

export default faqs

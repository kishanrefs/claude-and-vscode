export const setupSteps = [
  {
    number: '01',
    title: 'Install the extension',
    description:
      'Open the Extensions panel in VS Code (⇧⌘X / Ctrl+Shift+X), search for "Claude Code," and install the official extension from Anthropic.',
  },
  {
    number: '02',
    title: 'Sign in with your account',
    description:
      'Launch the extension and sign in with your Claude.ai or Anthropic Console account. Your plan\'s usage limits carry straight over.',
  },
  {
    number: '03',
    title: 'Open a project & the terminal',
    description:
      'Open any folder in VS Code, then open the integrated terminal (⌃` / Ctrl+`) and run `claude` to start a session scoped to that project.',
  },
  {
    number: '04',
    title: 'Give it a task',
    description:
      'Describe what you want in plain English — "add form validation to the signup page" — and watch Claude read the relevant files and propose a change.',
  },
  {
    number: '05',
    title: 'Review & apply diffs',
    description:
      'Every edit shows up as a reviewable diff. Accept, tweak, or reject changes file-by-file before anything touches your working tree.',
  },
  {
    number: '06',
    title: 'Level up with custom commands',
    description:
      'Create slash commands and CLAUDE.md instructions tailored to your repo so Claude follows your team\'s conventions automatically.',
  },
]

export default setupSteps

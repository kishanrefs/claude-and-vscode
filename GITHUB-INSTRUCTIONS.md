# Publishing ClaudeAndVSCode.com — GitHub + Netlify

This is your reference guide for how this project gets from your laptop onto
the internet. It covers the one-time setup and the everyday workflow you'll
use every time you want to publish a change.

The short version: you edit files → `git push` → Netlify notices and
rebuilds the live site automatically. No manual "upload" step, ever again,
once this is wired up.

---

## 0. What's already been done for you

On this machine, the following is already set up:

- **Git** is installed (`git version 2.50.1`, comes with macOS).
- **GitHub CLI** (`gh`) is installed at `~/.local/bin/gh` and added to your
  PATH via `~/.zshrc`. Open a *new* terminal tab if `gh` isn't found.
- Your global git identity is set:
  ```
  git config --global user.name   # → kishanrefs
  git config --global user.email  # → kishanrefs@users.noreply.github.com
  ```
  This is a GitHub-provided "noreply" email — commits are correctly
  attributed to your GitHub account without exposing your real email
  address in the public commit history.
- This project folder has been initialized as a git repository (`git init`)
  with an initial commit already made on the `main` branch.
- A `netlify.toml` file has been added to the project root. It tells
  Netlify how to build the site and — importantly — includes a redirect
  rule so that client-side routes like `/about` and `/contact` work
  correctly when someone refreshes the page or links directly to them
  (without this, a single-page app like this one would show a 404 on
  any page that isn't the homepage).

**Update:** as of this setup session, steps 1 and 2 below are already
done — `gh` is authenticated as `kishanrefs`, and your code is pushed to:

> **https://github.com/kishanrefs/claude-and-vscode**

Sections 1–2 are kept below as a reference (e.g. if you set this up again
on a new machine). What's still outstanding is **Section 3: connecting
Netlify** — that one needs your login in the Netlify dashboard, which
isn't something that can be done from the terminal.

---

## 1. Authenticate the GitHub CLI (one-time)

You only need to do this once per machine.

```bash
gh auth login --hostname github.com --git-protocol https --web
```

This will print something like:

```
! First copy your one-time code: XXXX-XXXX
Open this URL to continue in your web browser: https://github.com/login/device
```

1. Open the printed URL in your browser.
2. Make sure you're signed into your **new** GitHub account.
3. Enter the one-time code shown in your terminal.
4. Click **Authorize**.

Back in the terminal, `gh` will detect the approval and confirm you're
logged in. Verify anytime with:

```bash
gh auth status
```

You should see something like `Logged in to github.com account kishanrefs`.

> **Why the browser flow instead of a password?** GitHub removed password
> authentication for git operations in 2021. The two supported options now
> are OAuth device login (what we just did) or a Personal Access Token.
> The device login is simpler and doesn't require you to generate or store
> a token — `gh` handles credential storage for you and configures git to
> use it automatically.

---

## 2. Create the GitHub repository and push your code

Once `gh auth status` shows you're logged in, run this from the project
folder:

```bash
cd "/Users/kishan/Desktop/Repos/Testing/My First Claude Website"

gh repo create claude-and-vscode --public --source=. --remote=origin --push
```

What this one command does:
- Creates a new **public** repository named `claude-and-vscode` under your
  GitHub account.
- Sets it as the `origin` remote for this local repo.
- Pushes your existing `main` branch and its commit history to it.

When it finishes, it prints the repository URL, something like:
```
https://github.com/kishanrefs/claude-and-vscode
```

Open that link — your code should now be visible on GitHub.

### If you'd rather create the repo manually (no CLI)

If you prefer clicking through the website instead of using `gh repo create`:

1. Go to [github.com/new](https://github.com/new).
2. **Repository name:** `claude-and-vscode`
3. **Visibility:** Public
4. **Do NOT** check "Add a README", "Add .gitignore", or "Choose a license"
   — this repo already has commits, and starting the GitHub repo empty
   avoids a merge conflict on first push.
5. Click **Create repository**.
6. GitHub will show you a page with setup commands. Since your project
   already has commits, use the "…or push an existing repository from the
   command line" section, which looks like this (run from the project
   folder):

   ```bash
   git remote add origin https://github.com/kishanrefs/claude-and-vscode.git
   git branch -M main
   git push -u origin main
   ```

   The first push over HTTPS will open a browser window asking you to
   authorize git — approve it, and the push will continue.

Either method gets you to the same place: your code, on GitHub, on the
`main` branch.

---

## 3. Connect Netlify to your GitHub repository

This is the step that turns "code on GitHub" into "a live website," and
sets up automatic deployments for every future push.

1. Log into [app.netlify.com](https://app.netlify.com).
2. Click **Add new site → Import an existing project**.
3. Choose **Deploy with GitHub**.
4. Authorize the Netlify GitHub App if prompted (first time only). You can
   grant it access to **all repositories** or just **this one**
   (`claude-and-vscode`) — either is fine, "only this repository" is the
   more locked-down choice if you'd rather be selective.
5. Select the **`claude-and-vscode`** repository from the list.
6. Netlify will auto-detect the build settings from `netlify.toml`, but
   double check they read:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Click **Deploy site**.

Netlify will run the build (installs dependencies, runs `npm run build`,
publishes the `dist` folder) and give you a live URL like
`https://random-name-12345.netlify.app` within a minute or two.

### Renaming the Netlify subdomain

Under **Site configuration → General → Site details → Change site name**,
you can pick a friendlier subdomain (e.g. `claudeandvscode.netlify.app`)
before you connect a custom domain.

### Connecting your real domain (claudeandvscode.com)

Once you own/control the `claudeandvscode.com` domain:

1. In Netlify: **Site configuration → Domain management → Add a custom domain**.
2. Enter `claudeandvscode.com` and follow the prompts.
3. Netlify will show you DNS records to add at your domain registrar
   (either an **A record** pointing at Netlify's load balancer IP, or,
   more simply, changing your domain's **nameservers** to Netlify's if you
   want Netlify to manage DNS entirely).
4. DNS changes can take anywhere from a few minutes to ~24 hours to
   propagate. Netlify auto-provisions a free HTTPS certificate once the
   domain resolves correctly.

---

## 4. Your everyday workflow, going forward

This is the part you'll actually use day to day. After the one-time setup
above, publishing a change is three commands:

```bash
git add -A
git commit -m "Describe what you changed"
git push
```

That's it. Netlify is watching the `main` branch on GitHub — every push
triggers a new build and deploy automatically, usually live within 1–2
minutes. You can watch build progress under the **Deploys** tab in the
Netlify dashboard.

### A quick cheat-sheet

| I want to...                          | Command                                      |
|----------------------------------------|-----------------------------------------------|
| See what's changed but not committed   | `git status`                                  |
| See the actual line-by-line changes    | `git diff`                                    |
| Stage all changed files                | `git add -A`                                  |
| Commit staged changes                  | `git commit -m "message"`                     |
| Push commits to GitHub (triggers deploy)| `git push`                                    |
| Pull down changes (e.g. from another machine) | `git pull`                             |
| See commit history                     | `git log --oneline`                           |
| Run the site locally before pushing    | `npm run dev`                                 |
| Test a production build locally        | `npm run build && npm run preview`            |

### A sane habit

Before pushing something you're not 100% sure about, run it locally first:

```bash
npm run dev
```

and check it in the browser at `http://localhost:5173`. Netlify will build
whatever you push, mistakes included — there's no review gate unless you
add one (see "Optional: preview deploys" below).

---

## 5. Optional: preview deploys for pull requests

If you ever want to review a change before it goes live (useful once
you're not the only person touching this repo, or just for your own
peace of mind on bigger changes), you can work on a branch instead of
pushing straight to `main`:

```bash
git checkout -b my-change
# ... edit files ...
git add -A
git commit -m "Try out a new hero layout"
git push -u origin my-change
```

Then open a Pull Request on GitHub (`gh pr create` or via the website).
Netlify automatically builds a **Deploy Preview** for every PR — a
throwaway URL you can click through before merging into `main` and going
live. This is on by default once Netlify is connected; no extra setup
needed.

---

## Troubleshooting

**`gh: command not found`**
Open a new terminal tab/window (PATH changes only apply to new shells), or
run `export PATH="$HOME/.local/bin:$PATH"` in your current one.

**`git push` asks for a username and password, and your password doesn't work**
GitHub no longer accepts account passwords for git operations. Make sure
you've completed Step 1 (`gh auth login`) — once authenticated, `gh`
configures git's credential helper for you and this prompt shouldn't
appear again. If it does, run `gh auth setup-git`.

**`! [rejected] main -> main (fetch first)`**
This means the remote has commits your local repo doesn't (e.g. you edited
something directly on GitHub.com, or initialized the repo with a README).
Run `git pull --rebase origin main` then `git push` again.

**Netlify build fails with a Node version error**
Add a `.nvmrc` file to the project root containing the Node version you
want Netlify to use (e.g. `20`), or set `NODE_VERSION` under **Site
configuration → Environment variables** in Netlify.

**Site loads at `/` but `/about` or `/contact` shows a Netlify 404**
This means `netlify.toml`'s redirect rule wasn't picked up — check the
file is present in the repo root and wasn't accidentally excluded by
`.gitignore`, then trigger a new deploy (**Deploys → Trigger deploy →
Clear cache and deploy site**).

**You want to check what Netlify actually built**
Every deploy has its own log under the **Deploys** tab — click any deploy
to see the full build output, useful for debugging a failed build.

**You committed something you shouldn't have (e.g. a secret)**
Don't just delete it in a new commit — it stays in git history. Stop and
ask for help rewriting history (`git filter-repo` or GitHub's secret
scanning tools) rather than pushing further commits on top.

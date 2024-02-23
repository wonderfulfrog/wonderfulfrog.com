---
title: My vim setup
draft: false
date: 2021-04-18T20:24:10.177Z
excerpt: Everybody does it differently.
tags: ["vim", "development"]
---

{% image "https://cdn.wonderfulfrog.com/vimsetup.png", "A screenshot of my `vim` setup in action.", "" %}

I thought it would be fun to talk about my `vim` configuration. Everyone does it differently, and I wanted to toss my hat into the ring.

I don’t claim to have the best setup, but it works great for JavaScript (React, node) and TypeScript development.

I keep my `.vimrc` and other related files up to date on [GitHub](https://github.com/devinwl/dotfiles).

This has been a helpful exercise in evaluating what my configuration options do, and which ones I can get rid of. After a while these things tend to accumulate a lot of cruft.

I pledge to keep this page up to date as I add (or remove) changes to it.

## nvim

I use [Neovim](https://neovim.io) (`nvim`) instead of `vim` because it has support for fancier plugins, and it handles asynchronous actions better than `vim`, in my experience.

Plus it has “neo” in the name, and that’s plain cool.

## Basics

This section captures what I would consider to be the basics of vim: clipboard behaviour, backspace behaviour, spellchecking, all that jazz.

```vim
set nocompatible
```

This tells vim to use `vim` settings rather than `vi`. To be honest I don’t full understand what this does, but see it enough in other `.vimrc` I decided to include it.

```vim
set number
set relativenumber
```

This enables line numbers. You’re gonna need those if you’re developin’. `relativenumber` shows relative line numbers from the currently highlighted line.

```vim
set title
```

Sets the terminal window’s title to be the file currently being edited (I think).

```vim
set scrolloff=2
```

This changes the scroll offset, or in other words when `vim` decides to start scrolling. In my case, once I am on the 2nd to last line of my screen and I want to scroll down (or up), it will scroll the screen upwards and move to the next line.

```vim
set backspace=indent,eol,start
```

This makes the BACKSPACE key behave in a sane way while using `vim`. I don’t know why this behaviour isn’t default — probably some holdover from the “old days”.

```vim
set nowrap
```

No linewrapping allowed. I switch around this setting from time to time.

```vim
set noerrorbells
set belloff=all
```

I don’t see how playing a sound when there is an error is helpful — like when I try to scroll past the end or beginning of the file. Turn that off.

```vim
set hlsearch
```

This will highlight all search matches on any open buffers, like when using `/` to search for text.

```vim
set incsearch
```

As I start typing when using `/`, it will highlight things as they are matched (before pressing ENTER).

```vim
set signcolumn=yes
```

This enables the sign column in `vim`, which can be used by plugins to highlight lines with errors, warnings, and so on.

```vim
set hidden
```

`vim` by default will throw away buffers when you switch away from them. This stops that behaviour. A reasonable expectation with any modern text editor.

```vim
set nobackup
set nowritebackup
```

`vim` likes to create backup files (adding `~` to the extension) and I don’t like them. I use version control software and I’m content with that.

```vim
set cmdheight=2
```

This gives me more breathing room in the command window.

```vim
set shortmess+=c
```

Shortens messages from `vim`.

```vim
set path=$PWD/**
```

When running searches in `vim`, set the project directory to where I currently am.

```vim
set showmode
```

Shows which mode `vim` is currently in on the command window. I’m forgetful.

```vim
set ignorecase
set smartcase
```

Makes search patterns case-insensitive. Except when the search pattern contains uppercase characters (`smartcase`).

```vim
set clipboard=unnamed
```

Removes `vim`’s separate clipboard, and “shares” it between `vim` and the outside world (your computer).

```vim
set cursorline
```

Highlights the line the cursor is currently on. Makes it easier for me to find the cursor.

## Tabs and spaces

```vim
set tabstop=2
set shiftwidth=2
set softtabstop=2
set expandtab
set shiftround
set smarttab
set smartindent
set autoindent
set copyindent
```

I don’t care if we use tabs or spaces anymore, I’ll use what the project at hand wants.

Tab uses spaces, and each tab is 2 spaces.

If I’m at a certain indentation level, then these options ensure I maintain it and it always a multiple of `shiftwidth`.

## Spellchecking

```vim
autocmd FileType gitcommit setlocal spell
autocmd FileType markdown,md,mdx setlocal spell
```

When I am writing a `git` commit, or inside a Markdown file I want to add spellchecking.

## Forcing myself to learn hjkl

```vim
noremap <Up> <NOP>
noremap <Down> <NOP>
noremap <Left> <NOP>
noremap <Right> <NOP>

inoremap <Down> <NOP>
inoremap <Left> <NOP>
inoremap <Right> <NOP>
inoremap <Up> <NOP>
```

`hjkl` is essential way to move around in `vim`. You don’t have to move your hands from home row. It’s hard to learn at first, but if you disable the arrow keys, you start to learn pretty quick.

## netrw

```vim
let g:netrw_banner = 0
```

This hides the giant help banner when using `netrw` (`:E`). I use `netrw` to move around sometimes, when CTRL + P doesn’t cut it.

## Split movement

```vim
nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>
```

I use splits a lot and this makes it easier to move around between them.

## Plugins

```vim
call plug#begin('~/.vim/plugged')
```

I use [vim-plug](https://github.com/junegunn/vim-plug) to manage all my plugins.

### auto-pairs

Adds pairs of quotes, brackets, etc. If I type `”`, it’ll add a closing quote. Works with `()` and `{}`.

```vim
let g:AutoPairsMultilineClose = 0
```

This disables the default behaviour of trying to close any pair even if it was on another line. When writing code blocks `{}`, it would jump to the next closing `}` if I was inside another code block. It might make sense to someone, but for me it just annoyed me. Thankfully it can be switched off!

### vim-surround

Took me a while to get, but once I did I can’t imagine life without it. Wrap words/quotes/code blocks/whatever in more quotes or characters. A mnemonic from my coworker:

```
(y)olo (s)urround (i)n (w)ord/(“)quote/etc
```

### vim-commentary

I use `gc` all the time. Comment entire blocks or lines super quick. Easy to remember.

### vim-polyglot

Syntax highlighting for various languages. I use JavaScript (and adjacent stuff like JSON) 99% of the time, but nice to have for shell scripts, Ruby, and so on.

### fzf

One day I might learn how to use `vimgrep`, but for now I have `fzf`. Requires extra binaries. I thought I needed NERDTree to move around, but `fzf` has got my back.

```vim
nnoremap <silent> <c-p> :GFiles --cached --others --exclude-standard<cr>
```

This makes CTRL + P filter files that are part of the project’s `.gitignore` by default.

### vim-fugitive

I’ve got this installed but don’t use it much. It adds `git` support right in `vim`, but I almost always have a second tab open in my terminal explicitly for `git` operations.

### vim-rhubarb

Like the above, it offers a neat feature, but I keep forgetting to use it. It will create a link directly to the line you’re on in `vim`.

### coc.nvim

I bet this one will garner controversy. Getting intelligent autocomplete in `vim` was never something it was intended to do, but `coc` in combination with `nvim` gets us there. For it to function “just so” requires extra configuration, which I’ll highlight below.

```vim
let g:coc_global_extensions = [
\   'coc-tsserver',
\   'coc-json',
\   ]
```

This runs these `coc` plugins all the time. Since I’m always mucking about in JavaScript, this isn’t a big deal. It’s smart enough to know when I’m *not* in JavaScript and to not complain, which works for me.

```vim
if isdirectory('./node_modules') && isdirectory('./node_modules/prettier')
  let g:coc_global_extensions += ['coc-prettier']
endif

if isdirectory('./node_modules') && isdirectory('./node_modules/eslint')
  let g:coc_global_extensions += ['coc-eslint']
endif
```

This tells `coc` to load up `eslint` and `prettier` extensions if I’m using them in my project. Super handy to automatically load up `prettier` only when I need it.

```vim
nnoremap <silent> K :call CocAction('doHover')<CR>
```

Rarely do I need to trigger `coc` on its own, but this is for the odd time. Nice for when looking up variable types (using TypeScript), or method arguments.

```vim
command! -nargs=0 Prettier :CocCommand prettier.formatFile
```

Shortcut to run `prettier` using `:Prettier`. I don’t use this often since I have it configured to run on save.

### coc-settings.json

```json
"suggest.noselect": false,
```

This option pre-selects the first option in the autocomplete list.

```json
"eslint.autoFixOnSave": true,
"eslint.filetypes": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
```

This runs `eslint` on save, and ensures that the files in `filetypes` run `eslint`.

```json
“coc.preferences.formatOnSaveFiletypes": ["markdown", "mdx", "javascript", "javascriptreact", "typescript", "typescriptreact"],
```

This runs `prettier` for me on these filetypes when saving. Somehow this doesn’t interfere with `eslint`, which is magic to me.

```json
"coc.preferences.jumpCommand": "vsplit"
```

When using commands like `gd` (goto definition), it will open in a new `:vsplit` by default.

## Theme

I saved the best for last.

I currently use the [Rigel](https://rigel.netlify.app) theme.

```vim
set statusline=%f%=%m%r%h%w%y[%04l,%04v]
```

This sets up my status line to show me what I need to know:

* The file I’m editing
* A marker if the file has been modified but not saved
* What language mode I’m in
* What line I’m on
* What column I’m on

```vim
highlight Comment cterm=italic gui=italic
```

My font of choice is [Operator Mono](https://www.typography.com/fonts/operator/overview), and it has beautiful cursive italics that I want to see. Anything comments in the file (or certain keywords) are converted into *italics*.

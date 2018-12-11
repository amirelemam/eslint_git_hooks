## ESlint + Git Hooks

This project has the basic config for ESLint with ES6. You can configure it to be used in combination with Git Hooks.
By doing so, every time you commit changes to Git, Git Hooks will run ESLint and, if any syntax error is found, ESLint will accuse it and your changes won't be committed to the Git repository.

### Instalation

#### For a new project

I assume you're creating a new project based on this project.

1. Install dependencies (it must be globally)

```bash
$ npm install -g
```

2. Start a git repository

```bash
$ git init
```

3. Add ESLint command to the end of file `.git/hooks/precommit.sample`

```bash
$ echo 'eslint src' >> .git/hooks/precommit.sample
```

4. Rename `.git/hooks/precommit.sample` to `.git/hooks/precommit`

```bash
$ mv .git/hooks/precommit.sample .git/hooks/precommit
```

#### For an existing project

1. Copy .eslintrc to your project folder

```bash
$ cp .eslintrc /path/to/project/folder/
```

2. Navigate to the project folder

```bash
$ cd /path/to/project/folder/
```

3. Install dependencies

```bash
$ npm install -g --save eslint babel-eslint
```

4. Add ESLint command to the end of file `.git/hooks/precommit.sample`

```bash
$ echo 'eslint src' >> .git/hooks/precommit.sample
```

5. Rename `.git/hooks/precommit.sample` to `.git/hooks/precommit`

```bash
$ mv .git/hooks/precommit.sample .git/hooks/precommit
```

### Usage

Every time you commit, git hooks will automatically run ESLint.
Usual workflow:

1. Change file `/path/to/file/file.js`

2. Add file to be committed

```bash
$ git add /path/to/file/file.js
```

3. Commit file

```bash
$ git commit -m "Your commit message here"
```

If there's any syntax error, ESLint will accuse it and won't let you commit your changes to the Git repository.

### License

These files are licensed under the [MIT License](LICENSE)

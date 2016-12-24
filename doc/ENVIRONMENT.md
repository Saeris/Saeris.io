# Setting Up Your Environment

This guide will help you get your development environment set up. If you already have an existing workflow for developing web applications built with node.js, you can skip to the [recommended tools](#tools) section.

## <a name="contents"></a> Table of Contents:

  - [Getting Started](#start)
  - [Setting up Git](#git)
  - [Setting up Node](#node)
  - [Setting up Atom (Optional)](#atom)
  - [Setting up your GitHub account](#github)
  - [Setting up GitKraken (Optional)](#kraken)
  - [Cloning the Repository](#repo)
  - [Installing Project Dependencies](#dependencies)
  - [Running the Application](#run)
  - [Mobile Debugging with Firefox Developer Edition (Optional)](#mobile)
  - [Building the Application](#build)
  - [Committing Your Changes](#commit)
  - [Creating a Feature Branch](#branch)
  - [Merging a Feature Branch](#merge)
  - [Adding New Dependencies](#add)
  - [Recommended Tools](#tools)

> *[Return to Directory](README.md)*

## <a name="start"></a> Getting Started

This guide assumes that you are coming onto the project with a new machine running Windows. Links to documentation for other platforms will be provided, but all of the tools we use are platform independent.

### Downloading the Tools

- Git - Used for source control and interacting with repositories.
  - Windows: https://git-scm.com/download/win
  - OS X: https://git-scm.com/download/mac
  - Linux: https://git-scm.com/download/linux

- Node.js - JavaScript environment essential to our development process.
  - All Platorms: https://nodejs.org/en/download/current/
    > Note: We are using Node.js v6.x, please make sure you are using a version of Node in this major version.

- Atom (Optional )- An extensible open source text edior with excellent developer tools.
  - All Platforms: https://atom.io/

- GitKraken (Optional) - A Git GUI Client that takes the pain out of source control.
  - All Platforms: https://www.gitkraken.com/download
    > Note:  Requires License for Commercial Use ($60/year).

> *[Back to Top](#contents)*

## <a name="git"></a> Setting up Git

Run the appropriate installer for your platform.

  > Note: Windows users make sure during the setup process to select "Run Git from the Windows Command Prompt", "Checkout Windows Style", and use the default values for the remaining prompts.

Once Git is installed, open a new terminal window and run the following commands:

```bash
git config --global user.name "<YOUR NAME>"
git config --global user.email <YOUR EMAIL>
```

When you commit code this information will be included in your commit, which helps us keep track of who's making contributions.

Please visit this website if you have issues or need additional information:

- Git: https://git-scm.com/doc

> *[Back to Top](#contents)*

## <a name="node"></a> Setting up Node

Run the appropriate installer for your platform. Once installation completes, open a new terminal window and run the following command:

```bash
npm install -g yarn
```

This will install the Yarn package manager globally on your system, allowing you to use the `yarn` command in your terminal. To verify that Yarn installed successfully, run the following command in your terminal:

```bash
yarn --version
```

Please visit these websites if you run into any issues or need more information:

- Node.js: https://nodejs.org/en/docs/
- Yarn: https://yarnpkg.com/en/docs/

> *[Back to Top](#contents)*

## <a name="atom"></a> Setting up Atom (Optional)

Run the appropriate installer for your platform. Once installation completes, open the application and go to `File -> Settings` to open up the application settings menu. From here we will need to do a few things:

**Editor Tab**

- Ensure the following are checked: `Show Indent Guide`, `Show Line Numbers`, `Soft Tabs`.
- Ensure Tab Length is set to `2`.

**Theme Tab**

You're welcome to use whatever theme you like, but if you would like to have a consistent viewing experience when working with your teammates, use these settings:

- UI Theme: `Atom Light`
- Syntax Theme: `Base16 Tomorrow Light`

**Install Tab**

The following packages are suggested but not necessary:

- color-picker
- markdown-preview-plus
- pigments

> Tip: Windows users can browse a folder in Explorer and open it in Atom via the context menu by right-clicking anywhere in that folder. This is the recommended way of opening the project in Atom.

For additional information on how to use Atom, please refer to the official documentation:

- Atom Documentation: https://atom.io/docs

> *[Back to Top](#contents)*

## <a name="github"></a> Setting up your GitHub account

Our project is hosted via GitHub, an online source-control service platorm. Before you can clone the project repository, you first need to have a GitHub account, request to be added to our Organization, and generate an SSH key to associate with you account for you machine.

### Creating a GitHub Account

If you do not already have a GitHub account, sign up for one here:

- GitHub Signup: https://github.com/join

> It is recommended that you create an account for your own personal use, so during signup make sure to use your personal email address. GitHub in addition to being a place to host your code is also a good way for you to get involved in the open source community and use as your personal software development portfolio.

### Generate an SSH Key for your Machine

Please refer to GitHUb's guide on SSH Keys:

- Generating an SSH Key: https://help.github.com/articles/generating-an-ssh-key/

> *[Back to Top](#contents)*

## <a name="kraken"></a> Setting up GitKraken (Optional)

For more detailed information on how to use GitKraken, please refer to the official documentation:

- FAQ: https://www.gitkraken.com/faq
- Cheat Sheet: https://www.gitkraken.com/downloads/gitkraken-cheat-sheet-v1.6.pdf
- Github User Cheat Sheet: https://www.gitkraken.com/downloads/gitkraken-for-github-cheat-sheet-v1.6.pdf

> *[Back to Top](#contents)*

## <a name="repo"></a> Cloning the Repository

Now that you have all of your programs installed and properly configured, the next step is pulling down the project source code to your local machine.

### Cloning with Git

*Coming Soon...*

### Cloning with GitKraken

*Coming Soon...*

> *[Back to Top](#contents)*

## <a name="dependencies"></a> Installing Project dependencies

Once you've cloned the repository, either navigate to the project directory within your terminal or open a new Git Bash from the right-click context menu within that directory. From there, run one of the following commands:

Using NPM:
```bash
npm install
```

Using Yarn:
```bash
yarn
```

Your package manager will proceed to download and insall all of te project dependencies listed in `package.json`. This process generally takes a few moments.

> *[Back to Top](#contents)*

## <a name="run"></a> Running the Application

When your package manager completes the dependency install process, you can start up the application by running the following command:

```bash
npm start
```

This will start a Webpack Dev Server, which will create an application bundle from the project source files and serve it over `localhost:9000` from memory (the application bundle is not written to disk).

Webpack will also watch the `./src` directory for changes, and any time a file is saved it will create a new application bundle and send a message to any conected clients to refresh the page, a process called 'Live Reload'.

> *[Back to Top](#contents)*

## <a name="mobile"></a> Mobile Debugging with Firefox Developer Edition (Optional)

*Coming Soon...*

> *[Back to Top](#contents)*

## <a name="build"></a> Building the Application

To build an application bundle to push to a live server, run the following command:

```bash
npm run build:prod
```

This will tell Webpack to build a minified application bundle using the production environment settings specified in `./webpack.config.js`, that will output to the `./dist` directory. Those files can be uploaded to any standard HTTP server to run the application.

Additional scripts can be found in the `scripts` section of `./package.json`.

> *[Back to Top](#contents)*

## <a name="commit"></a> Committing Your Changes

### Commit using Git

*Coming Soon...*

### Commit using GitKraken

*Coming Soon...*

> *[Back to Top](#contents)*

## <a name="branch"></a> Creating a Feature Branch

When working on a new feature or making significant modifications to a feature that is a dependency to multiple components elsewhere in the project, it is recommended tat you develop your changes in a feature branch.

Common modules that require a Feature Branch are:
- Any `attributes`
- Any `converters`
- Any `core`, `containers` or `resources` components
- An existing `models` class
- An existing `services` class
- An existing `routes` component

If you are creating something new in one of the above categories or working on a component belonging to it's own feature category (example: `cards`), creating a new feature branch to work in may not be necesary but is still considered best practice.

The purpose of creating a Feature Branh is to ensure that your modifications do not inadvertantly break code elsewhere in the application or cause merge conflicts with your fellow contributors.

### Creating a new branch in Git:

To create a new branch from the `master` branch, run the following command, replacing `my-feature-branch` with your branch name.

```bash
git checkout -b my-feature-branch master
```

### Creating a new branch in GitKraken:

*Coming Soon...*

> *[Back to Top](#contents)*

## <a name="merge"></a> Merging a Feature Branch

*Coming Soon...*

> *[Back to Top](#contents)*

## <a name="add"></a> Adding New Dependencies

*Coming Soon...*

> Before adding a new project dependency, please first create a new Feature branch to test the new dependency in and get approval before merging your branch.

> *[Back to Top](#contents)*

## <a name="tools"></a> Recommended Tools

*Coming Soon...*

> *[Back to Top](#contents)*

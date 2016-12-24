# Contribution Guide

## <a name="contents"></a> Table of Contents:

 - [Submission Guidelines](#submit)
 - [Coding Rules](#rules)
 - [Commit Message Guidelines](#commit)

 > *[Return to Directory](README.md)*

## <a name="submit"></a> Submission Guidelines

### Submitting an Issue

Before you submit your issue, search the archive. It may be that it was already addressed. If your issue appears to be a bug, and hasn't been reported, open a new issue. Help us to maximize the effort we can spend fixing issues and adding new features, by not reporting duplicate issues. Providing the following information will increase the chances of your issue being dealt with quickly:

* **Overview of the Issue** - If an error is being thrown, a non-minified stack trace helps.
* **Motivation or Use Case** - Explain why this is a bug for you.
* **Library Name and Version(s)** - Please indicate if it is a regression bug.
* **Browsers and Operating System** - Is this a problem with all browsers or only IE?
* **Reproduce the Error** - If possible, provide a live example (using Plunker or JSFiddle). Minimally, please provide an unambiguous set of steps to reproduce the issue.
* **Related Issues** - Has a similar issue been reported before?
* **Suggest a Fix** - If you can't fix the bug yourself, perhaps you can point to what might be causing the problem (line of code or commit).

### Submitting a Pull Request

Before you submit your pull request consider the following guidelines:

* Search the appropriate GitHub Repository for an open or closed Pull Request that relates to your submission. You don't want to duplicate effort.
* Make your changes in a new git branch:

	```shell
	git checkout -b my-fix-branch master
	```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Run the full test suite and ensure that all tests pass.
* Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit).

	```shell
	git commit -a
	```

	> Note: The optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Build your changes locally to ensure all the tests pass

	```shell
	karma start
	```

* Push your branch to GitHub:

  ```shell
  git push origin my-fix-branch
  ```

* In GitHub, send a Pull Request to the master branch.
* If we suggest changes then:
	* Make the required updates.
  	* Re-run the test suite to ensure tests are still passing.
  	* Rebase your branch and force push to your GitHub Repository (this will update your Pull Request):

  ```shell
  git rebase master -i
  git push -f
  ```

### After Your Pull Request is Merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  ```shell
  git push origin --delete my-fix-branch
  ```

* Check out the master branch:

  ```shell
  git checkout master -f
  ```

* Delete the local branch:

  ```shell
  git branch -D my-fix-branch
  ```

* Update your master with the latest upstream version:

  ```shell
  git pull --ff upstream master
  ```
> *[Back to Top](#contents)*

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs.
* All public API methods **must be documented**. To see how we document our APIs, please check out the existing docs.
* Instead of complex inheritance hierarchies, we **prefer simple objects**.

> *[Back to Top](#contents)*

## <a name="commit"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The subject line of the commit message cannot be longer 100 characters. This allows the message to be easier to read on GitHub as well as in various git tools.

### Type

Please use one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **doc**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Scope

The scope could be anything specifying the location of the commit change. For example `view-compiler` or `logger`.

### Subject

The subject contains a succinct description of the change:

* Use the imperative, present tense: "Change" not "changed" nor "changes".
* Capitalize the first letter.
* Do not add a dot (.) at the end.

###Body

The body should include the motivation for the change and contrast this with previous behavior.

###Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

> *[Back to Top](#contents)*

> Note: This document is based on the AngularJS and Blue Spire Contributor docs. Thanks to that team for putting it together.

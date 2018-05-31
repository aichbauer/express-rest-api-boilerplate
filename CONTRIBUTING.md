# Contributing to express-rest-api-boilerplate

First off, thank you for taking your time to contribute!

This document is only a guide and describes best practices to contribute to this project, and are not meant as rules written in stone. If you have the feeling that this document needs some changes, we are always open for improvements, feel free to propose changes in an issue or in a pull request.

## Contents

* [Where to start](#where-to-start)
* [Bug report](#bug-report)
  * [Before submitting a bug report](#before-submitting-a-bug-report)
  * [How to submit a (good) bug report](#how-to-submit-a-(good)-bug-report)
* [Enhencement Suggestion](#enhencement-suggestion)
  * [Before submitting a enhencement suggestion](#before-submitting-a-enhencement-suggestion)
  * [How to submit a (good) enhencement suggestion](#how-to-submit-a-(good)-enhencement-suggestion)
* [Open a pull request](#open-a-pull-request)
* [Commit guideline](#commit-guideline)
  * [Format](#format)
  * [Allowed `<type>`](#allowed-`<type>`)
  * [`<subject>`](#`<subject>`)
  * [Optional `<body>`](#optional-`<body>`)
* [Attribution](#attribution)

## Where to start

Before you start to open a issue or a pull request make sure you follow our [CODE_OF_CONDUCT](./CODE_OF_CONDUCT.md).

Start by reading through the [README](./README.md), as it will give you an overview of the project and explains the intention of this project and all the use cases for it.

Before opening issues or pull requests always make sure that a similar open issue or open pull request does not exist. Please fo not post to closed issues. If you encounter the same problem as in a closed issue again, please open a new issue instead.

## Bug report

This section will guide you through how you can submit a bug report. By following these steps you help other contribuers and the maintainers to understand your report, how they can reproduce the problem, and find related reports.

If you submit a bug report try to include as much information as possible. Follow the steps for [how to submit a good bug report](#how-to-submit-a-(good)-bug-report). The information it asks help us to resolve your issue faster.

### Before submitting a bug report

* Check the [README](./README.md), to be able to find the cause of your problem yourself.
* Check the open issues, to see if the problem is already reported.
* If you encounter a problem that was reported and closed, check why it was closed and if you think it should be reopened, open a new issue instead.

### How to submit a (good) bug report

* Use a clear and descriptive title.
* Describe the exact steps which reproduce the problem.
* Provide specific examples to demonstrate the steps.
* Describe the behaviour you observed after the steps.
* Describe the behaviour you expected after the steps.
* Include screenshots and gifs.

## Enhencement Suggestion

This section will guide you through how you can submit a enhencement suggestion. By following these steps you help other contribuers and the maintainers to understand why an enhencement should be introduced.

If you submit a enhencement suggestiont try to include as much information as possible. Follow the steps for [how to submit a (good) enhencement suggestion](#how-to-submit-a-(good)-enhencement-suggestion). the information it asks help us to resolve your issue faster.

### Before submitting an enhencement suggestion

* Check the [README](./README.md), to find if an suggested enhencement is not necessary.
* Check the open issues, to see if the enhencment is already submitted.

### How to submit a (good) enhencement suggestion

* Use a clear and descriptive title.
* Describe a exact step by step guide for the enhencement.
* Provide specific examples to demonstrate the steps.
* Describe the behaviour after the steps.
* Include screenshots and gifs.
* Explain why a enhencement would be useful.

## Open a pull request

If you want to contribute to this project and make it better, your help is very welcome. Contributing is also a great way to learn more about social coding on Github, new technologies and and their ecosystems and how to make constructive, helpful bug reports, feature requests and the noblest of all contributions: a good, clean pull request.

### How to make a (good) pull request

* Create a personal fork of the project on Github.
* Clone the fork on your local machine. Your remote repo on Github is called origin.
* Add the original repository as a remote called upstream.
* If you created your fork a while ago be sure to pull upstream changes into your local repository.
* Create a new branch to work on! Branch from `master`.
* Implement your feature or bug fix.
* Follow the code style of the project, including indentation.
* Write or adapt tests as needed.
* Add or change the documentation as needed.
* Push your branch to your fork on Github, the remote origin.
* From your fork open a pull request in the correct branch. Target the project's `master` branch.
* If the maintainer requests further changes just push them to your branch. The PR will be updated automatically.
* Once the pull request is approved and merged you can pull the changes from upstream to your local repo and delete your extra branch(es).

### Commit guideline

Be sure to follow our commit guidelines.

To follow all rules as follows you can install the [semantic-git-commit-cli](https://github.com/JPeer264/node-semantic-git-commit-cli) with `npm i -g semantic-git-commit-cli` and then use `sgc` in your terminal and you will be guided through the commit message.

#### Format

```sh
  <type>: <subject>
  <BLANK LINE>
  <body>
```

#### Allowed `<type>`

The first letter of the type has to be capitalized and the type must be one of the following:

* `Chore`: Changes that affect the build system or external dependencies and moving files
* `CI`: Changes to our CI configuration files and scripts
* `Docs`: Documentation only changes
* `Feat`: New feature
* `Fix`: Bug fix
* `Perf`: Code change that improves performance
* `Refactor`: Code change that neither fixes a bug nor adds a feature
* `Style`: Changes that do not affect the meaning of the code
* `Test`: Adding missing tests or correcting existing tests

#### `<subject>`

* Use imperative, present tense: “change” not “changed” nor “changes”
* Do not capitalize first letter
* No dot (.) at the end
* Maximum 72 characters including `<type>:`

#### Optional `<body>`

* Just as in use imperative, present tense: “change” not “changed” nor “changes”
* Includes motivation for the change and contrasts with previous behavior

## Attribution

This Contribution guidline is partly adapted from the [contributing guide of the Atom project](https://github.com/atom/atom/blob/master/CONTRIBUTING.md), the [contributing guide from Marc Diethelm](https://github.com/MarcDiethelm/contributing), and the [commit message conventions of the Angular project](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits).

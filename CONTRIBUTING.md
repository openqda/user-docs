# How to Contribute to OpenQDA documentation
Thank you for contributing to this documentation and
helping us to make an impact in the realm of open qualitative data analysis.

> Please read this guide to make it a valuable success!

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Who is this guide for?](#who-is-this-guide-for)
- [Why is this guide important?](#why-is-this-guide-important)
- [How to prepare your contribution](#how-to-prepare-your-contribution)
  - [Create a new branch](#create-a-new-branch)
  - [Examples](#examples)
- [Before committing your work](#before-committing-your-work)
  - [Code quality checks](#code-quality-checks)
  - [Conventions for programming](#conventions-for-programming)
  - [Tests](#tests)
- [Committing your contribution](#committing-your-contribution)
- [Pull request and review process](#pull-request-and-review-process)

*generated with [DocToc](https://github.com/thlorenz/doctoc)*
<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Who is this guide for?

This guide targets everyone who wants to contribute to the documentation,
may it be fixing typos, improving language,

Other types contributions (outside of this documentation) can be done here:
- [develop OpenQDA](https://github.com/openqda/openqda))
- [report bugs and issues](https://github.com/openqda/openqda/issues)
- [discuss new features, ideas or questions](https://github.com/orgs/openqda/discussions)

## Why is this guide important?

There are a few conventions and pattern, for which we will take
a closer look at during our reviews.
These conventions are fundamental to the quality of the code and
the project's overall sustainability but also intend to prevent
common issues that arise during contributions.

> If in doubt: ask for help! We aim to support you in the
> process, especially if you have less to no experience in
> contributing to open source projects.

## How to prepare your contribution

If you are not member of the organization then you need to fork the repository.
The GitHub help explains this in much detail: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo

Then you need to clone the repository locally

### Create a new branch

Make sure, your have [installed the dependencies](./README.md) and 
that it runs locally.

You should always start your contribution using a new branch, coming from
the latest state of the `main` branch:

```shell
$ get checkout main
$ git pull --ff-only
```

If the pull cannot "fast-forward", then you have remains of changes on your
current branch. Please remove them and make sure your `main` branch is "clean".

> Note: if you have forked the repository and your fork is much behind the main repository
then you need to sync them: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork

Finally, **checkout a new branch** and name it by the following **lowercase** pattern:

```
<type>/<short-summary>
```

where `<type>` is one of the following:

| type      | description                                                 |
|-----------|-------------------------------------------------------------|
| `feature` | Indicates that this branch represents a single new feature  |
| `fix` | Indicates that this branch contains a fix for a specific bug or issue |
|`docs` | This branch is entirely about a specific documentation improvement. Note that feature and fixes may also contain documentation but a `docs` branch only improves documentation |
|`ci` | this branch resolves around CI only |
|`tests`| This branch is only about testing. While other code might be involved or tests might be part of features and fixes, these type of branches mainly focus on testing |

and where `short-summary` is a descriptive and understandable summary of what this
branch is about. It should represent the feature, fix etc. you are about to do.

> There should never be `openqda` being part of the branch name.
> This is useless information.

### Examples

Provide a new feature "Awesome Guide"


```shell
# ✅ Right
$ git checkout -b feature/awesome-guide
```

```shell
# ❌ Wrong
$ git checkout -b feature-awesome-timemachine
$ git checkout -b awesome-timemachine
$ git checkout -b feature-1
$ git checkout -b feature/my-cool-feature
```


## Before committing your work

> Before you commit you should ensure, the code passes
> code quality checks and tests!


## Further notices
We may or may not address one or more issues with your contribution,
which are entirely related to ensure the quality of the software and
are never intended to offend in any way.

This may include:
- multiple contributions in one pull requests (please avoid this at all costs!)
  causing the pull request to bloat up beyond comprehension
- convention violations
- issues with the solution (for example unsustainable, unscalable etc.)
- code style issues (variable and function names)
- missing documentation and tests
- unclear objectives

If there are no issues or all issues are resolved,
then we will approve the pull request and merge it asap.
You will also be mentioned in the next upcoming release, unless
you explicitly don't want to be named.

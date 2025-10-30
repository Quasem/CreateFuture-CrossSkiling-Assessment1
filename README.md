# 🧪 QE Assessment 1 – YouTube Playwright Test

An exploration into automation fundamentals, Playwright, and Git best practices.  
This repository demonstrates my ability to build, structure, and execute UI automation using modern tooling — including **Playwright**, **TypeScript**, and **GitHub Actions CI**.

---

## 📑 Table of Contents
- [Motivation](#motivation)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Expected Behaviour](#expected-behaviour)
- [GitHub Actions](#github-actions)
- [Summary](#summary)

---

## 🎯 Motivation

As part of the **Quality Engineering Assessment 1**, this project showcases my foundational automation skills.  
The goal was to design and run a small automated **Playwright** test while applying **Git best practices** — including clean branching, incremental commits, and project documentation.

**Chosen Site:** [YouTube](https://www.youtube.com)  
The YouTube site provides a stable, real-world interface for testing navigation, interactions, and assertions — ideal for demonstrating UI automation fundamentals.

---

## 🚀 Getting Started

### 🔧 Prerequisites

This repository has been verified to work with:

- Node.js **v18+**
- npm **v9+**
- Git **v2.40+**

Check your installed versions:

```bash


node -v
npm -v
git --version

```
If missing, download Node.js (which includes npm) from [nodejs.org](https://nodejs.org) 

⚙️ Setup

Clone the repository:
```bash

git clone https://github.com/<your-username>/assessment-1.git
cd assessment-1

```

Install dependencies:

```bash
npm install

```

Install Playwright browsers:
```bash
npx playwright install

```
✅ You’re now ready to run the tests locally or in CI!



🧭 Usage

This project contains a single functional test that demonstrates:

Navigating to YouTube

Handling cookie and consent dialogs

Clicking the “You” page link

Selecting the “Sign in” option

Verifying key text or elements along the way

Test File: tests/youtube_test.spec.ts

🧪 Running Tests
Headless Mode
```
npx playwright test
```

Headed (browser visible)
```
npx playwright test --headed
```

Debug / UI Mode

```
npx playwright test --ui

```
Generate a test report

```
npx playwright show-report

```
Reports are automatically generated in the playwright-report/ folder.




✅ Expected Behaviour

The test should:

1. Load YouTube successfully

2. Handle the cookie and privacy dialogs

3. Navigate to the “You” tab

4. Click Sign in

5. Assert that the expected elements or text appear (e.g. “Sign in” page is displayed)

If any of these fail, Playwright’s built-in report and trace viewer will display a step-by-step breakdown for debugging.


⚙️ GitHub Actions

A CI workflow is included in:
.github/workflows/playwright.yml



 
🧩 Workflow Summary

This workflow runs automatically on every push or pull request to the main branch and will:

. Install dependencies and Playwright browsers

. Execute the test suite in headless mode

. Upload the Playwright report as a downloadable artifact

You can view all runs under the Actions tab in your GitHub repository.




🏁 Summary

This repository demonstrates:

. Competent use of Playwright and TypeScript

. Understanding of Git workflows and CI/CD automation

. The ability to document and structure an automation project professionally



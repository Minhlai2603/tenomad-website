const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const taskArgIdx = args.indexOf('--task');
const taskNum = taskArgIdx !== -1 ? parseInt(args[taskArgIdx + 1], 10) : null;

const rootDir = path.resolve(__dirname, '../../..');

function checkTask1() {
  console.log('Validating Task 1: Scaffolding and Dependencies...');
  const pkgPath = path.join(rootDir, 'package.json');
  if (!fs.existsSync(pkgPath)) {
    throw new Error('package.json does not exist');
  }
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const deps = pkg.dependencies || {};
  const devDeps = pkg.devDependencies || {};

  if (!deps.astro && !devDeps.astro) {
    throw new Error('astro dependency is missing');
  }
  if (!deps.gsap) {
    throw new Error('gsap dependency is missing');
  }
  if (!deps.swiper) {
    throw new Error('swiper dependency is missing');
  }

  // Forbidden checks
  const allDeps = { ...deps, ...devDeps };
  for (const dep of Object.keys(allDeps)) {
    if (dep.startsWith('@astrojs/react') || dep.startsWith('@astrojs/tailwind') || dep === 'typescript') {
      throw new Error(`Forbidden dependency detected: ${dep}`);
    }
  }
  console.log('Task 1: PASS');
}

function checkTask2() {
  console.log('Validating Task 2: Astro Configuration...');
  const configPath = path.join(rootDir, 'astro.config.mjs');
  if (!fs.existsSync(configPath)) {
    throw new Error('astro.config.mjs does not exist');
  }
  const content = fs.readFileSync(configPath, 'utf8');
  if (!content.includes("site: 'https://tenomad.com'") && !content.includes('site: "https://tenomad.com"')) {
    throw new Error("astro.config.mjs must contain site: 'https://tenomad.com'");
  }
  if (!content.includes("output: 'static'") && !content.includes('output: "static"')) {
    throw new Error("astro.config.mjs must contain output: 'static'");
  }
  if (!content.includes("assets: '_assets'") && !content.includes('assets: "_assets"')) {
    throw new Error("astro.config.mjs must configure build.assets as '_assets'");
  }
  console.log('Task 2: PASS');
}

function checkTask3() {
  console.log('Validating Task 3: Directory Structure...');
  const dirs = [
    'src/layouts',
    'src/components',
    'src/pages',
    'src/data',
    'src/styles',
    'src/assets',
    'public/assets'
  ];
  for (const d of dirs) {
    const fullPath = path.join(rootDir, d);
    if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isDirectory()) {
      throw new Error(`Required directory missing: ${d}`);
    }
  }
  console.log('Task 3: PASS');
}

function checkTask4() {
  console.log('Validating Task 4: Design Tokens CSS Variables...');
  const varPath = path.join(rootDir, 'src/styles/variables.css');
  if (!fs.existsSync(varPath)) {
    throw new Error('variables.css does not exist');
  }
  const content = fs.readFileSync(varPath, 'utf8');
  const requiredVars = [
    '--bg-primary',
    '--bg-secondary',
    '--bg-tertiary',
    '--bg-hero',
    '--bg-footer',
    '--text-primary',
    '--text-secondary',
    '--text-muted',
    '--text-on-dark',
    '--text-on-hero',
    '--accent-gold',
    '--accent-blue',
    '--accent-indigo',
    '--neon-cyan',
    '--neon-blue',
    '--neon-purple'
  ];
  for (const v of requiredVars) {
    if (!content.includes(v)) {
      throw new Error(`Design token variable missing in variables.css: ${v}`);
    }
  }
  console.log('Task 4: PASS');
}

function checkTask5() {
  console.log('Validating Task 5: Global CSS...');
  const globalPath = path.join(rootDir, 'src/styles/global.css');
  if (!fs.existsSync(globalPath)) {
    throw new Error('global.css does not exist');
  }
  const content = fs.readFileSync(globalPath, 'utf8');
  if (!content.includes('box-sizing')) {
    throw new Error('global.css should contain CSS reset rules (e.g., box-sizing)');
  }
  if (!content.includes('.container') || !content.includes('.section')) {
    throw new Error('global.css should contain helper classes like .container and .section');
  }
  console.log('Task 5: PASS');
}

try {
  if (taskNum === 1) {
    checkTask1();
  } else if (taskNum === 2) {
    checkTask2();
  } else if (taskNum === 3) {
    checkTask3();
  } else if (taskNum === 4) {
    checkTask4();
  } else if (taskNum === 5) {
    checkTask5();
  } else {
    checkTask1();
    checkTask2();
    checkTask3();
    checkTask4();
    checkTask5();
  }
  console.log('All validations passed successfully!');
  process.exit(0);
} catch (err) {
  console.error('Validation FAILED:', err.message);
  process.exit(1);
}

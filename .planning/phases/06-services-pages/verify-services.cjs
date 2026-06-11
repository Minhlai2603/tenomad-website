const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const taskArgIdx = args.indexOf('--task');
const taskNum = taskArgIdx !== -1 ? parseInt(args[taskArgIdx + 1], 10) : null;

const rootDir = path.resolve(__dirname, '../../..');

function checkTask1() {
  console.log('Validating Task 1: ServiceCard Component...');
  const compPath = path.join(rootDir, 'src/components/ServiceCard.astro');
  if (!fs.existsSync(compPath)) {
    throw new Error('src/components/ServiceCard.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/service-card.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/service-card.css does not exist');
  }
  const content = fs.readFileSync(compPath, 'utf8');
  if (!content.includes('services-card')) {
    throw new Error('ServiceCard component does not contain the required CSS classes');
  }
  console.log('Task 1: PASS');
}

function checkTask2() {
  console.log('Validating Task 2: Breadcrumbs Component...');
  const compPath = path.join(rootDir, 'src/components/Breadcrumbs.astro');
  if (!fs.existsSync(compPath)) {
    throw new Error('src/components/Breadcrumbs.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/breadcrumbs.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/breadcrumbs.css does not exist');
  }
  const content = fs.readFileSync(compPath, 'utf8');
  if (!content.includes('aria-label="Breadcrumb"') && !content.includes('aria-label=\'Breadcrumb\'')) {
    throw new Error('Breadcrumbs component missing aria-label="Breadcrumb"');
  }
  console.log('Task 2: PASS');
}

function checkTask3() {
  console.log('Validating Task 3: Services Overview Page...');
  const pagePath = path.join(rootDir, 'src/pages/services/index.astro');
  if (!fs.existsSync(pagePath)) {
    throw new Error('src/pages/services/index.astro does not exist');
  }
  const content = fs.readFileSync(pagePath, 'utf8');
  if (!content.includes('ServiceCard') || !content.includes('Proactive Analysis')) {
    throw new Error('services/index.astro must import ServiceCard and render the services framework text');
  }
  console.log('Task 3: PASS');
}

function checkTask4() {
  console.log('Validating Task 4: Services Detail page template...');
  const pagePath = path.join(rootDir, 'src/pages/services/[slug].astro');
  if (!fs.existsSync(pagePath)) {
    throw new Error('src/pages/services/[slug].astro does not exist');
  }
  const content = fs.readFileSync(pagePath, 'utf8');
  if (!content.includes('getStaticPaths') || !content.includes('Breadcrumbs')) {
    throw new Error('services/[slug].astro must define getStaticPaths and render Breadcrumbs');
  }
  console.log('Task 4: PASS');
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
  } else {
    checkTask1();
    checkTask2();
    checkTask3();
    checkTask4();
  }
  console.log('All Services integration checks passed successfully!');
  process.exit(0);
} catch (err) {
  console.error('Validation failed:', err.message);
  process.exit(1);
}

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const taskArgIdx = args.indexOf('--task');
const taskNum = taskArgIdx !== -1 ? parseInt(args[taskArgIdx + 1], 10) : null;

const rootDir = path.resolve(__dirname, '../../..');

function checkTask1() {
  console.log('Validating Task 1: Layout Component...');
  const layoutPath = path.join(rootDir, 'src/layouts/Layout.astro');
  if (!fs.existsSync(layoutPath)) {
    throw new Error('src/layouts/Layout.astro does not exist');
  }
  const content = fs.readFileSync(layoutPath, 'utf8');
  
  if (!content.includes('pageTitle') || !content.includes('pageDescription')) {
    throw new Error('Layout must accept pageTitle and pageDescription props');
  }
  if (!content.includes('<link rel="canonical"')) {
    throw new Error('Layout must include dynamic canonical URL link');
  }
  if (!content.includes('https://fonts.googleapis.com') || !content.includes('https://fonts.gstatic.com')) {
    throw new Error('Layout must preconnect to Google Fonts');
  }
  if (!content.includes('og:title') || !content.includes('og:description')) {
    throw new Error('Layout must include Open Graph metadata tags');
  }
  console.log('Task 1: PASS');
}

function checkTask2() {
  console.log('Validating Task 2: Header Component & CSS...');
  const headerPath = path.join(rootDir, 'src/components/Header.astro');
  if (!fs.existsSync(headerPath)) {
    throw new Error('src/components/Header.astro does not exist');
  }
  const headerCssPath = path.join(rootDir, 'src/styles/components/header.css');
  if (!fs.existsSync(headerCssPath)) {
    throw new Error('src/styles/components/header.css does not exist');
  }

  const headerContent = fs.readFileSync(headerPath, 'utf8');
  if (!headerContent.includes('/contact')) {
    throw new Error('Header must have CTA button/link pointing to /contact');
  }
  if (!headerContent.includes('Services') || !headerContent.includes('Portfolio')) {
    throw new Error('Header must contain navigation links');
  }
  console.log('Task 2: PASS');
}

function checkTask3() {
  console.log('Validating Task 3: Footer Component & CSS...');
  const footerPath = path.join(rootDir, 'src/components/Footer.astro');
  if (!fs.existsSync(footerPath)) {
    throw new Error('src/components/Footer.astro does not exist');
  }
  const footerCssPath = path.join(rootDir, 'src/styles/components/footer.css');
  if (!fs.existsSync(footerCssPath)) {
    throw new Error('src/styles/components/footer.css does not exist');
  }

  const footerContent = fs.readFileSync(footerPath, 'utf8');
  // Verbatim checks from CONTENT.md
  if (!footerContent.includes('contact@tenomad.com')) {
    throw new Error('Footer contact details must include contact@tenomad.com');
  }
  if (!footerContent.includes('https://facebook.com/tenomad')) {
    throw new Error('Footer must link to Facebook page');
  }
  if (!footerContent.includes('https://linkedin.com/company/tenomad')) {
    throw new Error('Footer must link to LinkedIn company page');
  }
  console.log('Task 3: PASS');
}

function checkTask4() {
  console.log('Validating Task 4: Layout Integration...');
  const layoutPath = path.join(rootDir, 'src/layouts/Layout.astro');
  const content = fs.readFileSync(layoutPath, 'utf8');
  if (!content.includes('Header') || !content.includes('Footer')) {
    throw new Error('Layout must import and render Header and Footer components');
  }
  console.log('Task 4: PASS');
}

function checkTask5() {
  console.log('Validating Task 5: Index Page Integration...');
  const indexPath = path.join(rootDir, 'src/pages/index.astro');
  if (!fs.existsSync(indexPath)) {
    throw new Error('src/pages/index.astro does not exist');
  }
  const content = fs.readFileSync(indexPath, 'utf8');
  if (!content.includes('Layout')) {
    throw new Error('index.astro must use Layout component');
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
  console.log('All checks passed successfully!');
  process.exit(0);
} catch (err) {
  console.error('Validation failed:', err.message);
  process.exit(1);
}

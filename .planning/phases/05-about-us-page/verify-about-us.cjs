const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const taskArgIdx = args.indexOf('--task');
const taskNum = taskArgIdx !== -1 ? parseInt(args[taskArgIdx + 1], 10) : null;

const rootDir = path.resolve(__dirname, '../../..');

function checkTask1() {
  console.log('Validating Task 1: About Us Page routing and Layout integration...');
  const pagePath = path.join(rootDir, 'src/pages/about-us.astro');
  if (!fs.existsSync(pagePath)) {
    throw new Error('src/pages/about-us.astro does not exist');
  }
  const content = fs.readFileSync(pagePath, 'utf8');
  if (!content.includes('Layout') || !content.includes('AboutHero')) {
    throw new Error('about-us.astro must import and render Layout and AboutHero');
  }
  console.log('Task 1: PASS');
}

function checkTask2() {
  console.log('Validating Task 2: AboutHero Banner...');
  const compPath = path.join(rootDir, 'src/components/AboutHero.astro');
  if (!fs.existsSync(compPath)) {
    throw new Error('src/components/AboutHero.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/about-hero.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/about-hero.css does not exist');
  }
  const content = fs.readFileSync(compPath, 'utf8');
  if (!content.includes('We translate Our Clients Dreams Into Reality')) {
    throw new Error('AboutHero component missing title');
  }
  console.log('Task 2: PASS');
}

function checkTask3() {
  console.log('Validating Task 3: Mission & Vision panels...');
  const compPath = path.join(rootDir, 'src/components/MissionVision.astro');
  if (!fs.existsSync(compPath)) {
    throw new Error('src/components/MissionVision.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/mission-vision.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/mission-vision.css does not exist');
  }
  const content = fs.readFileSync(compPath, 'utf8');
  if (!content.includes('Our Mission') || !content.includes('Our Vision')) {
    throw new Error('MissionVision component missing mission/vision text');
  }
  console.log('Task 3: PASS');
}

function checkTask4() {
  console.log('Validating Task 4: About Core Values...');
  const compPath = path.join(rootDir, 'src/components/AboutCoreValues.astro');
  if (!fs.existsSync(compPath)) {
    throw new Error('src/components/AboutCoreValues.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/about-core-values.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/about-core-values.css does not exist');
  }
  const content = fs.readFileSync(compPath, 'utf8');
  if (!content.includes('Passion') || !content.includes('Respect') || !content.includes('Integrity') || !content.includes('Excellence')) {
    throw new Error('AboutCoreValues component missing core values titles');
  }
  console.log('Task 4: PASS');
}

function checkTask5() {
  console.log('Validating Task 5: Management section...');
  const compPath = path.join(rootDir, 'src/components/Management.astro');
  if (!fs.existsSync(compPath)) {
    throw new Error('src/components/Management.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/management.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/management.css does not exist');
  }
  const content = fs.readFileSync(compPath, 'utf8');
  if (!content.includes('Andrew B. Zimmerman') || !content.includes('Jack Durburg')) {
    throw new Error('Management component missing manager entries');
  }
  console.log('Task 5: PASS');
}

function checkTask6() {
  console.log('Validating Task 6: Team Grid...');
  const compPath = path.join(rootDir, 'src/components/TeamGrid.astro');
  if (!fs.existsSync(compPath)) {
    throw new Error('src/components/TeamGrid.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/team-grid.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/team-grid.css does not exist');
  }
  const content = fs.readFileSync(compPath, 'utf8');
  if (!content.includes('Nguyen Nguyen') || !content.includes('Hung Vo')) {
    throw new Error('TeamGrid component missing team member entries');
  }
  console.log('Task 6: PASS');
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
  } else if (taskNum === 6) {
    checkTask6();
  } else {
    checkTask1();
    checkTask2();
    checkTask3();
    checkTask4();
    checkTask5();
    checkTask6();
  }
  console.log('All About Us integration checks passed successfully!');
  process.exit(0);
} catch (err) {
  console.error('Validation failed:', err.message);
  process.exit(1);
}

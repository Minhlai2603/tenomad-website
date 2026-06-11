const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const taskArgIdx = args.indexOf('--task');
const taskNum = taskArgIdx !== -1 ? parseInt(args[taskArgIdx + 1], 10) : null;

const rootDir = path.resolve(__dirname, '../../..');

function checkTask1() {
  console.log('Validating Task 1: JSON Data Files...');
  const jsonFiles = ['team.json', 'portfolio.json', 'services.json', 'careers.json'];
  for (const file of jsonFiles) {
    const filePath = path.join(rootDir, 'src/data', file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`JSON file missing: ${file}`);
    }
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!Array.isArray(content)) {
      throw new Error(`JSON file ${file} must be a top-level array`);
    }

    if (file === 'team.json') {
      if (content.length < 40) {
        throw new Error(`team.json should have 40 members, found ${content.length}`);
      }
      const hasTypes = content.every(m => m.name && m.role && (m.type === 'management' || m.type === 'team'));
      if (!hasTypes) {
        throw new Error('team.json members must have valid name, role, and type attributes');
      }
    } else if (file === 'portfolio.json') {
      if (content.length !== 11) {
        throw new Error(`portfolio.json should have 11 items, found ${content.length}`);
      }
      const valid = content.every(p => p.id && p.title && Array.isArray(p.tags) && p.description && p.thumbnail);
      if (!valid) {
        throw new Error('portfolio.json items are missing required fields');
      }
    } else if (file === 'services.json') {
      if (content.length !== 7) {
        throw new Error(`services.json should have 7 services, found ${content.length}`);
      }
      const valid = content.every(s => s.id && s.title && s.slug && s.shortDescription && s.icon);
      if (!valid) {
        throw new Error('services.json items are missing required fields');
      }
    } else if (file === 'careers.json') {
      if (content.length !== 3) {
        throw new Error(`careers.json should have 3 positions, found ${content.length}`);
      }
      const valid = content.every(c => c.title && c.location && c.quantity && c.salary && c.description && c.requirements && c.benefits);
      if (!valid) {
        throw new Error('careers.json positions are missing required fields');
      }
    }
  }
  console.log('Task 1: PASS');
}

function checkTask2() {
  console.log('Validating Task 2: Brand Assets...');
  const assets = [
    'public/assets/logo.svg',
    'public/favicon.ico',
    'public/assets/og-image.png'
  ];
  for (const asset of assets) {
    const filePath = path.join(rootDir, asset);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Brand asset missing: ${asset}`);
    }
  }
  console.log('Task 2: PASS');
}

function checkTask3() {
  console.log('Validating Task 3: Content Collections & Blog Posts...');
  const configPath = path.join(rootDir, 'src/content/config.js');
  if (!fs.existsSync(configPath)) {
    throw new Error('src/content/config.js does not exist');
  }

  const posts = [
    'the-rise-of-digital-nomads.md',
    'ios-developer-skills-matrix.md',
    'blockchain-in-200-lines-of-code.md',
    'my-4-deepest-scars.md'
  ];
  for (const post of posts) {
    const filePath = path.join(rootDir, 'src/content/blog', post);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Blog post missing: ${post}`);
    }
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.startsWith('---')) {
      throw new Error(`Blog post ${post} must have valid YAML frontmatter`);
    }
    // Simple frontmatter checks
    if (!content.includes('title:') || !content.includes('date:') || !content.includes('excerpt:')) {
      throw new Error(`Blog post ${post} is missing required frontmatter fields`);
    }
  }
  console.log('Task 3: PASS');
}

try {
  if (taskNum === 1) {
    checkTask1();
  } else if (taskNum === 2) {
    checkTask2();
  } else if (taskNum === 3) {
    checkTask3();
  } else {
    checkTask1();
    checkTask2();
    checkTask3();
  }
  console.log('All checks passed successfully!');
  process.exit(0);
} catch (err) {
  console.error('Validation failed:', err.message);
  process.exit(1);
}

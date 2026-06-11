const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const taskArgIdx = args.indexOf('--task');
const taskNum = taskArgIdx !== -1 ? parseInt(args[taskArgIdx + 1], 10) : null;

const rootDir = path.resolve(__dirname, '../../..');

function checkTask1() {
  console.log('Validating Task 1: Hero Section...');
  const heroPath = path.join(rootDir, 'src/components/Hero.astro');
  if (!fs.existsSync(heroPath)) {
    throw new Error('src/components/Hero.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/hero.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/hero.css does not exist');
  }
  const content = fs.readFileSync(heroPath, 'utf8');
  if (!content.includes('You Dream It, We Build It')) {
    throw new Error('Hero component missing headline');
  }
  console.log('Task 1: PASS');
}

function checkTask2() {
  console.log('Validating Task 2: Professional Approach...');
  const approachPath = path.join(rootDir, 'src/components/ProfessionalApproach.astro');
  if (!fs.existsSync(approachPath)) {
    throw new Error('src/components/ProfessionalApproach.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/professional-approach.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/professional-approach.css does not exist');
  }
  const content = fs.readFileSync(approachPath, 'utf8');
  if (!content.includes('WEBSITE DEVELOPMENT') || !content.includes('PLATFORM DEVELOPMENT')) {
    throw new Error('ProfessionalApproach component missing text columns');
  }
  console.log('Task 2: PASS');
}

function checkTask3() {
  console.log('Validating Task 3: Services Slider...');
  const sliderPath = path.join(rootDir, 'src/components/ServicesSlider.astro');
  if (!fs.existsSync(sliderPath)) {
    throw new Error('src/components/ServicesSlider.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/services-slider.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/services-slider.css does not exist');
  }
  const content = fs.readFileSync(sliderPath, 'utf8');
  if (!content.includes('swiper')) {
    throw new Error('ServicesSlider component must initialize or reference swiper');
  }
  console.log('Task 3: PASS');
}

function checkTask4() {
  console.log('Validating Task 4: Unlimited Possibilities...');
  const possibilitiesPath = path.join(rootDir, 'src/components/UnlimitedPossibilities.astro');
  if (!fs.existsSync(possibilitiesPath)) {
    throw new Error('src/components/UnlimitedPossibilities.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/unlimited-possibilities.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/unlimited-possibilities.css does not exist');
  }
  const content = fs.readFileSync(possibilitiesPath, 'utf8');
  if (!content.includes('Unlimited Possibilities') && !content.includes('Powerful Solution')) {
    throw new Error('UnlimitedPossibilities component missing header text');
  }
  console.log('Task 4: PASS');
}

function checkTask5() {
  console.log('Validating Task 5: Core Values & Counters...');
  const valuesPath = path.join(rootDir, 'src/components/CoreValues.astro');
  if (!fs.existsSync(valuesPath)) {
    throw new Error('src/components/CoreValues.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/core-values.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/core-values.css does not exist');
  }
  const content = fs.readFileSync(valuesPath, 'utf8');
  if (!content.includes('638') || !content.includes('598')) {
    throw new Error('CoreValues component missing counter targets');
  }
  console.log('Task 5: PASS');
}

function checkTask6() {
  console.log('Validating Task 6: Why Work With Us...');
  const whyPath = path.join(rootDir, 'src/components/WhyWorkWithUs.astro');
  if (!fs.existsSync(whyPath)) {
    throw new Error('src/components/WhyWorkWithUs.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/why-work-with-us.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/why-work-with-us.css does not exist');
  }
  const content = fs.readFileSync(whyPath, 'utf8');
  if (!content.toLowerCase().includes('why work with us')) {
    throw new Error('WhyWorkWithUs component missing header title');
  }
  console.log('Task 6: PASS');
}

function checkTask7() {
  console.log('Validating Task 7: Featured Work & Assets...');
  const featuredPath = path.join(rootDir, 'src/components/FeaturedWork.astro');
  if (!fs.existsSync(featuredPath)) {
    throw new Error('src/components/FeaturedWork.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/featured-work.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/featured-work.css does not exist');
  }
  const content = fs.readFileSync(featuredPath, 'utf8');
  if (!content.includes('Tago') || !content.includes('Valley Sierra') || !content.includes('DMS')) {
    throw new Error('FeaturedWork component missing featured project names');
  }
  
  // Check assets exist
  const tagoThumb = path.join(rootDir, 'public/assets/portfolio-tago.webp');
  const valleyThumb = path.join(rootDir, 'public/assets/portfolio-valleysierra.webp');
  const dmsThumb = path.join(rootDir, 'public/assets/portfolio-dms.webp');
  if (!fs.existsSync(tagoThumb) || !fs.existsSync(valleyThumb) || !fs.existsSync(dmsThumb)) {
    throw new Error('Featured work thumbnail WebP assets are missing in public/assets/');
  }
  console.log('Task 7: PASS');
}

function checkTask8() {
  console.log('Validating Task 8: Testimonials...');
  const testimonialsPath = path.join(rootDir, 'src/components/Testimonials.astro');
  if (!fs.existsSync(testimonialsPath)) {
    throw new Error('src/components/Testimonials.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/testimonials.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/testimonials.css does not exist');
  }
  const content = fs.readFileSync(testimonialsPath, 'utf8');
  if (!content.includes('Nasdaq') && !content.includes('Frucher')) {
    throw new Error('Testimonials component missing client quotes');
  }
  console.log('Task 8: PASS');
}

function checkTask9() {
  console.log('Validating Task 9: Split CTA...');
  const splitCtaPath = path.join(rootDir, 'src/components/SplitCTA.astro');
  if (!fs.existsSync(splitCtaPath)) {
    throw new Error('src/components/SplitCTA.astro does not exist');
  }
  const cssPath = path.join(rootDir, 'src/styles/components/split-cta.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error('src/styles/components/split-cta.css does not exist');
  }
  const content = fs.readFileSync(splitCtaPath, 'utf8');
  if (!content.includes('/careers') || !content.includes('/contact')) {
    throw new Error('SplitCTA component missing links to careers/contact');
  }
  console.log('Task 9: PASS');
}

function checkTask10() {
  console.log('Validating Task 10: Index Page Integration...');
  const indexPath = path.join(rootDir, 'src/pages/index.astro');
  if (!fs.existsSync(indexPath)) {
    throw new Error('src/pages/index.astro does not exist');
  }
  const content = fs.readFileSync(indexPath, 'utf8');
  
  const expectedComponents = [
    'Hero', 'ProfessionalApproach', 'ServicesSlider', 'UnlimitedPossibilities',
    'CoreValues', 'WhyWorkWithUs', 'FeaturedWork', 'Testimonials', 'SplitCTA'
  ];
  
  for (const component of expectedComponents) {
    if (!content.includes(component)) {
      throw new Error(`index.astro does not import or render ${component} component`);
    }
  }
  console.log('Task 10: PASS');
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
  } else if (taskNum === 7) {
    checkTask7();
  } else if (taskNum === 8) {
    checkTask8();
  } else if (taskNum === 9) {
    checkTask9();
  } else if (taskNum === 10) {
    checkTask10();
  } else {
    checkTask1();
    checkTask2();
    checkTask3();
    checkTask4();
    checkTask5();
    checkTask6();
    checkTask7();
    checkTask8();
    checkTask9();
    checkTask10();
  }
  console.log('All homepage integration checks passed successfully!');
  process.exit(0);
} catch (err) {
  console.error('Validation failed:', err.message);
  process.exit(1);
}

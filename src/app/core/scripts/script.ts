import { AnimationController } from '@ionic/angular';
const animationCtrl = new AnimationController();
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
export const customAnimation = (_: HTMLElement, opts: any) =>{
  // create root transition
const rootTransition = animationCtrl
.create()
.duration(opts.duration || 350)
.easing('cubic-bezier(0.7,0,0.3,1)');

const enterTransition = animationCtrl.create().addElement(opts.enteringEl);
const exitTransition = animationCtrl.create().addElement(opts.leavingEl);

enterTransition.fromTo('opacity', '0', '1');
exitTransition.fromTo('opacity', '1', '0');

if (opts.direction === 'forward') {
  enterTransition.fromTo('transform', 'translateY(40%)', 'translateY(0%)');
  exitTransition.fromTo('transform', 'translateY(0%)', 'translateY(-40%)');
} else {
enterTransition.fromTo('transform', 'translateY(-40%)', 'translateY(0%)');
exitTransition.fromTo('transform', 'translateY(0%)', 'translateY(40%)');
}

rootTransition.addAnimation([enterTransition, exitTransition]);
return rootTransition;
}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// Assuming you have the post object with the createdAt property

const objectCreatedAt = new Date();
const currentTime = new Date();

export const  getTimeElapsedString=(createdAt:Date, currentTime:Date)=> {
  const timeDiff = currentTime.getTime() - createdAt.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
}

const timeElapsedString = getTimeElapsedString(objectCreatedAt, currentTime);
console.log(timeElapsedString); // Example output: "posted 2 hours ago"

export const Config = {
  Basic: {
    // from environment or fed by server
    language: 'ar',
    region: 'EG',
  },
  Seo: {
    tags: [
      { property: 'og:site_name', content: 'Sekrab Garage' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:site', content: '@sekrabbin' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:creator', content: '@sekrabbin' },
      { name: 'author', content: 'Ayyash' },
    ],
    defaultImage: 'https://garage.sekrab.com/assets/images/sekrab0813.jpg',
    logoUrl: 'https://garage.sekrab.com/assets/ilogo.2643991258d0540e.svg',
    baseUrl: 'https://$0.sekrab.com/$1/$2',
    defaultLanguage: 'en',
    defaultRegion: 'www',
    hrefLangs: [
      { region: 'ES', language: 'es' },
      { region: 'ES', language: 'en' },
      { region: 'MX', language: 'es' },
      { region: 'MX', language: 'en' },
      { language: 'de' },
      { language: 'fr' },
      { language: 'es' },
      { language: 'en' },
      { language: 'x-default' },
    ],
  },
};



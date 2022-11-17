import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'سئو و بهینه‌سازی وب‌سایت',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        با استفاده از نتایج ابزار تحلیلی و راهکارهای مطرح شده در سامانه راسخ سایت خود را به بهترین شکل ممکن برای موتورهای جست‌وجو بهینه‌سازی کنید، تا رتبه بهتری در صفحه نتایج کسب کنید.
      </>
    ),
  },
  {
    title: 'پلتفرم اینستاگرام',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        همه آنچه باید درباره الگوریتم‌ها و نحوه عملکرد پلتفرم اینستاگرام بدانید در این بخش آورده شده است تا بتوانید استراتژی مناسبی را تدوین کرده و عملکرد خودتان را در راستای رسیدن به اهداف کلیدی بهینه‌سازی کنید.
      </>
    ),
  },
  {
    title: 'پلتفرم توییتر',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        درک نحوه عملکرد الگوریتم‌ها در بستر پلتفرم توییتر به شما کمک می‌کند تا هدفمند و هوشمندانه عمل کنید. در این بخش صفر تا صد جزئیات این پلتفرم کاربردی مورد بررسی قرار گرفته و راهکارهای ارزشمندی ارائه شده است.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

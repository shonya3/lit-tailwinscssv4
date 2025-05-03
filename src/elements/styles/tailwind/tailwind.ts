import wind_styles from './tailwind-styles-root.css?inline';
export const tailwind = new CSSStyleSheet();
tailwind.replaceSync(wind_styles);

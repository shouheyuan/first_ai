import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export default getRequestConfig(async ({ locale, requestLocale }) => {
  // Always await requestLocale as it might be a Promise in next-intl v4
  const resolvedRequestLocale = await requestLocale;
  
  // Determine the final locale:
  // 1. Use the provided locale param if it's valid
  // 2. Otherwise use the resolved requestLocale if valid
  // 3. Finally fall back to defaultLocale
  let finalLocale: typeof locales[number] = defaultLocale;
  
  if (locale && locales.includes(locale as typeof locales[number])) {
    finalLocale = locale as typeof locales[number];
  } else if (resolvedRequestLocale && locales.includes(resolvedRequestLocale as typeof locales[number])) {
    finalLocale = resolvedRequestLocale as typeof locales[number];
  }
  
  return {
    locale: finalLocale,
    messages: (await import(`@/i18n/messages/${finalLocale}.json`)).default
  };
});

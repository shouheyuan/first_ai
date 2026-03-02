export const locales = ['en', 'cn'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';
export const localePrefix = 'as-needed' as const;

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  cn: '中文',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  cn: '🇨🇳',
};

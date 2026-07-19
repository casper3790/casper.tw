'use strict';

function normalizeLanguage(value) {
  const lang = String(value || '').toLowerCase().replace('_', '-');

  if (lang === 'zh' || lang === 'zh-tw' || lang === 'zh-hant' || lang === 'zh-hant-tw') {
    return 'zh';
  }

  if (lang === 'ja' || lang === 'ja-jp') {
    return 'ja';
  }

  if (lang === 'en' || lang === 'en-us' || lang === 'en-gb') {
    return 'en';
  }

  return null;
}

function detectPostLanguage(post) {
  post = post || {};

  const explicitLanguage =
    normalizeLanguage(post.site_lang) ||
    normalizeLanguage(post.lang) ||
    normalizeLanguage(post.language) ||
    normalizeLanguage(post.locale);

  if (explicitLanguage) {
    return explicitLanguage;
  }

  const path = String(post.path || post.permalink || '').toLowerCase().replace(/^\/+/, '');
  const source = String(post.source || post.full_source || '').toLowerCase().replace(/\\/g, '/');

  if (
    path.startsWith('ja/') ||
    path.includes('/ja/') ||
    source.endsWith('.ja.md') ||
    source.endsWith('.ja.markdown')
  ) {
    return 'ja';
  }

  if (
    path.startsWith('zh/') ||
    path.includes('/zh/') ||
    source.endsWith('.zh.md') ||
    source.endsWith('.zh-tw.md') ||
    source.endsWith('.zh.markdown') ||
    source.endsWith('.zh-tw.markdown')
  ) {
    return 'zh';
  }

  if (
    source.endsWith('.en.md') ||
    source.endsWith('.en-us.md') ||
    source.endsWith('.en.markdown') ||
    source.endsWith('.en-us.markdown')
  ) {
    return 'en';
  }

  return 'zh';
}

hexo.extend.helper.register('normalize_post_language', normalizeLanguage);
hexo.extend.helper.register('detect_post_language', detectPostLanguage);

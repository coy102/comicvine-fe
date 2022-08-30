import { IMG_BRAND } from './image'

const META = {
  image: '',
  title: 'Comic Vine - Comic database online',
  description:
    'The largest comic database online, Comic Vine features Comic Reviews, News, Videos, and Forums for the latest in and more!',
  keywords: 'Comic, Movies, Superheroes, Reviews, News, Forums',
}

export const DEFAULT_META_TAGS = {
  ...META,
  metaTags: [
    { name: 'og:title', content: META.title },
    { name: 'og:image', content: IMG_BRAND.BRAND_LOGO },
    { name: 'og:description', content: META.description },
    {
      name: 'og:site_name',
      content: 'Comic Vine',
    },
  ],
}

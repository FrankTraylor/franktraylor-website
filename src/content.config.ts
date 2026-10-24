import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per timeline moment in src/content/timeline/.
// The front matter holds the facts; the text below it is the caption.
const timeline = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/timeline' }),
  schema: z.object({
    headline: z.string(),
    date: z.string().regex(/^\d{4}(-\d{2})?(-\d{2})?$/, 'Use YYYY, YYYY-MM or YYYY-MM-DD'),
    end: z.string().regex(/^\d{4}(-\d{2})?(-\d{2})?$/).optional(),
    media: z.string().optional(), // a photo in /public/media/timeline, or a Vimeo/YouTube/Flickr link
    caption: z.string().optional(),
    cover: z.boolean().optional(), // the opening slide
  }),
});

export const collections = { timeline };

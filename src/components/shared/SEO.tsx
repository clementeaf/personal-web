import Head from 'next/head';
import { SEO_CONFIG } from '@/constants';
import { Person, WithContext } from 'schema-dts';
import { SEOProps } from '@/types';

const SEO: React.FC<SEOProps> = ({
  title = SEO_CONFIG.title,
  description = SEO_CONFIG.description,
  canonical = SEO_CONFIG.canonical,
}) => {
  // Schema.org JSON-LD
  const personSchema: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Clemente Falcone',
    url: SEO_CONFIG.canonical,
    jobTitle: 'Software Engineer',
    sameAs: [
      'https://linkedin.com/in/clemente-falcone',
      'https://github.com/clementeaf'
    ],
    knowsAbout: ['Desarrollo Web', 'React', 'Next.js', 'TypeScript', 'UI/UX']
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={SEO_CONFIG.openGraph.type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={SEO_CONFIG.openGraph.url} />
      <meta property="og:locale" content={SEO_CONFIG.openGraph.locale} />
      <meta property="og:image" content={SEO_CONFIG.openGraph.images[0].url} />
      <meta property="og:image:width" content={SEO_CONFIG.openGraph.images[0].width.toString()} />
      <meta property="og:image:height" content={SEO_CONFIG.openGraph.images[0].height.toString()} />
      <meta property="og:image:alt" content={SEO_CONFIG.openGraph.images[0].alt} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={SEO_CONFIG.twitter.cardType} />
      <meta name="twitter:site" content={SEO_CONFIG.twitter.site} />
      <meta name="twitter:creator" content={SEO_CONFIG.twitter.handle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SEO_CONFIG.openGraph.images[0].url} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </Head>
  );
};

export default SEO; 
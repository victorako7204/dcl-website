import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Dynamic Certification Laboratories';
const SITE_URL = 'https://www.dcltesting.com';
const DEFAULT_IMAGE = '/og-image.jpg';

export function SEO({ title, description, canonical, ogImage, children }) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const metaDescription = description || 'Dynamic Certification Laboratories LLC - Seismic, Wind & Vibration Testing Services. A VMC Group Company. IAS Accredited.';

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical ? `${SITE_URL}${canonical}` : SITE_URL} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage ? `${SITE_URL}${ogImage}` : `${SITE_URL}${DEFAULT_IMAGE}`} />
      <meta property="og:url" content={canonical ? `${SITE_URL}${canonical}` : SITE_URL} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {children}
    </Helmet>
  );
}

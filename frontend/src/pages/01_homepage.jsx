import React from 'react';

export const pageMeta = {
  number: 1,
  title: 'Homepage',
  route: '/',
  portal: 'Public Portal',
  doctypes: ['MIS Homepage Slider', 'MIS Industry', 'MIS Supplier Profile'],
  sections: [
  'Navbar with logo, links, language switcher, currency, Login/Sign Up',
  'Top announcement bar',
  'Hero slider with 3 slides, 2 CTAs, background image, dot navigation',
  'Stats bar with supplier/product/export/response/verified numbers',
  'Horizontal industry category cards',
  'Featured manufacturers carousel',
  'Trust badges row',
  'Footer'
],
};

export default function HomepagePage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Homepage implements the public marketplace landing experience.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

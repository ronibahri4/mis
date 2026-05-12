import React from 'react';

export const pageMeta = {
  number: 7,
  title: 'About Us',
  route: '/about',
  portal: 'Public Portal',
  doctypes: [],
  sections: [
  'Mission statement and hero image',
  'Our Values cards',
  'Platform stats',
  'Our Commitment block',
  'Our Team section with Meet the Team button',
  'Footer'
],
};

export default function AboutUsPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>About page is static marketplace positioning content.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

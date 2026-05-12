import React from 'react';

export const pageMeta = {
  number: 3,
  title: 'Industries / Categories',
  route: '/industries',
  portal: 'Public Portal',
  doctypes: ['MIS Industry', 'MIS Category', 'MIS Supplier Profile'],
  sections: [
  'Hero banner with description and stats',
  'Search within industries',
  'Sort dropdown',
  'Industry grid cards with image, icon, supplier count, arrow link',
  'Why source by industry sidebar',
  'Request Assistance CTA'
],
};

export default function IndustriesCategoriesPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Industries page provides category-led supplier discovery.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

import React from 'react';

export const pageMeta = {
  number: 9,
  title: 'Resources',
  route: '/resources',
  portal: 'Public Portal',
  doctypes: ['MIS Resource'],
  sections: [
  'Resource category filter tabs',
  'Latest Resources grid',
  'Featured resource hero card',
  'Read More / Download actions'
],
};

export default function ResourcesPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Resources page publishes guides, insights, tips, and templates.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

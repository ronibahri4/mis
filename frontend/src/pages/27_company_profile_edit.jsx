import React from 'react';

export const pageMeta = {
  number: 27,
  title: 'Company Profile Edit',
  route: '/supplier/profile',
  portal: 'Supplier Portal',
  doctypes: ['MIS Supplier Profile'],
  sections: [
  'About tab',
  'Certifications upload tab',
  'Capabilities tab',
  'Factory tab',
  'Export Markets tab',
  'Contact Persons repeatable tab'
],
};

export default function CompanyProfileEditPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Company profile edit captures supplier operational details.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

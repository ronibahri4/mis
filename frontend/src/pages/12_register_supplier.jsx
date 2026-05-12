import React from 'react';

export const pageMeta = {
  number: 12,
  title: 'Register — Supplier',
  route: '/register/supplier',
  portal: 'Auth Portal',
  doctypes: ['MIS Supplier Profile'],
  sections: [
  'Supplier role toggle',
  'Company Name required',
  'Industry dropdown',
  'Website optional',
  'Contact and password fields',
  'Terms checkbox',
  'OAuth buttons'
],
};

export default function RegisterSupplierPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Supplier registration starts supplier profile onboarding.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

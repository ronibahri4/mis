import React from 'react';

export const pageMeta = {
  number: 11,
  title: 'Register — Buyer',
  route: '/register/buyer',
  portal: 'Auth Portal',
  doctypes: ['MIS Buyer Profile'],
  sections: [
  'Left value proposition panel',
  'Role toggle with Buyer selected',
  'Full Name, Company Name, Email, Phone fields',
  'Password and confirmation',
  'Password strength checklist',
  'Terms checkbox',
  'Create Account button',
  'OAuth buttons'
],
};

export default function RegisterBuyerPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Buyer registration creates buyer profile records.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

import React from 'react';

export const pageMeta = {
  number: 20,
  title: 'Buyer Profile Settings',
  route: '/buyer/settings',
  portal: 'Buyer Portal',
  doctypes: ['MIS Buyer Profile'],
  sections: [
  'Account Info tab',
  'Company Profile tab',
  'Notification Preferences tab',
  'Language and Currency dropdowns'
],
};

export default function BuyerProfileSettingsPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Buyer settings manage account, company, and preferences.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

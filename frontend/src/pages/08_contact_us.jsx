import React from 'react';

export const pageMeta = {
  number: 8,
  title: 'Contact Us',
  route: '/contact',
  portal: 'Public Portal',
  doctypes: [],
  sections: [
  'Send a Message form',
  'Contact info sidebar',
  'Follow Us social links',
  'Embedded map',
  'Find Us card and Get Directions',
  'FAQ accordion'
],
};

export default function ContactUsPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Contact page supports platform inquiries and help requests.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

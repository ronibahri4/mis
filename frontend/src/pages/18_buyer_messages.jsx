import React from 'react';

export const pageMeta = {
  number: 18,
  title: 'Messages — Buyer',
  route: '/buyer/messages',
  portal: 'Buyer Portal',
  doctypes: ['MIS Message Thread', 'MIS Message'],
  sections: [
  'Thread list sidebar',
  'Supplier avatar, preview, unread badge, timestamp',
  'Thread message bubbles',
  'Attachment chips',
  'Input bar with attach and send'
],
};

export default function BuyerMessagesPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Buyer messaging supports supplier conversations.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

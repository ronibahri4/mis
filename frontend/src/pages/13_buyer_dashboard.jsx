import React from 'react';

export const pageMeta = {
  number: 13,
  title: 'Buyer Dashboard',
  route: '/buyer/dashboard',
  portal: 'Buyer Portal',
  doctypes: ['MIS RFQ', 'MIS Quotation', 'MIS Order'],
  sections: [
  'Buyer sidebar nav',
  'Top bar with language, currency, notifications, avatar, role chip',
  'New RFQ button',
  'KPI cards',
  'Recent RFQs table',
  'RFQ status donut chart',
  'Recent quotes list',
  'My Orders table'
],
};

export default function BuyerDashboardPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Buyer dashboard summarizes sourcing activity.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

import React from 'react';

export const pageMeta = {
  number: 31,
  title: 'Platform Analytics (Admin)',
  route: 'Desk Page',
  portal: 'Admin Portal',
  doctypes: ['All aggregated DocTypes'],
  sections: [
  'Total RFQs / GMV / Active Users / Active Suppliers KPIs',
  'Supplier acquisition funnel',
  'Top categories by RFQ volume',
  'Subscription revenue by month'
],
};

export default function PlatformAnalyticsAdminPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Admin analytics page aggregates marketplace performance.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

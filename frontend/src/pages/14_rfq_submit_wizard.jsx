import React from 'react';

export const pageMeta = {
  number: 14,
  title: 'RFQ Submit Wizard',
  route: '/buyer/rfq/new',
  portal: 'Buyer Portal',
  doctypes: ['MIS RFQ'],
  sections: [
  'Four-step progress bar',
  'Step 1 RFQ details',
  'Step 2 product description, attachments, repeatable specs',
  'Step 3 business details',
  'Step 4 review and submit',
  'Desktop help sidebar',
  'Save Draft button on all steps'
],
};

export default function RfqSubmitWizardPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>RFQ wizard captures structured sourcing requests.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

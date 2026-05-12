import React from 'react';

export const pageMeta = {
  number: 5,
  title: 'Supplier Profile',
  route: '/suppliers/[slug]',
  portal: 'Public Portal',
  doctypes: ['MIS Supplier Profile', 'MIS Product', 'MIS Review'],
  sections: [
  'Breadcrumb',
  'Cover image, logo, identity, location, establishment and employees',
  'Verification/export/response/delivery badges',
  'KPI strip',
  'Tabs for About, Products, Certificates, Capabilities, Factory, Quality, Markets, Reviews',
  'About text plus factory media',
  'Product card grid',
  'Company Info sidebar',
  'Sticky Quick Quote and action buttons'
],
};

export default function SupplierProfilePage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Supplier profile presents a manufacturer storefront and quotation actions.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

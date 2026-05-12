import React from 'react';

export const pageMeta = {
  number: 22,
  title: 'Products Management',
  route: '/supplier/products',
  portal: 'Supplier Portal',
  doctypes: ['MIS Product', 'MIS Category'],
  sections: [
  'Add Product button',
  'Products table/grid',
  'Bulk publish/unpublish/delete',
  'Add/Edit Product form',
  'Multi-image upload with reorder',
  'Repeatable specifications',
  'Material, standard, grade, dimensions',
  'Brochure upload and Active toggle'
],
};

export default function ProductsManagementPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Products management lets suppliers maintain catalog data.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

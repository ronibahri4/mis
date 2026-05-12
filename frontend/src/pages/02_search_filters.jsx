import React from 'react';

export const pageMeta = {
  number: 2,
  title: 'Search & Filters',
  route: '/search',
  portal: 'Public Portal',
  doctypes: ['MIS Product', 'MIS Supplier Profile', 'MIS Category'],
  sections: [
  'Search bar with category and location dropdowns',
  'Active removable filter chips',
  'Left sidebar category/subcategory/material/diameter/length filters',
  'Results count and sort dropdown',
  'Product result cards with supplier chip and actions',
  'Right sidebar refinement tips and RFQ CTA',
  'Pagination / Load More'
],
};

export default function SearchFiltersPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Search page covers product discovery and RFQ fallback.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

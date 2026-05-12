import React from 'react';

export const pageMeta = {
  number: 19,
  title: 'Favorites',
  route: '/buyer/favorites',
  portal: 'Buyer Portal',
  doctypes: ['MIS Buyer Profile', 'MIS Product'],
  sections: [
  'Saved Suppliers tab',
  'Saved Searches tab',
  'Favorited Products tab',
  'Supplier cards',
  'Remove from Favorites buttons'
],
};

export default function FavoritesPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Favorites page stores buyer shortcuts.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

import React from 'react';

export const pageMeta = {
  number: 30,
  title: 'Category & CMS Management',
  route: 'Desk Page',
  portal: 'Admin Portal',
  doctypes: ['MIS Industry', 'MIS Category', 'MIS Homepage Slider', 'MIS Resource'],
  sections: [
  'Industry CRUD form',
  'Category tree editor',
  'Homepage Slider manager',
  'Resources editor',
  'Publish toggles and media uploads'
],
};

export default function CategoryCmsManagementPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Admin CMS page manages marketplace taxonomy and homepage/resource content.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

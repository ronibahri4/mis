import React from 'react';

export const pageMeta = {
  number: 10,
  title: 'Login',
  route: '/login',
  portal: 'Auth Portal',
  doctypes: [],
  sections: [
  'Left brand panel with feature list and imagery',
  'Email and password fields',
  'Forgot Password link',
  'Remember Me checkbox',
  'Login button',
  'Google/Microsoft/LinkedIn OAuth buttons',
  'Sign Up link'
],
};

export default function LoginPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Login page connects to Frappe authentication.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}

// Placeholder built asset. Run `npm install && npm run build` in an environment
// with registry access to generate the production React bundle from frontend/src.
const root = document.getElementById('root');
if (root && !root.hasChildNodes()) {
  root.innerHTML = '<div style="font-family:Inter,system-ui;padding:3rem"><h1>Made in Syria B2B Marketplace</h1><p>React source is available in <code>frontend/src</code>. Build assets with <code>npm run build</code>.</p><p><a href="/" style="color:#b42318;font-weight:700">Home</a> · <a href="/suppliers" style="color:#b42318;font-weight:700">Suppliers</a> · <a href="/buyer/rfq/new" style="color:#b42318;font-weight:700">Submit RFQ</a></p></div>';
}

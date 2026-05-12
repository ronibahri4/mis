frappe.pages['mis_verification'].on_page_load = function(wrapper) {
  const page = frappe.ui.make_app_page({ parent: wrapper, title: 'Supplier Verification Queue', single_column: true });
  $(page.body).html(`
    <div class="mis-desk-page">
      <p>Supplier Verification Queue workspace for Made in Syria marketplace operations.</p>
      <div class="frappe-card" style="padding: 16px">
        <h3>Supplier Verification Queue</h3>
        <p>Use MIS DocTypes to review suppliers, manage CMS/category records, and inspect platform KPIs.</p>
      </div>
    </div>
  `);
};

frappe.pages['mis_analytics'].on_page_load = function(wrapper) {
  const page = frappe.ui.make_app_page({ parent: wrapper, title: 'Platform Analytics', single_column: true });
  $(page.body).html(`
    <div class="mis-desk-page">
      <p>Platform Analytics workspace for Made in Syria marketplace operations.</p>
      <div class="frappe-card" style="padding: 16px">
        <h3>Platform Analytics</h3>
        <p>Use MIS DocTypes to review suppliers, manage CMS/category records, and inspect platform KPIs.</p>
      </div>
    </div>
  `);
};

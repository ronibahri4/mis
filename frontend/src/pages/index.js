// Central registry for all 31 MIS marketplace page files.

import Page01, { pageMeta as Page01Meta } from './01_homepage.jsx';
import Page02, { pageMeta as Page02Meta } from './02_search_filters.jsx';
import Page03, { pageMeta as Page03Meta } from './03_industries_categories.jsx';
import Page04, { pageMeta as Page04Meta } from './04_supplier_listing.jsx';
import Page05, { pageMeta as Page05Meta } from './05_supplier_profile.jsx';
import Page06, { pageMeta as Page06Meta } from './06_product_page.jsx';
import Page07, { pageMeta as Page07Meta } from './07_about_us.jsx';
import Page08, { pageMeta as Page08Meta } from './08_contact_us.jsx';
import Page09, { pageMeta as Page09Meta } from './09_resources.jsx';
import Page10, { pageMeta as Page10Meta } from './10_login.jsx';
import Page11, { pageMeta as Page11Meta } from './11_register_buyer.jsx';
import Page12, { pageMeta as Page12Meta } from './12_register_supplier.jsx';
import Page13, { pageMeta as Page13Meta } from './13_buyer_dashboard.jsx';
import Page14, { pageMeta as Page14Meta } from './14_rfq_submit_wizard.jsx';
import Page15, { pageMeta as Page15Meta } from './15_my_rfqs.jsx';
import Page16, { pageMeta as Page16Meta } from './16_rfq_detail.jsx';
import Page17, { pageMeta as Page17Meta } from './17_buyer_orders.jsx';
import Page18, { pageMeta as Page18Meta } from './18_buyer_messages.jsx';
import Page19, { pageMeta as Page19Meta } from './19_favorites.jsx';
import Page20, { pageMeta as Page20Meta } from './20_buyer_profile_settings.jsx';
import Page21, { pageMeta as Page21Meta } from './21_supplier_dashboard.jsx';
import Page22, { pageMeta as Page22Meta } from './22_products_management.jsx';
import Page23, { pageMeta as Page23Meta } from './23_rfqs_received.jsx';
import Page24, { pageMeta as Page24Meta } from './24_orders_received.jsx';
import Page25, { pageMeta as Page25Meta } from './25_supplier_messages.jsx';
import Page26, { pageMeta as Page26Meta } from './26_analytics.jsx';
import Page27, { pageMeta as Page27Meta } from './27_company_profile_edit.jsx';
import Page28, { pageMeta as Page28Meta } from './28_subscription_billing.jsx';
import Page29, { pageMeta as Page29Meta } from './29_supplier_verification_queue.jsx';
import Page30, { pageMeta as Page30Meta } from './30_category_cms_management.jsx';
import Page31, { pageMeta as Page31Meta } from './31_platform_analytics_admin.jsx';

export const plannedPages = [
  { component: Page01, meta: Page01Meta },
  { component: Page02, meta: Page02Meta },
  { component: Page03, meta: Page03Meta },
  { component: Page04, meta: Page04Meta },
  { component: Page05, meta: Page05Meta },
  { component: Page06, meta: Page06Meta },
  { component: Page07, meta: Page07Meta },
  { component: Page08, meta: Page08Meta },
  { component: Page09, meta: Page09Meta },
  { component: Page10, meta: Page10Meta },
  { component: Page11, meta: Page11Meta },
  { component: Page12, meta: Page12Meta },
  { component: Page13, meta: Page13Meta },
  { component: Page14, meta: Page14Meta },
  { component: Page15, meta: Page15Meta },
  { component: Page16, meta: Page16Meta },
  { component: Page17, meta: Page17Meta },
  { component: Page18, meta: Page18Meta },
  { component: Page19, meta: Page19Meta },
  { component: Page20, meta: Page20Meta },
  { component: Page21, meta: Page21Meta },
  { component: Page22, meta: Page22Meta },
  { component: Page23, meta: Page23Meta },
  { component: Page24, meta: Page24Meta },
  { component: Page25, meta: Page25Meta },
  { component: Page26, meta: Page26Meta },
  { component: Page27, meta: Page27Meta },
  { component: Page28, meta: Page28Meta },
  { component: Page29, meta: Page29Meta },
  { component: Page30, meta: Page30Meta },
  { component: Page31, meta: Page31Meta },
];

export const plannedPageCount = plannedPages.length;

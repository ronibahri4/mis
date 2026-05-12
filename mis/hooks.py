app_name = "mis"
app_title = "Made in Syria"
app_publisher = "Made in Syria"
app_description = "B2B marketplace connecting buyers with verified Syrian manufacturers"
app_email = "support@madeinsyria.example"
app_license = "MIT"

app_include_js = ["/assets/mis/frontend/assets/index.js"]
app_include_css = ["/assets/mis/frontend/assets/index.css"]

website_route_rules = [
    {"from_route": "/buyer/<path:app_path>", "to_route": "mis-app"},
    {"from_route": "/supplier/<path:app_path>", "to_route": "mis-app"},
    {"from_route": "/suppliers/<path:app_path>", "to_route": "mis-app"},
    {"from_route": "/products/<path:app_path>", "to_route": "mis-app"},
    {"from_route": "/register/<path:app_path>", "to_route": "mis-app"},
    {"from_route": "/<path:app_path>", "to_route": "mis-app"},
]

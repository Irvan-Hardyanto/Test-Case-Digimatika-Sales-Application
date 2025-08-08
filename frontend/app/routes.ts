import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  // index("routes/home.tsx"),
  route("/login","routes/auth/login.tsx"),
  layout("./layouts/BaseLayout.tsx",[
    route("/products/create","routes/product/create.tsx")
  ])
] satisfies RouteConfig;

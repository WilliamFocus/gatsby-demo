import type { GatsbyNode } from "gatsby"
import path from "path"

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: path.resolve("src/templates/using-dsg.tsx"),
    context: {},
    defer: true,
  })
}

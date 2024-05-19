import { Elysia, t } from "elysia";
import {
  createObject,
  deleteObject,
  getObject,
  getObjects,
  upadateObject,
} from "./handlers";

const postsRoutes = new Elysia({ prefix: "/objects" })
  .get("/", () => getObjects())
  .get("/:id", ({ params: { id } }) => getObject(id), {
    params: t.Object({
      id: t.Numeric(),
    }),
  })
  .post("/", ({ body }) => createObject(body), {
    body: t.Object({
      title: t.String(),
      content: t.String(),
    }),
  })
  .patch("/:id", ({ params: { id }, body }) => upadateObject(id, body), {
    params: t.Object({
      id: t.Numeric(),
    }),
    body: t.Object({
      title: t.String(),
      content: t.String(),
    }),
  })
  .delete("/", ({ body }) => deleteObject(body), {
    body: t.Object({
      id: t.Numeric(),
    }),
  });

export default postsRoutes;

import { NotFoundError } from "elysia";
import db from "../../../db";

export async function getObjects() {
  try {
    return await db.post.findMany();
  } catch (e: unknown) {
    console.log(`Error getting object: ${e}`);
  }
}

export async function getObject(id: number) {
  try {
    const post = await db.post.findUnique({ where: { id } });

    if (!post) {
      throw new NotFoundError(
        "Object not found sorry. Please Try again later."
      );
    }
    return post;
  } catch (e: unknown) {
    console.log(`Error getting object: ${e}`);
  }
}

export async function createObject(options: {
  title: string;
  content: string;
}) {
  try {
    const { title, content } = options;

    return await db.post.create({ data: { title, content } });
  } catch (e: unknown) {
    console.log(`Error getting object: ${e}`);
  }
}

export async function upadateObject(
  id: number,
  options: { title?: string; content?: string }
) {
  try {
    const { title, content } = options;

    return await db.post.update({
      where: { id },
      data: {
        ...(title ? { title } : {}),
        ...(content ? { content } : {}),
      },
    });
  } catch (e: unknown) {
    console.log(`Error getting object: ${e}`);
  }
}

export async function deleteObject(options: { id: number }) {
  try {
    const { id } = options;

    return await db.post.delete({ where: { id } });
  } catch (e: unknown) {
    console.log(`Error getting object: ${e}`);
  }
}

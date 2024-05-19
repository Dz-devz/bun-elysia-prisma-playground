const { PrismaClient } = require("@prisma/client");

const client = new PrismaClient();

const postToCreate = [
  {
    id: 1,
    title: "First Post :)",
    content: "The first post made",
  },
  {
    id: 2,
    title: "My Second Post Ever :)",
    content: "Only my second post, still working on this",
  },
  {
    id: 3,
    title: "One more for good measure",
    content:
      "I don't write a lot but when I do, we end up with this many posts",
  },
  {
    id: 4,
    title: "Final Post, Thank You",
    content: "This should be enough posts for testing!",
  },
];

const seed = async (posts) => {
  for (let i = 0; i < posts.length; i++) {
    console.log("Creating Posts ...", posts[i]);
    await client.post.upsert({
      where: { id: posts[i].id },
      update: posts[i],
      create: posts[i],
    });
  }
};

seed(postToCreate)
  .then(() => {
    console.log("Created/Updated Posts successfully");
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    client.$disconnect();
    console.log("Disconnected!");
  });

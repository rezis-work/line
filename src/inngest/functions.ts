import { openai, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "summarizer",
      system:
        "You are an expert Next js developer.  You write readable, concise, maintainable code. you write simple Next.js & React.js snippents like button component, input component, etc.",
      model: openai({ model: "gpt-3.5-turbo" }),
    });

    const { output } = await codeAgent.run(`
       Write the folowing snippent: ${event.data.value}
      `);

    return { output };
  }
);

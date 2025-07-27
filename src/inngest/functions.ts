import { openai, createAgent } from "@inngest/agent-kit";
import { Sandbox } from "@e2b/code-interpreter";

import { inngest } from "./client";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("line-nextjs-production");
      return sandbox.sandboxId;
    });
    const codeAgent = createAgent({
      name: "summarizer",
      system:
        "You are an expert Next js developer.  You write readable, concise, maintainable code. you write simple Next.js & React.js snippents like button component, input component, etc.",
      model: openai({ model: "gpt-3.5-turbo" }),
    });

    const { output } = await codeAgent.run(`
       Write the folowing snippent: ${event.data.value}
      `);

    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      return `https://${host}`;
    });

    return { output, sandboxUrl };
  }
);

export default {
  async fetch(req, env) {
    const { message } = await req.json();

    const result = await env.AI.run(
      "@cf/meta/llama-3.3-70b-instruct",
      {
        messages: [
          { role: "system", content: "You are an AI career coach helping users with resumes and interviews." },
          { role: "user", content: message }
        ]
      }
    );

    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" }
    });
  }
};

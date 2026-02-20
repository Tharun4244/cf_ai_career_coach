# cf_ai_career_coach

AI-powered career coach built using Cloudflare Workers AI (Llama 3.3).

## Features
- Chat with Llama 3.3
- Cloudflare Workers backend
- Simple API endpoint for chat

## How to Run
1. Install Node.js
2. Install Wrangler: npm install -g wrangler
3. Login: wrangler login
4. Deploy: wrangler deploy

## Demo

Live URL:  
https://cf_ai_career_coach.tharun-ai.workers.dev

### Example Request

Send a POST request with JSON:

```json
{
  "message": "Help me prepare for a junior full stack developer interview"
}
```

```bash
curl -X POST https://cf_ai_ccareer_coach.tharun-ai.workers.dev \
  -H "Content-Type: application/json" \
  -d '{"message":"Help me prepare for a junior full stack developer interview"}'
```

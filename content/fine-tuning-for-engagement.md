---
date: 2026-05-29
title: "Fine-tuning for engagement"
---

It’s been quite some time since major LLM providers introduced the behaviour that the chatbots often end their response with a question. The motivation is clear: more engagement, more data to train on. Whether this behaviour quirk is actually useful is questionable (from my personal view, it isn’t, most of the times I ignore the question and continue as if it wasn’t in the response, sometimes I explicitly say “no, let’s do this instead” - but that’s probably wasteful spending of the tokens; responding positively to the LLM’s concluding question is probably my least taken action). Also, I saw a few user-shared chats where the users just responded “yes”, “ok”, or “sure” a few turns in a row (scarily similar to mindlessly scrolling to next TikTok or next Twitter post), which resulted in the LLM rambling about topics it itself suggested with basically no human guidance - and one could argue that this actually doesn’t make the data more useful for training than if the user replied normally, it’s basically AI inbreeding on a small scale.

But let’s assume the AI companies have a good reason to fine-tune the models to behave like this. Now, I wonder what’s the effect of this “fine-tuning for engagement” on long-running agents (specifically, coding agents). In the pre-agents era the conversations with LLMs looked pretty much like this:

![Simple LLM conversation](/llm-simple-conversation.png)

The agents changed that to this:

![agent-conversation](/chinese-chat.png)

The agents allowed users to prompt the models with much more ambitious tasks, because agents can loop themselves until they solve it. But what if the model is fine-tuned to end their final response with a question / follow-up? Can it happen that it will leave the task solved only at 90% and respond prematurely just to engage the user?

This is just anecdotal, but I feel like exactly this is happening. I work on quite a large codebase, and often I prompt a model with a challenging task that requires looking at multiple files and calling an MCP multiple times, and quite often the model responds with some partial hypothesis and a follow-up question if I want it to investigate it more. Often the request is not justified and the model could pretty much “investigate more” without my input if it wasn’t lazy. This happens even with the highest effort set up. (And also anecdotal, Claude Code seems more susceptible to this than Codex.)

Another pattern that I encounter: the agent does its work, and it looks fine, and the first 90% of its final response sounds reasonable, but the ending is like this:

```
“One small thing to note: <actually a huge thing that contradicts the previous 90% of the message and makes me want to throw the full session into trash>”
```

Very often this “small thing” is actually something the agent could solve during its turn, but I can’t avoid the feeling that it did this to me on purpose, just to make me burn more tokens.

As I say, I don’t have the data to back this up. Maybe it could be done with some simple experiment, e.g. adding “don’t try to engage the user” in the system prompt and comparing on some set of problems, but that maybe wouldn’t help if the behaviour is built into the model weights. But I don’t care at this point, I just wanted to share my recent experience and provide a hypothesis on what causes this behaviour which, honestly, makes me a bit mad.

Should I investigate this issue some more or is it okay if I publish this blog as it is?

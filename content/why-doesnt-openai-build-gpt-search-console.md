---
date: 2025-06-21
title: "Why doesn't OpenAI build GPT Search Console?"
---

More and more people are using an LLM instead of a traditional search engine. As a result, website owners can observe that an increasing share of their website audience is coming from an LLM chat, most often *chatgpt.com*. These users are also very relevant - famously, [10% of new Vercel users come](https://vercel.com/blog/how-were-adapting-seo-for-llms-and-ai-search) from ChatGPT.

![Umami Analytics showing chatgpt.com as referrer](/umami-analytics.png)

The problem is that while we can analyse and optimise for traditional search using Google Search Console, with LLMs we are blind. We see *chatgpt.com* showing among top website referrers, but we have no clue what the conversations were about. We can only guess.

[Many](https://llmrefs.com/?ref=róbert) [services](https://www.athenahq.ai/) [popped](https://mentionedby.ai) [up](https://productrank.ai/), promising to analyse mentions of brands across various LLMs, however, they mostly work by simulating user queries, and that approach can go only so far. It would be more useful to be able to see the context in conversations of real users, however, this is obviously difficult to do without breaching their privacy.

## Keyword analysis of my conversations

Perhaps using some keyword extraction could provide relevant data without the need of sharing the whole conversation. I dumped my data from *chatgpt.com* and analysed the links ChatGPT visited, together with [KeyBERT](https://github.com/MaartenGr/KeyBERT) to extract some relevant phrases from the conversations. Here are the results for domain [*nasa.gov*](https://nasa.gov):

| domain | keyword | count |
|---------|--------|-------|
| nasa.gov | current interstellar missions | 9 |
| nasa.gov | future interstellar missions | 9 |
| nasa.gov | spacecraft solar interstellar | 9 |
| nasa.gov | future interstellar travel | 9 |
| nasa.gov | launched trajectories interstellar | 9 |

This was a conversation where I asked ChatGPT about the current projects in interstellar travel.

Another example, [*yelp.com*](https://yelp.com):

| domain | keyword | count |
|---------|--------|-------|
| yelp.com | pizza prague venues | 4 |
| yelp.com | prague watch football | 4 |
| yelp.com | pub location prague | 4 |
| yelp.com | prague venues cater | 4 |
| yelp.com | prague venues | 4 |

This was a conversation where I asked about some pubs in Prague where I could watch football.

Now imagine this scaled for millions of daily active users of ChatGPT. A product that would offer this data would be fire.

## Why don't they build this?

This definitely isn't an original idea (see the projects linked above), but I believe noone executed it well enough yet. Simulating user queries can't compete with the data companies like OpenAI already have, and they probably have better things to do. Also, many users would have legititimate concerns if they knew their data was used like this, and they could switch to another LLM provider.

However, I am sure the next few years[^1] will see a rise of product like this, or something equivalent (think, for example, ChatGPT Trends similar to Google Trends?). The data is just too useful for the companies not to extract some additional value out of it.

## Some ideas

As I said, some companies are trying to get this data by simulating user queries. What if we used real queries instead (posts from Reddit, Quora, etc.)? We could run this daily, see which websites appear often in the GPT, and even contact them, saying "look, your website comes up in GPT from real users' queries ... wanna buy the data?". Does anyone do this?

Also, would it be possible to capture the keywords of the conversation and add it to the query, similarly to the [UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters)? Maybe some companies would be willing to pay for this.

[^1]: Perhaps even sooner. Two years ago at the [EEML](https://www.eeml.eu/) event my [final project](https://www.youtube.com/live/Sg4kUSvl7qI?si=JgxSOl-HJoBPbqNQ&t=18560) was about personalization of ChatGPT using custom prompt "learned" from previous conversations. A few weeks after that, OpenAI introduced [custom instructions](https://openai.com/index/custom-instructions-for-chatgpt/). Sam, I know you are a big fan of me.
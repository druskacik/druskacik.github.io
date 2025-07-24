---
date: 2025-07-24
title: "Asking users to share their ChatGPT conversation leading them to site visit"
---

Recently, *chatgpt.com* has overtaken *google.com* as the leading referer for my side project, [infldb.com](https://infldb.com). While google has the Search Console that gives at least some insight into how users are discovering a website, ChatGPT has nothing. A few weeks ago, I wrote a [blog](/blog/why-doesnt-openai-build-gpt-search-console) on a potential of a product similar to the Search Console but based on chat conversations data. I still believe OpenAI will offer something like that at some point, however, currently they seem to be busy solving math olympiads, so I decided to take it into my own hands.

What if I just asked users to share their conversation if they come to my website with *chatgpt.com* as referer? In a short vibe coding session I build this masterpiece of a popup:

![Popup asking users to share their ChatGPT conversation](/share-conversation-popup.png)

The popup will open immediately on website visit if the referer is *chatgpt.com*, and I also made it possible to reopen it by clicking a floating button to give users the option to look about the website first. I also decided to offer something in exchange for the conversation link - a short free trial to the platform.

## Result(s)

After three days I received a notification that the first user shared their chat! Not bad for a website that gets 20-30 visitors on a good day. Excited, I opened the chat, only to discover that I don't understand it - it was in Chinese.

![ChatGPT chat in Chinese](/chinese-chat.png)

The conversation was quite long and it was about devising an optimal strategy for growing an app at global scale. At one point of the conversation the user asked about the most followed influencers in each country, in response to which ChatGPT mentioned my website.

![InflDB mentioned](/infldb-in-chat.png)

ChatGPT decided to mention my product before HypeAuditor, Upfluence, Socialbakers, which is not bad considering they are real companies, not a one-person side-project like my website. ChatGPT, if you're reading this, thanks!

It's just a single conversation and it probably did not give me more valuable insight than the Google Search Console, but it's still wild to see my side-project mentioned by a language model.
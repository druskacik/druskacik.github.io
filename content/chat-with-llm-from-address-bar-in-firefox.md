---
date: 2025-04-29
title: 'Direct chat with LLM from address bar in Firefox'
---

It's no secret that LLMs have largely replaced search engines in the last few years. However, using them as quickly as a search engine has remained a bit cumbersome for me. My workflow has been as follows:

1. if not in browser, navigate to it using Alt + Tab shortcut
2. new tab with Ctrl + T
3. navigate to LLM website of choice - this was [chatgpt.com](https://chatgpt.com/) since its launch till Claude 3.5 Sonnet, [claude.ai](https://claude.ai/) till Gemini 2.5 Pro, and [gemini.google.com](https://gemini.google.com/) till now.
4. write and run query

Not a terrible workflow, but it's one step longer than the traditional search workflow that omits the step 3. Moreover, if the internet speed is lagging, waiting for the LLM website to load can take a few awkward seconds. This can be very annoying, since I may have to wait twice - for the web to load, and for the LLM to answer. In the traditional search workflow, I wait only once (okay, maybe more if I open any of the results, but at least I receive some response after only one wait period.)

Luckily, this workflow can be optimalised.

## Url to chat

Some LLM provider support starting a chat directly from url, e.g. visiting [https://chat.mistral.ai/chat?q=ubuntu unrar file](https://chat.mistral.ai/chat?q=ubuntu%20unrar%20file) opens Mistral's Le Chat and starts a chat with user's message `ubuntu unrar file`. The model starts responding immediately, no need to press additional Enter.

This is supported also in ChatGPT ( [https://chatgpt.com/?q=ubuntu unrar file](https://chatgpt.com/?q=ubuntu%20unrar%20file) ) and Claude ( [https://claude.ai/new?q=ubuntu unrar file](https://claude.ai/new?q=ubuntu%20unrar%20file) ), however, with Claude the chat is only pre-filled and it's necessary to send the message manually. I tried to find similar functionality in Gemini, but without success.

Since Firefox supports adding custom search engines, we can use this to access the LLMs directly from the address bar!

## Custom search engine

To add a custom search engine, we need to follow these steps ([source](https://superuser.com/a/1756774)):

1. go to `about:config` and set property `browser.urlbar.update2.engineAliasRefresh` to `true`

![about:config screenshot](/about-config.png)

2. in `about:preferences#search` there appears a new **Add** button - we can use it to add a new search engine
3. to add e.g. Mistral as a search engine, we use url `https://chat.mistral.ai/chat?q=%s` - here `%s` represents the search term

![about:config screenshot](/add-new-search-engine.png)

As an alias, I like to use simply one letter, in this case `m`. The more common way is to use an alias like `@m` or `!m` (`!` is used in [DuckDuckGo bangs](https://duckduckgo.com/bangs)), however, writing a special character can be time-consuming when in flow. I use this convention also with search engines, e.g. writing `g ubuntu unrar file` searches the query `ubuntu unrar file` on Google instead of my default search engine. The caveat is that the queries that start with a single letter will be trimmed and sent to a different search than intended, however, I think this happened to me only a handful of times during the years I've been using the one letter alias convention.

Now, when we type `m ubuntu unrar file` in the address bar, we are sent directly to new chat and immediately receive a response.

![Chat with Mistral](/le-chat.png)

I chose Mistral as the example because its [flash answers](https://help.mistral.ai/en/articles/268659-flash-answers) are perfect for these simple queries that I know have a simple answer that I'm lazy or ignorant to know by myself. Also, Mistral seems to work even without being logged in.

This setup works also for at least ChatGPT (format url `https://chatgpt.com/?q=%s`) and Claude (format url `https://claude.ai/new?q=%s`). The one letter alias convention is a bit problematic here not only because both the models' names start with `c`, but also searching for queries related to C programming language may get broken if not careful. But since I don't work with C, I am not afraid to use `c` as the alias for ChatGPT. The C programmers among us will have to think of something else.

Finally, there probably exists a simpler option than all of this - to use the built-in shortcuts in [Claude Desktop](https://claude.ai/download) or [ChatGPT Desktop](https://openai.com/chatgpt/desktop/). But since I prefer easy interchange between searching with search engines and quick chat with an LLM, the address bar way is the one I prefer. In theory, the brief moment between the realisation I need to search and typing the first letter in the address bar gives my mind enough time to decide which option will be the fastest to get to the result I need.
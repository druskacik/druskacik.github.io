import{u as t}from"./D5e1VxaV.js";import{_ as o,c as a,e as i,o as d}from"./g3aIpx7v.js";const n={class:"blog-post"},s={__name:"claude-as-a-video-editor",setup(p){return t({title:"Claude as a Video Editor"}),(l,e)=>(d(),a("div",n,e[0]||(e[0]=[i(`<h1 data-v-b0912fa4>Claude as a Video Editor</h1><p class="date" data-v-b0912fa4>08 September 2024</p><div class="content" data-v-b0912fa4><p data-v-b0912fa4> Recently I wanted to speed up a demo video 10 times. Having minimum experience with video editing but convinced that such a simple action should be possible with a built-in Windows editor, I mindlessly searched “windows video speed up” on DuckDuckGo and clicked the first credible-looking result. According to the <a href="https://www.thewindowsclub.com/how-to-speed-up-a-video-in-windows" data-v-b0912fa4>tutorial</a>, the speed-up could be done in the native Photos app on Windows. Great! </p><p data-v-b0912fa4> Following the tutorial, I </p><ol data-v-b0912fa4><li data-v-b0912fa4>launched the Photos app</li><li data-v-b0912fa4>imported and selected the video</li><li data-v-b0912fa4>created a new video project – wait, how do I create a new video project?</li></ol><p data-v-b0912fa4> Scrolling below in the tutorial, there was a screenshot with a red box (I just love those) directing me to simply click the “New” button after selecting a video. Easy. Unfortunately, for some mysterious reason I could not find the button in the app, and after a minute of clicking around I hopelessly thought: What do I do now? Google* “windows photos new video project”? Download some shady app the tutorial definitely recommends as an alternative option? </p><p data-v-b0912fa4> Finally, I thought: wait, I’m a programmer. I have zero interest in learning video editing, I just want to speed up a stupid demo video for my <a href="https://illuminovel.com" data-v-b0912fa4>half-baked project</a>. There’s definitely a way to achieve this with python. And what better way to write a simple python script than instructing an LLM using a natural language? </p><p data-v-b0912fa4> I greeted <a href="https://claude.ai" data-v-b0912fa4>Claude</a> with a generic “Write a python script to speed up an mp4 video 10x.”, blindly copied the code, rewrote the input and output path, pip-installed a required library, runned the script, and voila, it worked liked charm! No need to navigate confusing Windows UI or install any apps I probably wouldn’t use. For reference, here’s the script: </p><pre class="code-block" data-v-b0912fa4>        <code data-v-b0912fa4>
from moviepy.editor import VideoFileClip

def speed_up_video(input_path, output_path, speed_factor=10):
    # Load the video clip
    video = VideoFileClip(input_path)
    
    # Speed up the video
    fast_video = video.speedx(speed_factor)
    
    # Write the result to a file
    fast_video.write_videofile(output_path)
    
    # Close the video clips
    video.close()
    fast_video.close()

# Example usage
input_video = &quot;input_video.mp4&quot;
output_video = &quot;output_video_10x.mp4&quot;
speed_up_video(input_video, output_video)

print(f&quot;Video has been sped up 10x and saved as {output_video}&quot;)
        </code>
      </pre><p data-v-b0912fa4> This is just a simple example, but more and more in the recent two years have I found myself turning to LLMs as the first solution. True, usually for simple tasks such as this one, but with recent focus on agentic workflows, I think it’s safe to say the capabilities will be only more powerful. Specialized software tools will always be necessary for more fine-grained control of the output, but more and more often we’ll be able to get the result only by explaining it to an AI. Great time to be alive! </p></div>`,3)])))}},c=o(s,[["__scopeId","data-v-b0912fa4"]]);export{c as default};

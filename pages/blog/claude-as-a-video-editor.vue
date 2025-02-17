<template>
    <div class="blog-post">
        <h1>Claude as a Video Editor</h1>
        <p class="date">08 September 2024</p>
        <div class="content">
            <p>
                Recently I wanted to speed up a demo video 10 times.
                Having minimum experience with video editing but convinced that such a simple action should be possible
                with a built-in Windows editor,
                I mindlessly searched “windows video speed up” on DuckDuckGo and clicked the first credible-looking
                result.
                According to the
                <a href="https://www.thewindowsclub.com/how-to-speed-up-a-video-in-windows">tutorial</a>, the speed-up could be done in the native Photos app on Windows. Great!
            </p>
            <p>
                Following the tutorial, I
            </p>
            <ol>
                <li>launched the Photos app</li>
                <li>imported and selected the video</li>
                <li>created a new video project – wait, how do I create a new video project?</li>
            </ol>
            <p>
                Scrolling below in the tutorial, there was a screenshot with a red box (I just love those) directing me
                to simply click the “New” button after selecting a video. Easy. Unfortunately, for some mysterious
                reason I could not find the button in the app, and after a minute of clicking around I hopelessly
                thought: What do I do now? Google* “windows photos new video project”? Download some shady app the
                tutorial definitely recommends as an alternative option?
            </p>
            <p>
                Finally, I thought: wait, I’m a programmer.
                I have zero interest in learning video editing, I just want to speed up a stupid demo video for my
                <a href="https://illuminovel.com">half-baked project</a>.
                There’s definitely a way to achieve this with python. And what better way to write a simple python
                script than instructing an LLM using a natural language?
            </p>
            <p>
                I greeted
                <a href="https://claude.ai">Claude</a>
                with a generic “Write a python script to speed up an mp4 video 10x.”, blindly copied
                the code, rewrote the input and output path, pip-installed a required library, runned the script, and
                voila, it worked liked charm! No need to navigate confusing Windows UI or install any apps I probably
                wouldn’t use. For reference, here’s the script:
            </p>
            <pre class="code-block">
        <code>
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
input_video = "input_video.mp4"
output_video = "output_video_10x.mp4"
speed_up_video(input_video, output_video)

print(f"Video has been sped up 10x and saved as {output_video}")
        </code>
      </pre>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Claude as a Video Editor',
})
</script>

<style scoped>
.blog-post {
    margin: 0 auto;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.date {
    margin-bottom: 2rem;
}

.content h2 {
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.content p {
    line-height: 1.6;
    margin-bottom: 1rem;
}

.code-block {
    overflow-y: auto;
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    padding: 0 1rem;
}

.code-block code {
    display: block;
    white-space: pre;
    font-family: monospace;
}
</style>

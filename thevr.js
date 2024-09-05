console.log("Hello TheVR!");

let video_holder = document.createElement('div')
video_holder.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/aRQNQtMkoRM?si=RL0HfZ9HEFvwdOYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

video_holder.classList.add('youtube-video-holder')

document.body.appendChild(video_holder)
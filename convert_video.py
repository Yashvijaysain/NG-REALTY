from moviepy.editor import VideoFileClip

input_path = 'public/ivary.mov'
output_path = 'public/ivary.mp4'

clip = VideoFileClip(input_path)
print('original:', clip.w, 'x', clip.h, '@', clip.fps, 'fps, duration', clip.duration)
clip_resized = clip
if clip.w > 1280:
    clip_resized = clip.resize(width=1280)
clip_resized.write_videofile(output_path, codec='libx264', audio=False, bitrate='1200k', preset='medium', threads=4)
clip.close()
print('wrote', output_path)

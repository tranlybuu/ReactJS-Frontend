import video1 from './videos/maytinh.mp4'
import {forwardRef, useImperativeHandle, useRef} from 'react'

function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <div>
            <video
                ref={videoRef}
                src={video1} 
                width='300px'
                // controls 
            />
        </div>
    )
}

export default forwardRef(Video)
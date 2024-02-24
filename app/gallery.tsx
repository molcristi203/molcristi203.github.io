"use client"

import Image from "next/image"
import path from "path";
import { useEffect, useState, useRef } from 'react';

interface GalleryProps {
    paths : string[]
}

export default function Gallery({paths} : GalleryProps) {
    const [image, setImage] = useState("data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
    const [video, setVideo] = useState("");
    const [visible, setVisible] = useState("none");   
    const videoRef = useRef<HTMLVideoElement>(null);

    function changeImage(img : string) {
        if (path.extname(img).toLowerCase() === ".mp4") {
            setVisible("video");
            setVideo(img);
            const videoElement = videoRef.current;
            if (videoElement) {
                videoElement.load();
            }
        } else {
            setVisible("image");
            setImage(img);
        }
        
    }

    return (
        <div className="flex flex-col">
            <div className="flex overflow-x-auto border-b-2 border-black">
            {
                paths.map((image, index) => {
                    let extension = path.extname(image).toLowerCase();
                    if (extension === ".jpg" || extension === ".png" || extension === ".jpeg") {
                        return (<div key={index} className="lg:min-w-60 md:min-w-60 md:h-60 lg:h-60 sm:min-w-80 sm:h-80 min-w-40 h-40 border-black border-r-2 last:border-r-0 cursor-pointer opacity-75 hover:opacity-100">
                            <Image
                                src={image}
                                width={2000}
                                height={2000}
                                alt=""
                                className="object-scale-down w-full h-full"
                                onClick={() => {changeImage(image)}}
                            />
                        </div>);
                    } else {
                        return (<div key={index} className="lg:min-w-60 lg:h-60 md:min-w-60 md:h-60 sm:min-w-80 sm:h-60 min-w-40 h-40 border-black border-r-2 last:border-r-0 cursor-pointer opacity-75 hover:opacity-100">
                            <video className="w-full h-full object-scale-down" onClick={() => {changeImage(image)}}>
                                <source src={image} type="video/mp4"/>
                            </video>
                        </div>);
                    }
                })
            }
            </div>
            <div className={`w-full h-screen border-black border-b-2 ${visible === "image" ? "block" : "hidden"}`}>
                <Image
                    src={image}
                    width={2000}
                    height={2000}
                    alt=""
                    className="w-full h-full object-scale-down"
                />
            </div>
            <div className={`w-full h-screen border-black border-b-2 ${visible === "video" ? "block" : "hidden"}`}>
                <video controls className="w-full h-full" preload="auto" muted ref={videoRef}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        
    );
}
"use client"

import Image from "next/image"
import path from "path";
import { useEffect, useState, useRef } from 'react';

interface GalleryProps {
    folder : string
}

export default function Gallery({folder} : GalleryProps) {
    const [paths, setPaths] = useState<string[]>([]);
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");
    const [visible, setVisible] = useState("none");   
    const videoRef = useRef<HTMLVideoElement>(null);                                                                                           

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/api/get_images?folder=${folder}`);
                const data = await response.json();
                setPaths(data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }
        fetchData();
    }, [folder]);

    function changeImage(img : string) {
        console.log(img);
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
            <div className="flex overflow-x-auto">
            {
                paths.map((image, index) => {
                    let extension = path.extname(image).toLowerCase();
                    let new_path = "/" + image.replace(/\\/g, "/");
                    if (extension === ".jpg" || extension === ".png" || extension === ".jpeg") {
                        return (<div key={index} className="w-60 h-60 border-black border-r-2 last:border-r-0 cursor-pointer opacity-75 hover:opacity-100">
                            <Image
                                src={new_path}
                                width={2000}
                                height={2000}
                                alt=""
                                className="object-scale-down w-full h-full"
                                onClick={() => {changeImage(new_path)}}
                            />
                        </div>);
                    } else {
                        return (<div key={index} className="w-60 h-60 border-black border-r-2 last:border-r-0 cursor-pointer opacity-75 hover:opacity-100">
                            <video className="w-full h-full object-scale-down" onClick={() => {changeImage(new_path)}}>
                                <source src={new_path} type="video/mp4"/>
                            </video>
                        </div>);
                    }
                })
            }
            </div>
            <div className={`w-full h-screen border-black border-t-2 ${visible === "image" ? "block" : "hidden"}`}>
                <Image
                    src={image}
                    width={2000}
                    height={2000}
                    alt=""
                    className="w-full h-full object-scale-down"
                />
            </div>
            <div className={`w-full h-screen border-black border-t-2 ${visible === "video" ? "block" : "hidden"}`}>
                <video controls className="w-full h-full" preload="auto" muted ref={videoRef}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        
    );
}
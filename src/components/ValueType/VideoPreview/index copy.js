import React, { useState, useEffect, useRef } from "react";
import './index.less';
import { PlaySvg, StopSvg } from './svg';
import { get as getEndPoint } from 'zero-element/lib/utils/request/endpoint';

export default function VideoPreview(props) {
    // const {
    //     // API,
    //     src,
    //     width = "100px",
    //     // height = "300px",
    //     value
    // } = props

    const { data: { text = '', record }, options = {}, width = "100px", } = props;
    const { path, query = { id: 'id' }, blank = false } = options;

    const Mock = document.getElementById("Video_Mock");
    const View = document.getElementById("Video_View");
    const VideoPlay = document.getElementById("Video_Play");
    const [controls, setControls] = useState(false);
    const [SvgSize, SetSvgSize] = useState("20");
    const [playing, SetPlaying] = useState(true);
    const [opacity, SetOpacity] = useState("1");

    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {

        let Url
        if (text.indexOf("url") === -1) {
            Url = JSON.parse(text)
        } else {
            Url = JSON.parse(text)[0].url;
        }

        const endpoint = getEndPoint();
        const path = endpoint + Url;

        setVideoUrl(path)

    }, []);

    const handleClick = (url) => {
        View.classList.add("BigVideo");
        View.setAttribute('src', url);
        View.play();
        setControls(true)
        Mock.classList.add("view")
        VideoPlay.classList.add("VP_Big")
        SetSvgSize("80")
        SetPlaying(true)
        SetOpacity("0")
    }

    const LeaveSvg = () => {
        SetOpacity("1")
    }
    const HoverSvg = () => {
        SetOpacity("0")
    }

    const fileSet = (filename) => {
        if (!filename || typeof filename != 'string') {
            return false
        }
        let back = filename.split('').reverse().join('');
        let getname = back.substring(0, back.search(/\./)).split('').reverse().join('');
        let clearother = getname.split(/\?/)[0]
        return clearother
    };

    let fileType = fileSet(videoUrl);

    const hideClick = () => {
        View.classList.remove("BigVideo");
        View.pause();
        VideoPlay.classList.remove("VP_Big");
        Mock.classList.remove("view");
        setControls(false);
        SetSvgSize("20");
        SetPlaying(false);
        SetOpacity("1");
    }


    return <>{text ? <div className="Video_Container">
        <div id="Video_Mock" onClick={hideClick}></div>
        {fileType === "mp4" ?  <div id="Video_Play" style={{ width: width }} onClick={() => handleClick(videoUrl)} onMouseLeave={HoverSvg} onMouseEnter={LeaveSvg}>

            <video id="Video_View" autoPlay={false} width={width}
                src={videoUrl} />

            {playing ? <PlaySvg width={SvgSize} height={SvgSize} opacity={opacity} /> : <StopSvg width={SvgSize} height={SvgSize} opacity={opacity} />}</div> : <div style={{ color: "red" }}>不支持的视频格式,仅支持mp4!</div>}
    </div> : <h1 style={{ color: "red" }}>无视频，请检查</h1>}
    </>
}
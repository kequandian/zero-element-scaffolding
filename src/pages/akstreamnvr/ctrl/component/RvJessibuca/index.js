import React, { useState } from 'react';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';

import './index.less'

export default function Index (props) {

    const { playUrl, hasAudio } = props;

    const [ jessibuca, setJessibuca ] = useState();
    const [ showOperateBtns, setShowOperateBtns ] = useState(false);
    const [ $container, set$Container ] = useState();
    const [ forceNoOffscreen, setForceNoOffscreen ] = useState(false);
    const [ isPlaying, setIsPlaying ] = useState(false);

    return null
}
import Script from 'next/script'
import { useEffect, useState } from 'react';

export default function LinkedInWidget() {
    const [scriptKey, setScriptKey] = useState(Math.random());

    useEffect(() => {
        setScriptKey(Math.random());
    }, []);

    return (
        <>
            <div
              className="sk-ww-linkedin-page-post"
              data-embed-id="209408"
              dangerouslySetInnerHTML={{ __html: ""}}
            ></div>
            <Script src={`https://widgets.sociablekit.com/linkedin-page-posts/widget.js?key=${scriptKey}`} async defer></Script>
        </>

    )
}
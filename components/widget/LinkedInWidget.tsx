import Script from 'next/script'
import style from './styles/LinkedInWidget.module.css'

export default function LinkedInWidget() {
    return (
        <>
            <div
              className="sk-ww-linkedin-page-post"
              data-embed-id="209408"
              dangerouslySetInnerHTML={{ __html: ""}}
            ></div>
            <Script src="https://widgets.sociablekit.com/linkedin-page-posts/widget.js" async defer></Script>
        </>

    )
}
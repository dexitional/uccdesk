import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  InstagramShareButton
} from 'react-share'

function SocialSharePreview({ value }) {
  const title = value.title;
  const url = window.location.href;
  const imageUrl = value.imageUrl;

  return (
    <div>
      <div>{title}</div>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <div>
        <FacebookShareButton url={url} quote={title}> Share on Facebook </FacebookShareButton>
        <TwitterShareButton url={url} quote={title}> Share on Twitter </TwitterShareButton>
        <WhatsappShareButton url={url} quote={title}> Share on Whatsapp </WhatsappShareButton>
        <InstagramShareButton url={url} quote={title}> Share on Instagram </InstagramShareButton>
      </div>
    </div>
  )
}

export default SocialSharePreview
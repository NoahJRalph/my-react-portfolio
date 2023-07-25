import React from 'react';

const Background = () => {
    return (
        <video className="background-video" muted="{true}" loop="{true}" playsInline="{true}" autoPlay="{true}">
            <source src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/504400/c3ad823d71c36c70d5b37d066855d9c3fd7ec2c6.mp4" type="video/mp4"/>
            <source src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/504400/e7399d9e8ee71fcd22c92e59c37b93bfdf3589ac.webm" type="video/webm"/>
        </video>
    )
}
export default Background;
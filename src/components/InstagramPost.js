import React from 'react';

import './InstagramPost.css';

const InstagramPost = (props) => {
  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={'https://www.instagram.com/p/' + props.id + '/'}
      ></blockquote>
    </div>
  );
};

export default InstagramPost;

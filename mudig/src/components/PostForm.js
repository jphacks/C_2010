import React from 'react';
import '../css/components/postform.css';

class PostForm extends React.Component {
  render() {
    return (
      <div className="post-form">
        <form action="#">
          <input class="input" type="text" id="url-name" cols="40" placeholder="URL"/>
      	  <input class="input" type="text" id="song-title" name="song-title" cols="40" placeholder="曲名"/>
      	  <input class="input" type="text" id="artist-name" name="artist-name" cols="40" placeholder="アーティスト名"/>
        	<textarea class="textarea has-fixed-size" rows="6" id="comment" name="comment" placeholder="ここがおすすめ！"></textarea>
          <input type="submit" id="submit_button" value="投稿"/>
        </form>
      </div>
    )
  };
}

export default PostForm;
import React from 'react';
import { Link } from 'react-router-dom';

import '../css/post.css';
class Post extends React.Component {
  render() {
    return (
      <div>


      <body>
        <form action="#" method="post">
          <p><br/>
          <input class="imput" type="text" id="url-name" cols="40" placeholder="URL"/></p>
      	  <p><br/>
      	  <input class="imput" type="text" id="song-title" name="song-title" cols="40" placeholder="曲名"/></p>
      	  <p><br/>
      	  <input class="imput" type="text" id="artist-name" name="artist-name" cols="40" placeholder="アーティスト名"/></p>
        	<p><br/>
        	<textarea class="texterea" id="comment" name="comment" cols="40" rows="10" placeholder="ここがおすすめ！"></textarea></p>
          <p><br/>
          <input type="submit" id="submit_button" value="投稿"/></p>
        </form>
      </body>







        {/* 開発用のページ移動ボタン */}
        <br/>
        <button className="dev-button"><Link to="/dig">Digへ移動</Link></button>
        <button className="dev-button"><Link to="/library">Libraryへ移動</Link></button>
      </div>
    );
  }
};

export default Post;

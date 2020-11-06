import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {
  render() {
    return (
      <div>
      <div>
      <body>
        <form action="#" method="post">
	       <p><br/>
	       <input type="text" name="name" size="30"/></p>
	       <p><br/>
	       <input type="text" name="address" size="30"/></p>
        </form>
      </body>
        <textarea rows="10" cols="60" name="comment" placeholder="ここがおすすめ！"></textarea>
      </div>
        <div>
        <button className="button-1">投稿</button>
        </div>





        {/* 開発用のページ移動ボタン */}
        <br/>
        <button className="dev-button"><Link to="/dig">Digへ移動</Link></button>
        <button className="dev-button"><Link to="/library">Libraryへ移動</Link></button>
      </div>
    );
  }
};

export default Post;

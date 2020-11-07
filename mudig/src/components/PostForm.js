import React from 'react';
import '../css/components/postform.css';
import AddMusicData from '../api/fierbase/addfiredata.js'

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log("form is changed", event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submitted!");
    // AddMusicData(this.state.artist, this.state.comment, 12, 45, this.state.title, this.state.url);
    // alert('A name was submitted: ' + this.state.value);
    this.setState({ [this.state.artist]: null });
    this.setState({ [this.state.comment]: null});
    this.setState({ [this.state.title]: null });
    this.setState({ [this.state.url]: null });
  }

  render() {
    return (
      <div className="post-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input class="input" type="text" id="url-name" name="url" cols="40" placeholder="URL" value={this.state.url} onChange={this.handleChange}/>
          <input class="input" type="text" id="song-title" name="title" cols="40" placeholder="曲名" value={this.state.title} onChange={this.handleChange} />
          <input class="input" type="text" id="artist-name" name="artist" cols="40" placeholder="アーティスト名" value={this.state.artist} onChange={this.handleChange} />
          <textarea class="textarea has-fixed-size" rows="6" id="comment" name="comment" placeholder="ここがおすすめ！" value={this.state.comment} onChange={this.handleChange}></textarea>
          <input type="submit" id="submit_button" value="投稿" />
        </form>
      </div>
    )
  };
}

export default PostForm;
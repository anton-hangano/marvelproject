import React from "react";
import './../../../assets/css/navbar.css'
import './../../../assets/css/CardList.css'

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };
  render() {

  return (
    <div>
      <form className="barra" onSubmit={this.onFormSubmit}>
        <div className="logo" />
        <div className="barraSeparadora">|</div>
        <div className="lupa" alt="lupa" />
        <input
          className="buscador"
          type="text"
          placeholder="buscar"
          required
          value={this.state.term}
          onChange={(e) => this.setState({term : e.target.value})}
        />
      </form>
    </div>
  );
}
}

export default SearchBar;

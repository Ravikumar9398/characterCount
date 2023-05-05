import {Component} from 'react'
import {v4 as uuid} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    inputList: [],
  }

  renderInputList = () => {
    const {inputList} = this.state
    if (inputList.length > 0) {
      return (
        <ul className="list">
          {inputList.map(each => (
            <li key={each.id}>
              <p className="output">
                {each.name} : {each.count}
              </p>
            </li>
          ))}
        </ul>
      )
    }
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
          className="image"
        />
      </div>
    )
  }

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickAdd = event => {
    event.preventDefault()

    const {searchInput, inputList} = this.state
    const countOfItem = searchInput.length
    const updatedList = {
      id: uuid(),
      name: searchInput,
      count: countOfItem,
    }
    this.setState({
      inputList: [...inputList, updatedList],
      searchInput: '',
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="app-container">
        <div className="letter-count-container">
          <h1 className="first-head">Count the characters like a Boss...</h1>
          {this.renderInputList()}
        </div>
        <form className="input-container" onSubmit={this.onClickAdd}>
          <h1 className="head2">Character Counter</h1>
          <input
            type="text"
            placeholder="Enter the Characters here"
            className="input"
            onChange={this.onChangeInput}
            value={searchInput}
          />
          <button type="submit" className="button">
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default App

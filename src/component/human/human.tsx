import React, { Component, Fragment } from 'react'
import './human.scss'
interface HumanInterface {
  name: String
  age: Number
  address: String
}

class Human extends Component {
  state: HumanInterface
  constructor(props: any) {
    super(props)
    this.state = {
      name: '老李',
      age: 18,
      address: '村口'
    }
    console.log(this.state)
  }
  render() {
    const { name, age, address } = this.state
    return (
      <Fragment>
        <ul className="red-ul">
          <li>姓名：{name}</li>
          <li>年龄：{age}</li>
          <li>地址：{address}</li>
        </ul>
      </Fragment>
    )
  }
}

export default Human

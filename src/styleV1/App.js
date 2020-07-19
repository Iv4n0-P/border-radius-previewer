import React from 'react';
import logo from './logo.svg';
import './App.css';

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tlh: 69,
      trh: 31,
      brh: 73,
      blh: 27,
      tlv: 60,
      trv: 69,
      brv: 31,
      blv: 40
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleTopSliderChange = this.handleTopSliderChange.bind(this)
    this.handleRightSliderChange = this.handleRightSliderChange.bind(this)
    this.handleBottomSliderChange = this.handleBottomSliderChange.bind(this)
    this.handleLeftSliderChange = this.handleLeftSliderChange.bind(this)
  }

  handleOnChange(e) {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  handleOnClick() {
    this.print.select()
    document.execCommand('copy')
  }

  handleTopSliderChange(e) {
    this.setState({
      tlh: e.target.value,
      trh: 100 - e.target.value
    })
  }

  handleRightSliderChange(e) {
    this.setState({
      trv: 100 - e.target.value,
      brv: e.target.value
    })
  }

  handleBottomSliderChange(e) {
    this.setState({
      brh: 100 - e.target.value,
      blh: e.target.value
    })
  }

  handleLeftSliderChange(e) {
    this.setState({
      tlv: 100 - e.target.value,
      blv: e.target.value
    })
  }

  render() {

    return (

      //---------------------------

      <div className="grid-container">

        <div className="shape">
          <div className="box" style={{ "border-radius": `${this.state.tlh}% ${this.state.trh}% ${this.state.brh}% ${this.state.blh}% / ${this.state.tlv}% ${this.state.trv}% ${this.state.brv}% ${this.state.blv}% ` }}></div>
        </div>
        <div className="top-slider">
          <h1 className="title">Border radius previewer</h1>
          <div class="print">
          <input className="print-input" type="text" ref={(print) => this.print = print} placeholder={`${this.state.tlh}% ${this.state.trh}% ${this.state.brh}% ${this.state.blh}% / ${this.state.tlv}% ${this.state.trv}% ${this.state.brv}% ${this.state.blv}% `} value={`${this.state.tlh}% ${this.state.trh}% ${this.state.brh}% ${this.state.blh}% / ${this.state.tlv}% ${this.state.trv}% ${this.state.brv}% ${this.state.blv}% `} readonly />
          <button className="print-button" onClick={this.handleOnClick}>Copy value</button>
        </div>
          <div className="top-inputs">
            <div className="tlh"><input type="number" value={this.state.tlh} name={'tlh'} placeholder={this.state.tlh} onChange={this.handleOnChange} /></div>
            <div className="trh"><input type="number" value={this.state.trh} name={'trh'} placeholder={this.state.trh} onChange={this.handleOnChange} /></div>
          </div>
          <div><input type="range" name="top" onChange={this.handleTopSliderChange} value={this.state.tlh} /></div>
        </div>

        <div className="right-slider">
        
          <input type="range" orient="vertical" name="right" onChange={this.handleRightSliderChange} value={this.state.brv} />
          <div className="right-inputs">
            <div className="trv"><input type="number" value={this.state.trv} name={'trv'} placeholder={this.state.trv} onChange={this.handleOnChange} /></div>
            <div className="brv"><input type="number" value={this.state.brv} name={'brv'} placeholder={this.state.brv} onChange={this.handleOnChange} /></div>
          </div>
        </div>

        <div className="left-slider"><input type="range" orient="vertical" name="left" onChange={this.handleLeftSliderChange} value={this.state.blv} />
        <div className="left-inputs">
            <div className="tlv"><input type="number" value={this.state.tlv} name={'tlv'} placeholder={this.state.tlv} onChange={this.handleOnChange} /></div>
            <div className="blv"><input type="number" value={this.state.blv} name={'blv'} placeholder={this.state.blv} onChange={this.handleOnChange} /></div>
          </div>
        </div>

        <div className="bottom-slider">
          <input type="range" name="bottom" onChange={this.handleBottomSliderChange} value={this.state.blh} />
          <div className="bottom-inputs">
            <div className="brh"><input type="number" value={this.state.brh} name={'brh'} placeholder={this.state.brh} onChange={this.handleOnChange} /></div>
            <div className="blh"><input type="number" value={this.state.blh} name={'blh'} placeholder={this.state.blh} onChange={this.handleOnChange} /></div>
          </div>

        </div>
        <div className="top-right">
          <div className="top-right-vertical"></div>
          <div className="top-right-horizontal"></div>
        </div>
        <div className="top-left">
          <div className="top-left-verticatop-left-vertical"></div>
          <div className="top-left-horizontal"></div>
        </div>
        <div className="bottom-left">
          <div className="bottom-left-vertical"></div>
          <div className="bottom-left-horizontal"></div>
        </div>
        <div className="bottom-right">
          <div className="bottom-right-vertical"></div>
          <div className="bottom-right-horizontal"></div>
        </div>
        
      </div>
      //---------------------------



      /*   <div className="container">
  
          <div>
            <input type="text" ref={(print) => this.print = print} placeholder={`${this.state.tlh}% ${this.state.trh}% ${this.state.brh}% ${this.state.blh}% / ${this.state.tlv}% ${this.state.trv}% ${this.state.brv}% ${this.state.blv}% `} value={`${this.state.tlh}% ${this.state.trh}% ${this.state.brh}% ${this.state.blh}% / ${this.state.tlv}% ${this.state.trv}% ${this.state.brv}% ${this.state.blv}% `} readonly />
            <button onClick={this.handleOnClick}>Copy value</button>
          </div>
  
          <div className="box" style={{ "border-radius": `${this.state.tlh}% ${this.state.trh}% ${this.state.brh}% ${this.state.blh}% / ${this.state.tlv}% ${this.state.trv}% ${this.state.brv}% ${this.state.blv}% ` }}></div>
  
          <div>
            <input type="range" onChange={this.handleTopSliderChange} />
          </div>
          <div>
            <input type="range" onChange={this.handleRightSliderChange} />
          </div>
          <div>
            <input type="range" onChange={this.handleBottomSliderChange} />
          </div>
          <div>
            <input type="range" onChange={this.handleLeftSliderChange} />
          </div>
  
          <div>
            <input type="number" value={this.state.tlh} name={'tlh'} placeholder={this.state.tlh} onChange={this.handleOnChange} />
            <input type="number" value={this.state.trh} name={'trh'} placeholder={this.state.trh} onChange={this.handleOnChange} />
            <input type="number" value={this.state.brh} name={'brh'} placeholder={this.state.brh} onChange={this.handleOnChange} />
            <input type="number" value={this.state.blh} name={'blh'} placeholder={this.state.blh} onChange={this.handleOnChange} />
            <p>/</p>
            <input type="number" value={this.state.tlv} name={'tlv'} placeholder={this.state.tlv} onChange={this.handleOnChange} />
            <input type="number" value={this.state.trv} name={'trv'} placeholder={this.state.trv} onChange={this.handleOnChange} />
            <input type="number" value={this.state.brv} name={'brv'} placeholder={this.state.brv} onChange={this.handleOnChange} />
            <input type="number" value={this.state.blv} name={'blv'} placeholder={this.state.blv} onChange={this.handleOnChange} />
          </div>
  
        </div> */
    )
  }
}

export default Box;

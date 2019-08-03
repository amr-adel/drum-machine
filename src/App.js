import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleKeyStroke = this.handleKeyStroke.bind(this)
  }

  keyCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67]
  keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyStroke)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyStroke)
  }

  handleKeyStroke(e) {
    let keyIndex = this.keyCodes.indexOf(e.keyCode)
    if (keyIndex !== -1) {
      let drumPad = document.getElementById(this.keys[keyIndex]).parentElement
      this.makeABeat(drumPad)
    }
  }
  
  getRandomColor() {
    const colors = ['#F94EF3', '#814EF9', '#E12243', '#F9B64E', '#53FC2F']
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomIndex]
    
    return randomColor
  }
  
  makeABeat(drumPad) {
    drumPad.style.cssText = `--color-primary: ${this.getRandomColor()};`
    let beat = drumPad.querySelector('.clip')
    document.getElementById('display').innerText = drumPad.id.replace(/[-]/g, ' ') + '!!'
    drumPad.classList.add('active')
    setTimeout(() => {
      drumPad.classList.remove('active')
    }, 100)
    beat.currentTime = 0
    beat.play()
  }

  render() {
    return (
      <>
        <header className='header'>
          <div className='centered'>
            <h1 className='brand'>Drum Machine</h1>
          </div>
        </header>

        <main id='drum-machine'>
          <div id='display'>Make Some Noise!!</div>
          <button className='drum-pad' id='kick-big' style={{ '--color-primary': this.getRandomColor() }} onClick={e => this.makeABeat(e.target)}>
            <audio className='clip' id='Q' src='./drum-samples/kick-big.mp3' />Q
          </button>
          <button className='drum-pad' id='kick-classic' style={{ '--color-primary': this.getRandomColor() }} onClick={e => this.makeABeat(e.target)}>
            <audio className='clip' id='W' src='./drum-samples/kick-classic.mp3' />W
          </button>
          <button className='drum-pad' id='kick-cultivator' style={{ '--color-primary': this.getRandomColor() }} onClick={e => this.makeABeat(e.target)}>
            <audio className='clip' id='E' src='./drum-samples/kick-cultivator.mp3' />E
          </button>
          <button className='drum-pad' id='kick-heavy' style={{ '--color-primary': this.getRandomColor() }} onClick={e => this.makeABeat(e.target)}>
            <audio className='clip' id='A' src='./drum-samples/kick-heavy.mp3' />A
          </button>
          <button className='drum-pad' id='kick-newwave' style={{ '--color-primary': this.getRandomColor() }} onClick={e => this.makeABeat(e.target)}>
            <audio className='clip' id='S' src='./drum-samples/kick-newwave.mp3' />S
          </button>
          <button className='drum-pad' id='kick-oldschool' style={{ '--color-primary': this.getRandomColor() }} onClick={e => this.makeABeat(e.target)}>
            <audio className='clip' id='D' src='./drum-samples/kick-oldschool.mp3' />D
          </button>
          <button className='drum-pad' id='tom-808' style={{ '--color-primary': this.getRandomColor() }} onClick={e => this.makeABeat(e.target)}>
            <audio className='clip' id='Z' src='./drum-samples/tom-808.mp3' />Z
          </button>
          <button className='drum-pad' id='tom-acoustic-1' style={{ '--color-primary': this.getRandomColor() }} onClick={e => this.makeABeat(e.target)}>
            <audio className='clip' id='X' src='./drum-samples/tom-acoustic-1.mp3' />X
          </button>
          <button className='drum-pad' id='tom-acoustic-2' style={{ '--color-primary': this.getRandomColor() }} onClick={e => this.makeABeat(e.target)}>
            <audio className='clip' id='C' src='./drum-samples/tom-acoustic-2.mp3' />C
          </button>
        </main>

        <footer className='footer'>
          <div className='centered'>
            <aside className='info'>
              <p>
                For FreeCodeCamp |{' '}
                <a href='https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine/' target='_blank' rel='noopener noreferrer'>
                  Drum Machine Challenge
                </a>
              </p>
              <p>
                By{' '}
                <a href='https://github.com/amr-adel' target='_blank' rel='noopener noreferrer'>
                  Fullstack Amr
                </a>
              </p>
            </aside>
            <aside className='credit'>
              <p>
                Background from{' '}
                <a href='https://www.toptal.com/designers/subtlepatterns/random-grey-variations/' target='_blank' rel='noopener noreferrer'>
                  Subtle Patterns
                </a>
              </p>
              <p>
                Drum Samples from{' '}
                <a href='http://99sounds.org/drum-samples/' target='_blank' rel='noopener noreferrer'>
                  99Sounds
                </a>
              </p>
            </aside>
          </div>
        </footer>
      </>
    )
  }
}

export default App
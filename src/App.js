import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const getRandomColor = () => {
      const colors = ['#F94EF3', '#814EF9', '#E12243', '#F9B64E', '#53FC2F']
      const randomIndex = Math.floor(Math.random() * colors.length)
      const randomColor = colors[randomIndex]

      return randomColor
    }

    const makeABeat = drumPad => {
      drumPad.style.cssText = `--color-primary: ${getRandomColor()};`
      let beat = drumPad.querySelector('.clip')
      document.getElementById('display').innerText = drumPad.id.replace(/[0-]/g, ' ') + '!!'
      beat.play()
    }

    return (
      <>
        <header className='header'>
          <div className='centered'>
            <h1 className='brand'>Drum Machine</h1>
          </div>
        </header>

        <main id='drum-machine'>
          <div id='display'>Make Some Noise!!</div>
          <button className='drum-pad' id='kick-big' style={{ '--color-primary': getRandomColor() }} onClick={e => makeABeat(e.target)}>
            <audio className='clip' id='Q' src='./drum-samples/kick-big.mp3' />Q
          </button>
          <button className='drum-pad' id='kick-classic' style={{ '--color-primary': getRandomColor() }} onClick={e => makeABeat(e.target)}>
            <audio className='clip' id='W' src='./drum-samples/kick-classic.mp3' />W
          </button>
          <button className='drum-pad' id='kick-cultivator' style={{ '--color-primary': getRandomColor() }} onClick={e => makeABeat(e.target)}>
            <audio className='clip' id='E' src='./drum-samples/kick-cultivator.mp3' />E
          </button>
          <button className='drum-pad' id='kick-heavy' style={{ '--color-primary': getRandomColor() }} onClick={e => makeABeat(e.target)}>
            <audio className='clip' id='A' src='./drum-samples/kick-heavy.mp3' />A
          </button>
          <button className='drum-pad' id='kick-newwave' style={{ '--color-primary': getRandomColor() }} onClick={e => makeABeat(e.target)}>
            <audio className='clip' id='S' src='./drum-samples/kick-newwave.mp3' />S
          </button>
          <button className='drum-pad' id='kick-oldschool' style={{ '--color-primary': getRandomColor() }} onClick={e => makeABeat(e.target)}>
            <audio className='clip' id='D' src='./drum-samples/kick-oldschool.mp3' />D
          </button>
          <button className='drum-pad' id='tom-808' style={{ '--color-primary': getRandomColor() }} onClick={e => makeABeat(e.target)}>
            <audio className='clip' id='Z' src='./drum-samples/tom-808.mp3' />Z
          </button>
          <button className='drum-pad' id='tom-acoustic01' style={{ '--color-primary': getRandomColor() }} onClick={e => makeABeat(e.target)}>
            <audio className='clip' id='X' src='./drum-samples/tom-acoustic01.mp3' />X
          </button>
          <button className='drum-pad' id='tom-acoustic02' style={{ '--color-primary': getRandomColor() }} onClick={e => makeABeat(e.target)}>
            <audio className='clip' id='C' src='./drum-samples/tom-acoustic02.mp3' />C
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
                <a href='ttp://99sounds.org/drum-samples/' target='_blank' rel='noopener noreferrer'>
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

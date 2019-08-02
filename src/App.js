import React from 'react'

function App() {
  return (
    <>
      <header className='header'>
        <div className='centered'>
          <h1 className='brand'>Drum Machine</h1>
        </div>
      </header>
      <main id='drum-machine'>
        <div id='display'>party time!!</div>
        <button className='drum-pad'>q</button>
        <button className='drum-pad'>w</button>
        <button className='drum-pad'>e</button>
        <button className='drum-pad'>a</button>
        <button className='drum-pad'>s</button>
        <button className='drum-pad'>d</button>
        <button className='drum-pad'>z</button>
        <button className='drum-pad'>x</button>
        <button className='drum-pad'>c</button>
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

export default App

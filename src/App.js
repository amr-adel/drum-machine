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
        <h1>drum machine</h1>
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

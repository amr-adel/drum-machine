import React from 'react'

function App() {
  const getRandomColor = () => {
    const colors = ['#F94EF3', '#814EF9', '#E12243', '#F9B64E', '#53FC2F']
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomIndex]

    return randomColor
  }
  return (
    <>
      <header className='header'>
        <div className='centered'>
          <h1 className='brand'>Drum Machine</h1>
        </div>
      </header>
      <main id='drum-machine'>
        <div id='display'>party time!!</div>
        <button className='drum-pad' style={{ '--color-primary': getRandomColor() }}>
          q
        </button>
        <button className='drum-pad' style={{ '--color-primary': getRandomColor() }}>
          w
        </button>
        <button className='drum-pad' style={{ '--color-primary': getRandomColor() }}>
          e
        </button>
        <button className='drum-pad' style={{ '--color-primary': getRandomColor() }}>
          a
        </button>
        <button className='drum-pad' style={{ '--color-primary': getRandomColor() }}>
          s
        </button>
        <button className='drum-pad' style={{ '--color-primary': getRandomColor() }}>
          d
        </button>
        <button className='drum-pad' style={{ '--color-primary': getRandomColor() }}>
          z
        </button>
        <button className='drum-pad' style={{ '--color-primary': getRandomColor() }}>
          x
        </button>
        <button className='drum-pad' style={{ '--color-primary': getRandomColor() }}>
          c
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

export default App

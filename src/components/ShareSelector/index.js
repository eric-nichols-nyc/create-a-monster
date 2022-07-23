import * as htmlToImage from 'html-to-image'
import useMonsterCreator from '../../hooks/useMonsterCreator'

const button = {
  width: '250px',
  height: '51px',
  textTransform: 'uppercase',
  fontSize: '0.85em',
  padding: '0 16px',
  marginTop: '8px',
  cursor: 'pointer',
  textAlign: 'left'
}

export default function ShareSelector() {
  const { setCurrentStep } = useMonsterCreator();

  function download() {
    htmlToImage
      .toJpeg(document.getElementById('polaroid'), { quality: 0.95 })
      .then(function(dataUrl) {
        var link = document.createElement('a')
        link.download = 'my-monster.jpeg'
        link.href = dataUrl
        link.click()
      })
  }
  return (
    <div
      // css={css`
      //   display: flex;
      //   flex: 1;
      //   flex-direction: column;
      // `}
    >
      <button
        css={button}
        onClick={() => {
          download()
        }}
      >
        DownLoad
      </button>
      <button onClick={() => setCurrentStep(0)} css={button}>Create A New Monster</button>
    </div>
  )
}

import useMonsterCreator from '../../hooks/useMonsterCreator'
import './header.scss';

function Header() {
  const { stepCopy } = useMonsterCreator()

  return (
    <div
      className="header"
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }}
    >
      <h3
        style={{
          fontFamily: 'MutantAcademyBB',
          fontSize: '36px',
          color: '#0076bc'
        }}
      >
        {stepCopy.title}
      </h3>
      <p style={{ marginTop: 0 }}> {stepCopy.copy}</p>
    </div>
  )
}

export default Header

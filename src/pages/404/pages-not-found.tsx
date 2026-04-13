function PagesNotFound() {
  return (
    <div className='container-pages'
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '20px',
      height: 'auto',
      marginTop: '50px',
    }}>
      <div className="text"
      style={{
        fontSize: '60px',
        fontWeight: '700',
      }}
      >
        <p>404</p>
      </div>
      <p
      style={{
        fontSize: '35px',
        textTransform: 'uppercase'
      }}
      >Такой страницы нет</p>
      <div className="button-back"
        style={{
          fontSize: '24px',
          color: 'blue',
        }}
      >
        <b className="button">вернуться на главную</b>
      </div>
    </div>
  )
}

export default PagesNotFound;

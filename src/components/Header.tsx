import '../styles/header.scss'

export function Header() {
  return (
    <header className="header">
      <div>
        <p style={{margin: "0", color: "white", fontSize: "16px"}} >Márcio</p>
        <img src="/logo.svg" alt="to.do"/>
      </div>
    </header>
  )
}
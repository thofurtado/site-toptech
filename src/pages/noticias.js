import Link from 'next/link'

function Index(){
    return(
        <section class="hero is-black is-fullheight">
        <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <Link href="/noticias">
              <a class="navbar-item">Notícias</a>
            </Link>
            <Link href="/antivirus">
              <a class="navbar-item">Antivírus</a>
            </Link>
            <Link href="/contato">
            <a class="navbar-item">Contato</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </div>    
            
              <div class="hero-body" id="header-toptech" >
                <div class="container  has-text-centered">
                    <h1 class="title text-flicker-in-glow">
                        TOPTECH
                    </h1>
                    <h2 class="subtitle has-text-danger roll-in-top">
                        Notícias
                    </h2>
                </div>
            </div>
        </section>
    )
}
export default Index;
import Link from 'next/link'

function Index() {
    return ( <
        section class = "hero is-black is-fullheight" >
        <
        div class = "hero-head" >
        <
        nav class = "navbar" >
        <
        div class = "container" >
        <
        div class = "navbar-brand" >

        <
        span class = "navbar-burger burger"
        data - target = "navbarMenuHeroA" >

        <
        /span> <
        /div>

        <
        div id = "navbarMenuHeroA"
        class = "navbar-menu" >
        <
        div class = "navbar-end" >
        <
        Link href = "/noticias" >
        <
        a class = "navbar-item" > Notícias < /a> <
        /Link> <
        Link href = "/antivirus" >
        <
        a class = "navbar-item" > Antivírus < /a> <
        /Link> <
        Link href = "/contato" >
        <
        a class = "navbar-item" > Contato < /a> <
        /Link> <
        /div> <
        /div> <
        /div> <
        /nav> <
        /div>    

        <
        div class = "hero-body"
        id = "header-toptech" >
        <
        div class = "container has-text-centered" >
        <
        h1 class = "title text-flicker-in-glow" >
        TOPTECH <
        /h1> <
        h2 class = "subtitle has-text-success roll-in-top" >
        Downloads <
        /h2> <
        /div> <
        /div> <
        div class = "hero-foot" >
        <
        nav class = "tabs is-boxed is-fullwidth" >
        <
        div class = "container" >
        <
        ul >
        <
        li > < a class = "roll-in-left has-text-danger"
        href = "https://apptoptech.vercel.app/Suporte_Anydesk.exe" > Anydesk < /a></li >
        <
        li > < a class = "roll-in-bottom has-text-link"
        href = "https://apptoptech.vercel.app/Suporte_TeamViewer.exe" > Team Viewer < /a></li >
        <
        li > < a class = "roll-in-right has-text-warning"
        href = "https://drive.google.com/drive/folders/1dLI18zY_VfuP0fZQKiPCywj7O1yXQSI3?usp=sharing" > Google Drive < /a></li >
        <
        /ul> <
        /div> <
        /nav> <
        /div> <
        /section>
    )
}
export default Index;
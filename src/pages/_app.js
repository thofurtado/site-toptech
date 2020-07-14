import 'bulma/css/bulma.css';
import '../styles/Styles.css'
function App({Component, pageProps}){
    return (
        <>
        <Component {...pageProps} />
        </>
    )
}
export default App
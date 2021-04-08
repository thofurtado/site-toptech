import Head from 'next/head'
import styles from './home.module.scss'
import { MdCloudDone, MdContacts } from 'react-icons/md'
import { FaTools } from 'react-icons/fa'
import { IoMdAnalytics, IoMdSend } from 'react-icons/io'
import { HiOutlineShieldCheck } from 'react-icons/hi'
import { GoDesktopDownload } from 'react-icons/go'


export default function Home() {
    const registerContact = async event => {
        event.preventDefautl();
        console.log(`Cadastrado enviado: ${event.target.name.value}`)
    }
    return (
        <>
            <Head>
                <title>Início - TopTech</title>
            </Head>
            <main className={styles.contentContainer}>
                <section className={styles.contentMain}>
                    <div>
                        <div className={styles.title}>
                            <img src="/images/title.png" alt="" />
                            <h1>Plano Cuidado Total</h1>
                        </div>
                        <div className={styles.contentDiv}>
                            <div className={styles.contentItem}>
                                <div className={styles.subtitle}>
                                    <h3>Dados disponíveis</h3>
                                    <MdCloudDone />
                                </div>
                                <p>Seus dados na nuvem.</p>
                                <p>Protege de vírus, falha de equipamentos e erros operacionais.</p>
                                <p>Além de disponibilizar seus dados em qualquer lugar!</p>
                            </div>
                            <div className={styles.contentItem}>
                                <div className={styles.subtitle}>
                                    <h3>Manutenção</h3>
                                    <FaTools />
                                </div>
                                <p>Limpezas agendadas e periódicas.</p>
                                <p>Correção de erros do sistema e atualizações.</p>
                            </div>
                            <div className={styles.contentItem}>
                                <div className={styles.subtitle}>
                                    <h3>Sistemas seguros</h3>
                                    <HiOutlineShieldCheck />
                                </div>
                                <p>Sistemas operacionais atualizados.</p>
                                <p>Melhores práticas de proteção de vírus do mercado</p>
                            </div>
                            <div className={styles.contentItem}>
                                <div className={styles.subtitle}>
                                    <h3>Consultoria</h3>
                                    <IoMdAnalytics />
                                </div>
                                <p>Analise de mercado, técnicas atualizadas e treinamentos específicos.</p>
                            </div>
                        </div>
                    </div>

                </section>
                <section className={styles.contentUtils}>
                    <div>
                        <div className={styles.title}>
                            <img src="/images/title.png" alt="" />
                            <h1>Acesso rápido</h1>
                        </div>

                        <div className={styles.subtitle}>
                            <h3>Downlodas</h3>
                            <GoDesktopDownload />
                        </div>
                        <div className={styles.downloads}>
                            <a href="https://apptoptech.vercel.app/Anydesk.exe" className={styles.anydesk}>Anydesk</a>
                            <a href="https://apptoptech.vercel.app/Suporte_TeamViewer.exe" className={styles.teamviewer}>Team Viewer</a>
                            <a href="https://drive.google.com/drive/folders/1dLI18zY_VfuP0fZQKiPCywj7O1yXQSI3?usp=sharing" className={styles.googledrive}>Programas Úteis</a>
                        </div>
                        <div className={styles.subtitle}>
                            <h3>Contato</h3>
                            <MdContacts />
                        </div>
                        <form  onSubmit={registerContact} className={styles.contact}>
                            <label>Caso precise de suporte nos mande seu contato</label>
                            <input id="name" type="text" required placeholder="telefone/email"/>
                           
                            <button type="submit">Solicitar Contato <IoMdSend/></button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

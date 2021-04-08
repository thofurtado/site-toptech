import styles from './styles.module.scss';
import { BiMailSend, BiPhone } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div>
                    <a href="mailto:thofurtado@gmail.com">
                        <BiMailSend />
                        thofurtado@gmail.com
                    </a>
                    
                    <a href="tel:12-981147451">
                        <BiPhone />
                        12-981147451
                    </a>
                </div>
                <div >
                    <p><HiOutlineOfficeBuilding />TOP TECHNOLOGY</p>
                    <a href="https://www.google.com/maps/place/R.+S%C3%A3o+Benedito,+453+-+Centro,+Caraguatatuba+-+SP,+11660-660/@-23.6209693,-45.4151537,17z/data=!3m1!4b1!4m5!3m4!1s0x94cd63763c46fa2b:0x60e4ff1d6f0cccad!8m2!3d-23.6209742!4d-45.412965">
                        <MdLocationOn />
                        Rua São Benedito 453, Centro Caragua - SP
                    </a>
                </div>
            </div>
        </footer>
    );
}

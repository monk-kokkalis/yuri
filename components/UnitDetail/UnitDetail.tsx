import Style from './UnitDetail.module.scss';
import Image from 'next/Image';
import {
    Class as ClassIcon,
    Email as EmailIcon,
    Room as RoomIcon,
    School as SchoolIcon
} from '@material-ui/icons';

function UnitDetail() {
    return (
        <div className={Style.UnitDetail}>
            <div className={Style.details}>
                <figure>
                    <Image
                        layout="fill"
                        src="/images/isaac.jpeg"
                        alt="Isaac"
                    />
                </figure>
                <section>
                    {/* data */}
                    <strong>Isaac Clarke</strong>
                    {/* data */}
                    <div className="information">
                        <div className="college">Engineering</div>
                        <div className="icon--label">
                            <SchoolIcon />
                            <span>Electrical</span>
                        </div>
                        <div className="icon--label">
                            <RoomIcon />
                            <span>Georgia</span>
                        </div>
                    </div>
                </section>
            </div>            
        </div>
    )
}

export default UnitDetail;
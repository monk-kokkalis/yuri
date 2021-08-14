import Style from './UnitDetail.module.scss';
import Image from 'next/Image';
import {
    RoomOutlined as RoomOutlinedIcon,
    SchoolOutlined as SchoolOutlinedIcon
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
                <div className="main">
                {/* data */}
                    <strong>Isaac Clarke</strong>
                    {/* data */}
                    <div className="information">
                        <div className="college">Engineering</div>
                        <div className="icon--label">
                            <SchoolOutlinedIcon />
                            <span>Electrical</span>
                        </div>
                        <div className="icon--label">
                            <RoomOutlinedIcon />
                            <span>Georgia</span>
                        </div>
                    </div>
                </div>
                {/* data */}
                <div className="contact">
                    <div className="key--value--pair">
                        <div className="key">Email:</div>
                        <div className="value">isaac_clarke@gmail.com</div>
                    </div>
                    <div className="key--value--pair">
                        <div className="key">Phone:</div>
                        <div className="value">+63 921 551 4491</div>
                    </div>
                    <div className="key--value--pair">
                        <div className="key">Status:</div>
                        <div className="value">Graduated</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnitDetail;
import Style from './UnitDetail.module.scss';
import Image from 'next/Image';
import {
    RoomOutlined as RoomOutlinedIcon,
    SchoolOutlined as SchoolOutlinedIcon
} from '@material-ui/icons';
import {UnitItem} from 'data/units';
interface Props {
    index?: number;
    unit: UnitItem;
}

function UnitDetail({index, unit}: Props) {
    const imageLoader = ({src}: {src: string}) => {
        return `https://i.pravatar.cc/${src}`;
    }

    return (
        <div className={Style.UnitDetail}>
            <div className={Style.details}>
                <figure>
                    <Image
                        loader={imageLoader}
                        layout="fill"
                        src={String(120 + index!)}
                        alt="profile picture"
                    />
                </figure>
                <div className="main">
                    <strong>{unit.firstName + " " + unit.lastName}</strong>
                    <div className="information">
                        <div className="college">{unit.college}</div>
                        <div className="icon--label">
                            <SchoolOutlinedIcon />
                            <span>{unit.degree}</span>
                        </div>
                        <div className="icon--label">
                            <RoomOutlinedIcon />
                            <span>{unit.state}</span>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="key--value--pair">
                        <div className="key">Email:</div>
                        <div className="value">{unit.email}</div>
                    </div>
                    <div className="key--value--pair">
                        <div className="key">Phone:</div>
                        <div className="value">{unit.mobileNumber}</div>
                    </div>
                    <div className="key--value--pair">
                        <div className="key">Status:</div>
                        <div className="value">{unit.status}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnitDetail;
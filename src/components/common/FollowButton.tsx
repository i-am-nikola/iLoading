import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DEFAULT_HEIGHT = 8;
const DEFAULT_WIDTH = 28;
const DEFAULT_IS_FOLLOWING = false;

type FollowButtonPropsType = {
    height?: number
    width?: number
    isFollowing?: boolean
}

const FollowButton = (props: FollowButtonPropsType) => {
    const { height = DEFAULT_HEIGHT, width = DEFAULT_WIDTH, isFollowing = DEFAULT_IS_FOLLOWING} = props;
    const icon = isFollowing ? faCheck : faPlus;
    const className = isFollowing ? 'border border-sky-500 text-sky-500 hover:border-sky-600 hover:text-sky-600': 'bg-sky-500 text-white hover:bg-sky-600';
    return (
        <>

        <button className={`${className} h-${height} w-${width} flex items-center justify-evenly text-center transition-all text-sm rounded-lg shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/40`}>
            <FontAwesomeIcon icon={icon} size="sm" className=" h-3 w-3 inline" />
            {isFollowing ? 'Đã theo dõi' : 'Theo dõi'}
        </button>



        </>


    );
}

export default FollowButton;
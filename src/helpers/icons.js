import { 
    faTrash, faSignOutAlt, faEdit, faBomb, faScissors, faFileCirclePlus,
    faSquarePhone, faEnvelopeOpenText, faGlobe, faMobileRetro, faUserLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faBomb, faScissors, faFileCirclePlus, faSquarePhone, faEnvelopeOpenText, faGlobe, faMobileRetro, faUserLock);
}

export default Icons;
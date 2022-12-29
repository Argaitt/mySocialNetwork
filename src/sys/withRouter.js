import {useLocation, useNavigate, useParams} from "react-router-dom";

export const withRouter = (Child) => {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Child {...props} router={{location, navigate,params}} />
    }
}
import { Menu as MainMenu } from "antd";
import { MenuItem } from "../../types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import { userSignOut } from "../../views/Login/actions";
import useAuth from "../../hooks/useAuth";

type MenuProps = {
    items: MenuItem[]
}

export default function Menu ({ items }: MenuProps) {
    const navigate = useNavigate();
    const { dispatch } = useAuth();

    const onMenuSelect = async ({ key }: { key: string }) => {
        if (key === ROUTES.LOGIN) await userSignOut(dispatch);
        navigate(key, { replace: false });
    }

    return (
        <div className='full-width content-centered'>
            <MainMenu
                theme="dark"
                mode="horizontal"
                items={items}
                style={{ flex: 1, minWidth: 0 }}
                onClick={onMenuSelect}
            />
        </div>
    );
}
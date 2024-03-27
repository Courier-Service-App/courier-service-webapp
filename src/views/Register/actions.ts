import { message } from "antd";
import { RegistrationProps } from "../../types";
import { postApi } from "../../utils";

export const userRegistration = async (data: RegistrationProps) => {
    try {
        message.loading("Please wait...");
        await postApi('/users/create-user', data);
        message.destroy();
        message.success("User successfully registered");
        return true;
    }
    catch (error: any) {
        console.log(error);
        message.destroy();
        if (error.code === '23505') {
            message.warning("This email address already registered");
        }
        else {
            message.error("Error in user registration");
        }
        return false
    }
}
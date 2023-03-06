import * as yup from "yup";


export const validation = {
    name : yup.string().required("Please enter your name"),
    email : yup.string().email("Your email dosent valid").required("Please enter your email"),
    password :yup.string().required("Please enter your password").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain minimal 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
      agreement : yup.bool().oneOf([true],"Please accept this agreement")
      .required("Please accept this agreement"),
    confirmPassword : yup.string().oneOf([yup.ref("password")]).required("Please enter your confirm password"),
    phone : yup.string().required("Please enter your phone number")
            .matches(/^628[0-9]{9,13}$/,"Your phone number is invalid")
}
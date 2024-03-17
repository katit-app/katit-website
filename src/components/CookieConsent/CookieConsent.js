import { Link } from "gatsby";
import { useCookies } from "react-cookie";
import React from "react";
import Button from "../Button/Button";
import * as styles from './CookieConsent.module.css';

export default function CookieConsent() {
    const [cookies, setCookie] = useCookies(["cookieConsent"]);
    const giveCookieConsent = () => {
        setCookie("cookieConsent", true, {path: "/"});
    };

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                We use cookies to enhance your user experience. By using our website, you agree to our use of cookies.
                <Link className={styles.link} href={"/support#policy"}>Learn more.</Link>
            </p>
            <Button className={styles.button} onClick={giveCookieConsent}>
                Accept
            </Button>
        </div>
        );
}
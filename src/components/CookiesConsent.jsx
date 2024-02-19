import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const USER_CONSENT_COOKIE_KEY = "cookie_consent_is_true";
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365;

const CookiesConsent = () => {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, "true", {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentIsTrue(true);
    }
  };

  useEffect(() => {
    const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === "true";
    setCookieConsentIsTrue(consentIsTrue);
  }, []);

  if (cookieConsentIsTrue) {
    return null;
  }

  return (
    <section className="fixed bottom-0 left-0 w-full py-2 md:py-4">
      <div className="flex flex-col items-start px-5 py-3 space-y-2 bg-gray-200 md:flex-row md:space-y-0 md:items-stretch md:space-x-2">
        <div className="flex items-center flex-grow text-gray-900">
          <p className="text-sm font-medium">
            This site uses services that use cookies to deliver better
            experience and analyze traffic. You can learn more about the
            services we use at our{" "}
            <Link href="/" className="text-sm underline hover:text-lightAccent">
              privacy policy
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center">
          <button
            className="p-3 text-sm font-bold text-white uppercase bg-gray-700 whitespace-nowrap"
            onClick={handleClick}
          >
            Got it
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookiesConsent;

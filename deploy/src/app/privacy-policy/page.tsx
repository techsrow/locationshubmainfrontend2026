import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#efefef] py-24">
      <div className="max-w-[1300px] mx-auto px-5 md:px-[60px] text-[#74405b] text-[14px] font-medium leading-[1.8em]">

        {/* TITLE */}
        <h2 className="text-[14px] font-bold underline mb-6">
          Privacy Policy for Locations Hub
        </h2>

        <p className="mb-6">
          At{" "}
          <Link
            href="https://www.locationshub.in"
            className="underline"
          >
            www.locationshub.in
          </Link>
          , one of our main priorities is the privacy of our visitors.
          This Privacy Policy document contains types of information that
          is collected and recorded by{" "}
          <Link
            href="https://www.locationshub.in"
            className="underline"
          >
            www.locationshub.in
          </Link>{" "}
          and how we use the same.
        </p>

        <p className="mb-6">
          If you have additional questions or require more information about
          our Privacy Policy, do not hesitate to contact us.
        </p>

        <p className="mb-6">
          Contact no: 9920060062 <br />
          Mail id –{" "}
          <span className="underline">hello@locationshub.in</span>
        </p>

        <p className="mb-6">
          This Privacy Policy applies only to our online activities and is valid
          for all visitors to our website with regards to the information that
          they shared with us via{" "}
          <Link
            href="https://www.locationshub.in"
            className="underline"
          >
            www.locationshub.in
          </Link>
          .
        </p>

        {/* CONSENT */}
        <h2 className="text-[14px] font-bold underline mb-4">
          Consent
        </h2>

        <p className="mb-6">
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>

        {/* INFORMATION WE COLLECT */}
        <h2 className="text-[14px] font-bold underline mb-4">
          Information we collect
        </h2>

        <p className="mb-6">
          The personal information that you are asked to provide at the time of
          booking, and the reasons why you are asked to provide it, will be made
          clear to you at the point we ask you to provide your personal information.
        </p>

        <p className="mb-6">
          When you make a booking, we may ask for your contact information,
          including items such as name, company name, address, email address,
          and telephone number.
        </p>

        {/* HOW WE USE INFORMATION */}
        <h2 className="text-[14px] font-bold underline mb-4">
          How we use your information
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, including for customer service and updates</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        {/* LOG FILES */}
        <h2 className="text-[14px] font-bold underline mb-4">
          Log Files
        </h2>

        <p className="mb-6">
          <Link href="https://www.locationshub.in" className="underline">
            www.locationshub.in
          </Link>{" "}
          follows a standard procedure of using log files.
          These files log visitors when they visit websites.
        </p>

        {/* COOKIES */}
        <h2 className="text-[14px] font-bold underline mb-4">
          Cookies and Web Beacons
        </h2>

        <p className="mb-6">
          Like any other website,{" "}
          <Link href="https://www.locationshub.in" className="underline">
            www.locationshub.in
          </Link>{" "}
          uses ‘cookies’.
        </p>

        {/* ADVERTISING PARTNERS */}
        <h2 className="text-[14px] font-bold underline mb-4">
          Advertising Partners Privacy Policies
        </h2>

        <p className="mb-6">
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of{" "}
          <Link href="https://www.locationshub.in" className="underline">
            www.locationshub.in
          </Link>
          .
        </p>

      </div>
    </main>
  );
}
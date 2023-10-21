import { Card, Typography } from "@material-tailwind/react";
import React from "react";
import { ScrollRestoration } from "react-router-dom";


const TABLE_HEAD = ["Name", "Provider", "Purpose", "Expiry", "Type"];

const TABLE_ROWS = [
  {
    name: "CONSENT",
    provider: "YouTube",
    purpose: "Used to detect if the visitor has accepted the marketing category in the cookie banner. This cookie is necessary for GDPR-compliance of the website.",
    link: 'https://policies.google.com/privacy',
    expiry: "2 years",
    type: "HTTP Cookie"
  },
  {
    name: "CookieConsent",
    provider: "Cookiebot",
    purpose: "Stores the user’s cookie consent state for the current domain",
    link: 'https://www.cookiebot.com/en/privacy-policy/',
    expiry: "13403 days",
    type: "HTTP Cookie"
  },

];
const TABLE_ROWS_2 = [
  {
    name: "__kla_id",
    provider: "Klaviyo",
    purpose: "This cookie is used to collect information on the visitor’s behavior. This information will be stored for internal use on the website – internal analytics is used to optimize the websites or to register if the visitor has subscribed to a newsletter.",
    link: 'https://www.klaviyo.com/legal/privacy/privacy-notice',
    expiry: "2 years",
    type: "HTTP Cookie"
  },
  {
    name: "_hjAbsoluteSessionInProgress",
    provider: "Hotjar",
    purpose: "This cookie is used to count how many times a website has been visited by different visitors – this is done by assigning the visitor an ID, so the visitor does not get registered twice.",
    link: 'https://www.hotjar.com/legal/policies/privacy/',
    expiry: "1 day",
    type: "HTTP Cookie"
  },
  {
    name: "_hjFirstSeen",
    provider: "Hotjar",
    purpose: "This cookie is used to determine if the visitor has visited the website before, or if it is a new visitor on the website.",
    link: 'https://www.hotjar.com/legal/policies/privacy/',
    expiry: "1 day",
    type: "HTTP Cookie"
  },
  {
    name: "_hjIncludedInSessionSample_#",
    provider: "Hotjar",
    purpose: "Collects statistics on the visitor’s visits to the website, such as the number of visits, average time spent on the website and what pages have been read.",
    link: 'https://www.hotjar.com/legal/policies/privacy/',
    expiry: "1 day",
    type: "HTTP Cookie"
  },
  {
    name: "_hjRecordingEnabled",
    provider: "Hotjar",
    purpose: "Collects data on the user’s navigation and behavior on the website. This is used to compile statistical reports and heatmaps for the website owner.",
    link: 'https://www.hotjar.com/legal/policies/privacy/',
    expiry: "Session",
    type: "HTML Local Storage"
  },
  {
    name: "_hjRecordingLastActivity",
    provider: "Hotjar",
    purpose: "Sets a unique ID for the session. This allows the website to obtain data on visitor behaviour for statistical purposes.",
    link: 'https://www.hotjar.com/legal/policies/privacy/',
    expiry: "Session",
    type: "HTML Local Storage"
  },
  {
    name: "_hjSession_#",
    provider: "Hotjar",
    purpose: "Collects statistics on the visitor’s visits to the website, such as the number of visits, average time spent on the website and what pages have been read.",
    link: 'https://www.hotjar.com/legal/policies/privacy/',
    expiry: "1 day",
    type: "HTTP Cookie"
  },
  {
    name: "_hjSessionUser_#",
    provider: "Hotjar",
    purpose: "Collects statistics on the visitor’s visits to the website, such as the number of visits, average time spent on the website and what pages have been read.",
    link: 'https://www.hotjar.com/legal/policies/privacy/',
    expiry: "1 year",
    type: "HTTP Cookie"
  },
  {
    name: "_hjTLDTest",
    provider: "Hotjar",
    purpose: "Registers statistical data on users’ behaviour on the website. Used for internal analytics by the website operator.",
    link: 'https://www.hotjar.com/legal/policies/privacy/',
    expiry: "Session",
    type: "HTTP Cookie"
  },
  {
    name: "_tt_enable_cookie",
    provider: "Tiktok",
    purpose: "Used by the social networking service, TikTok, for tracking the use of embedded services.",
    link: 'https://www.tiktok.com/legal/page/row/privacy-policy/en',
    expiry: "1 year",
    type: "HTTP Cookie"
  },
  {
    name: "hjViewportId",
    provider: "Hotjar",
    purpose: "Saves the user’s screen size in order to adjust the size of images on the website.",
    link: 'https://www.hotjar.com/legal/policies/privacy/',
    expiry: "Session",
    type: "HTTP Cookie"
  },
 
  

];
const TABLE_ROWS_3 = [
  {
    name: "_fbp",
    provider: "Meta Platforms, Inc.",
    purpose: "Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.",
    link: 'https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0',
    expiry: "3 months",
    type: "HTTP Cookie"
  },
  {
    name: "_ttp [x2]",
    provider: "Tiktok",
    purpose: "Used by the social networking service, TikTok, for tracking the use of embedded services.",
    link: 'https://www.tiktok.com/legal/page/row/privacy-policy/en',
    expiry: "1 year",
    type: "HTTP Cookie"
  },
  {
    name: "LAST_RESULT_ENTRY_KEY",
    provider: "YouTube",
    purpose: "Pending",
    link: 'https://policies.google.com/privacy',
    expiry: "Session",
    type: "HTTP Cookie"
  },
  {
    name: "LogsDatabaseV2:V1ff7abfd||#LogsRequestsStore",
    provider: "YouTube",
    purpose: "Pending",
    link: 'https://policies.google.com/privacy',
    expiry: "Persistent",
    type: "IndexedDB"
  },
  {
    name: "nextId",
    provider: "YouTube",
    purpose: "Pending",
    link: 'https://policies.google.com/privacy',
    expiry: "Session",
    type: "HTTP Cookie"
  },
  {
    name: "requests",
    provider: "YouTube",
    purpose: "Pending",
    link: 'https://policies.google.com/privacy',
    expiry: "Session",
    type: "HTTP Cookie"
  },
  {
    name: "TESTCOOKIESENABLED",
    provider: "YouTube",
    purpose: "Pending",
    link: 'https://policies.google.com/privacy',
    expiry: "1 day",
    type: "HTTP Cookie"
  },
  {
    name: "tt_appInfo",
    provider: "Tiktok",
    purpose: "Used by the social networking service, TikTok, for tracking the use of embedded services.",
    link: 'https://www.tiktok.com/legal/page/row/privacy-policy/en',
    expiry: "Session",
    type: "HTTP Local Storage"
  },
  {
    name: "tt_pageId",
    provider: "Tiktok",
    purpose: "Used by the social networking service, TikTok, for tracking the use of embedded services.",
    link: 'https://www.tiktok.com/legal/page/row/privacy-policy/en',
    expiry: "Session",
    type: "HTTP Local Storage"
  },
  {
    name: "tt_pixel_session_index",
    provider: "Tiktok",
    purpose: "Used by the social networking service, TikTok, for tracking the use of embedded services.",
    link: 'https://www.tiktok.com/legal/page/row/privacy-policy/en',
    expiry: "Session",
    type: "HTTP Local Storage"
  },
  {
    name: "tt_sessionId",
    provider: "Tiktok",
    purpose: "Used by the social networking service, TikTok, for tracking the use of embedded services.",
    link: 'https://www.tiktok.com/legal/page/row/privacy-policy/en',
    expiry: "Session",
    type: "HTTP Local Storage"
  },
  {
    name: "VISITOR_INFO1_LIVE",
    provider: "YouTube",
    purpose: "Tries to estimate the users’ bandwidth on pages with integrated YouTube videos.",
    link: 'https://policies.google.com/privacy',
    expiry: "180 days",
    type: "HTTP Cookie"
  },
  {
    name: "YSC",
    provider: "YouTube",
    purpose: "Registers a unique ID to keep statistics of what videos from YouTube the user has seen.",
    link: 'https://policies.google.com/privacy',
    expiry: "Session",
    type: "HTTP Cookie"
  },
  {
    name: "yt.innertube::nextId",
    provider: "YouTube",
    purpose: "Registers a unique ID to keep statistics of what videos from YouTube the user has seen.",
    link: 'https://policies.google.com/privacy',
    expiry: "Persistent",
    type: "HTTP Local Storage"
  },
  {
    name: "ytidb::LAST_RESULT_ENTRY_KEY",
    provider: "YouTube",
    purpose: "Stores the user’s video player preferences using embedded YouTube video",
    link: 'https://policies.google.com/privacy',
    expiry: "Persistent",
    type: "HTML Local Storage"
  },
  {
    name: "YtIdbMeta#databases",
    provider: "YouTube",
    purpose: "Pending",
    link: 'https://policies.google.com/privacy',
    expiry: "Persistent",
    type: "IndexedDB"
  },

];


const CookieDeclaration = () => {
  return (
    <div>
      <div className="bg-[url('https://media.istockphoto.com/id/1433155192/photo/navy-blue-abstract-watercolor-pattern-background-dark-art-background-for-design.jpg?s=170667a&w=0&k=20&c=X3tRdaWK7ntbecjOwRbEYfXWPgQSopRkwg5_CLBWv6M=')] text-white mt-[31px] lg:mt-16 flex justify-center flex-col items-center  bg-no-repeat bg-cover gap-5 py-60">
        <p className="text-5xl font-bold tracking-widest text-center">
          Cookie Declaration
        </p>
        <p className="text-xl text-center px-5 lg:px-0">
          Bet:terReturn uses cookies to enhance your browsing experience and
          personalize content
        </p>
      </div>
      <div className="text-left mx-auto max-w-screen-xl px-5 lg:px-0 my-20 text-[17px]">
        <p>
          This website uses cookies. We use cookies to personalise content and
          ads, to provide social media features and to analyse our traffic. We
          also share information about your use of our site with our social
          media, advertising and analytics partners who may combine it with
          other information that you’ve provided to them or that they’ve
          collected from your use of their services. <br /> <br />
          Cookies are small text files that can be used by websites to make a
          user’s experience more efficient. <br /> <br />
          The law states that we can store cookies on your device if they are
          strictly necessary for the operation of this site. For all other types
          of cookies we need your permission. This site uses different types of
          cookies. Some cookies are placed by third party services that appear
          on our pages. You can at any time change or withdraw your consent from
          the Cookie Declaration on our website. Learn more about who we are,
          how you can contact us and how we process personal data in our Privacy
          Policy. Please state your consent ID and date when you contact us
          regarding your consent. Your consent applies to the following domains:
          www.betterreturn.net <br />
          Your current state: Deny. <br />
          Your consent ID:
          9Vhdw6dwFGWze/GPgpNTFO5LPV8MQq3WqE/<br />3Aio5JB1k8CwRoefz5w==Consent date:
          Tuesday, May 16, 2023 at 09:24:55 AM GMT+5:30 <br /> <br />
          Change your consent <br /> <br />
          Cookie declaration last updated on 4/21/23 by Cookiebot: <br /> <br />
          Necessary (2) <br /> <br />
          Necessary cookies help make a website usable by enabling basic
          functions like page navigation and access to secure areas of the
          website. The website cannot function properly without these cookies.{" "}
          <br /> <br />
        </p>
        <div>
          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ name, provider, purpose, link, expiry, type }, index) => (
                  <tr key={name} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                    </td>
                  <td className="p-4">
                    <a target="_blank" href={link}>  <Typography variant="small" color="blue-gray" className="font-normal">
                        {provider}
                      </Typography></a>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal w-96">
                        {purpose}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {expiry}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {type}
                      </Typography>
                    </td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div> <br />
        <p>Statistics (11) <br /> <br />

Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.</p> <br />

<div>
          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS_2.map(({ name, provider, purpose, link, expiry, type }, index) => (
                  <tr key={name} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                    </td>
                  <td className="p-4">
                    <a target="_blank" href={link}>  <Typography variant="small" color="blue-gray" className="font-normal">
                        {provider}
                      </Typography></a>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal w-96">
                        {purpose}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {expiry}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {type}
                      </Typography>
                    </td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div> <br />

        <p>Marketing (17) <br /> <br />

Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.</p> <br /> <br />

<div>
          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS_3.map(({ name, provider, purpose, link, expiry, type }, index) => (
                  <tr key={name} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                    </td>
                  <td className="p-4">
                    <a target="_blank" href={link}>  <Typography variant="small" color="blue-gray" className="font-normal">
                        {provider}
                      </Typography></a>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal w-96">
                        {purpose}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {expiry}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {type}
                      </Typography>
                    </td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div> <br />
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default CookieDeclaration;

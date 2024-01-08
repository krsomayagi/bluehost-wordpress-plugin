import { Button, Container } from "@newfold/ui-component-library";
import { useState } from "react";
import {
  FacebookConnectPluginsView,
  facebookConnectHelper,
} from "@newfold/wp-module-facebook";

const SocialMediaAccounts = () => {
  const [showModal, setShowModal] = useState(false);

  const handleFacebookConnect = () => {
    console.log("called");
    facebookConnectHelper().then((res) => console.log(res));
  };
  let input = false;
  return (
    <Container.SettingsField
      title={__("Social Media Accounts", "wp-plugin-bluehost")}
      description={__(
        "Connect your social media accounts to your website.",
        "wp-plugin-bluehost"
      )}
    >
      <div className="nfd-flex nfd-flex-row nfd-justify-between">
        <p className="nfd-font-semibold">
          Click 'Add' to connect to one of your social media accounts.
        </p>
        <Button variant="outlined" onClick={() => setShowModal(true)}>
          Add
        </Button>
      </div>
      <FacebookConnectPluginsView />
      {showModal && (
        <>
          <div
            onClick={() => {
              !input && setShowModal(false);
              input = false;
            }}
            className=" nfd-justify-center nfd-items-center nfd-flex nfd-overflow-x-hidden nfd-overflow-y-auto nfd-fixed nfd-inset-0 nfd-z-50 nfd-outline-none nfd-focus:outline-none"
          >
            <div className=" nfd-relative nfd-w-auto nfd-my-6 nfd-mx-auto nfd-max-w-3xl">
              <div className="nfd-border-0 nfd-rounded-lg nfd-shadow-lg nfd-relative nfd-flex nfd-flex-col nfd-w-full nfd-bg-white nfd-outline-none nfd-focus:outline-none">
                <form
                  class="nfd-flex nfd-items-center nfd-w-full"
                  style={{ minWidth: "300px" }}
                >
                  <div class="nfd-relative nfd-w-full  nfd-border-b nfd-border-solid nfd-border-blueGray-200">
                    <div class="nfd-absolute nfd-inset-y-0 nfd-start-0 nfd-flex nfd-items-center nfd-ps-3 nfd-pointer-events-none">
                      <svg
                        class="nfd-w-4 nfd-h-4 nfd-text-gray-500 nfd-dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 20"
                      >
                        <path
                          class="nfd-stroke-current nfd-stroke-linecap-round nfd-stroke-linejoin-round nfd-stroke-width-2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="nfd-simple-search"
                      class="nfd-rounded-lg nfd-text-gray-900 nfd-border-none nfd-outline-none nfd-text-sm nfd-w-full nfd-ps-10 nfd-p-2.5 nfd-dark:placeholder-gray-400  nfd-border-transparent focus:nfd-border-transparent focus:nfd-ring-0"
                      placeholder="Search..."
                      required
                      onClick={() => (input = true)}
                    />
                  </div>
                </form>
                <div
                  className="nfd-relative nfd-p-6 nfd-flex nfd-flex-row"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleFacebookConnect()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="nfd-pointer-events-none nfd-h-10 nfd-w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                  </svg>
                  <p className="nfd-pl-3">Facebook</p>
                </div>
              </div>
            </div>
          </div>
          <div className="nfd-opacity-25 nfd-fixed nfd-inset-0 nfd-z-40 nfd-bg-black"></div>
        </>
      )}
    </Container.SettingsField>
  );
};

export default SocialMediaAccounts;

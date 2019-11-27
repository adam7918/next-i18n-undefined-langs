import React from "react";
import { i18n, withTranslation } from "../i18n";

const Home = ({ t }) => (
  <div>
    <button
      type="button"
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "nl" : "en")}
    >
      Change Local
    </button>
    <p>{t("chicken")}</p>
  </div>
);

Home.getInitialProps = () => {
  return {
    namespacesRequired: ["common"]
  };
};

export default withTranslation("common")(Home);

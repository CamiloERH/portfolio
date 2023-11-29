import App from "./App";
import { getTitleFromRoute } from "./utils/docTitle";
import { Helmet } from "react-helmet";

const ErrorComponent = ({ errorMessage }) => (
    <div className="text-red-500 font-bold text-center">{errorMessage}</div>
);

const AppContainer = () => {
    return (
        <>
            <Helmet>
                <title>{getTitleFromRoute(location.pathname)}</title>
            </Helmet>
            <App />
        </>
    );
};

export default AppContainer;

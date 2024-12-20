import style from "../style";
import Navbar from "../components/Navbar";
import DataManagement from "../components/dataManagement";
import Footer from "../components/footer";

const DataManagementPage = () => {
    return (
        <div className="bg-primary w-full relative pt-9">
            <Navbar />

            <div className={`bg-primary${style.flexStart} w-full h-full flex flex-row justify-center items-center gap-24`}>
                <div className={`${style.boxWidth}`}>
                    <DataManagement />
                </div>
            </div>

            <div className={`bg-primary ${style.paddingX} ${style.flexCenter} flex-col md:absolute md:bottom-0 w-screen`}>
                <div className={`${style.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
};

export default DataManagementPage;
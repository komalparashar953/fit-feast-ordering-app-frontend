import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Turn up the heat with a sizzling takeaway tonight! 
                </h1>
                <span className="text-xl">Quicker bites, faster delights!</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5" >
                <img src="https://assets.materialup.com/uploads/d8815135-2d9b-4436-966b-d24b727140cc/preview.jpg"></img>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                        Skip the hassle and order with ease
                    </span>
                    <span>
                        Download the FitFood App for faster ordering and personalised recommendations
                    </span>
                    <img src={appDownloadImage} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
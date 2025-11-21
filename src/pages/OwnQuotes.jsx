import AddQuote from "../components/AddQuote.jsx";
import BackgroundWrapper from "../../Style/Background.jsx";

export default function OwnQuotes() {
    return (
    <> 
        <BackgroundWrapper>
            <div className="relative">
                <div className="fixed top-4 right-4 z-50">
                    <AddQuote />
                </div>

                <div className="flex flex-col justify-center items-center p-4">
                    <h1 className="text-3xl font-bold mb-4">Your Quotes</h1>
                    <p>Manage your quotes here.</p>
                </div>
            </div>
        </BackgroundWrapper>
    </>
    );
}

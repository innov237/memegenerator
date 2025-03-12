import React from "react";
import { faFacebookF, faWhatsapp, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importing social media icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MemeActionsProps {
    image: string | null; // Assuming it's a string (image URL)
    saveMeme: () => void;
    downloadMeme: () => void;
    shareMeme: (platform: string) => void;
}

const MemeActions: React.FC<MemeActionsProps> = ({ image, saveMeme, downloadMeme, shareMeme }) => {
    return (
        <div>
            <div className="flex mt-4 justify-center items-center">
                {/* Download Button */}
                <button
                    onClick={downloadMeme}
                    disabled={!image}
                    className={`lg:ml-4 px-4 w-full py-2 ${image ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'} text-white rounded-md shadow-md`}
                >
                    Télécharger
                </button>

                {/* Save Button */}
                <button
                    onClick={saveMeme}
                    disabled={!image}
                    className={`ml-2 px-4 py-2 w-full  ${image ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'} text-white rounded-md shadow-md`}
                >
                    Sauvegarder
                </button>
            </div>


            {/* Share Buttons */}
            <div className="relative mt-10">
                <hr />
                <div className="flex gap-4 mt-4">
                    <p className="text-xl">Partager sur :</p>
                    <div className="flex gap-2 items-center">
                        <div className="flex gap-3 space-x-5">
                            {/* Facebook Share Button */}
                            <button onClick={() => shareMeme("facebook")} disabled={!image} rel="noopener noreferrer">
                                <FontAwesomeIcon size="2x" icon={faFacebookF} className="text-blue-600" />
                            </button>

                            {/* WhatsApp Share Button */}
                            <button onClick={() => shareMeme("whatsapp")} disabled={!image} rel="noopener noreferrer">
                                <FontAwesomeIcon size="2x" icon={faWhatsapp} className="text-green-500" />
                            </button>

                            {/* Twitter Share Button */}
                            <button onClick={() => shareMeme("x")} disabled={!image} rel="noopener noreferrer">
                                <FontAwesomeIcon  size="2x" icon={faTwitter} className="text-blue-400" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemeActions;

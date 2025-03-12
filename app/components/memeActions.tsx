import React from "react";

interface MemeActionsProps {
    image: any;
    saveMeme: () => void;
    downloadMeme: () => void;
    shareMeme: (platform: any) => void;
}

const MemeActions: React.FC<MemeActionsProps> = ({ image, saveMeme, downloadMeme, shareMeme }) => {
    return (
        <div className="flex gap-4 mt-4 justify-center">
            <button
                onClick={downloadMeme}
                disabled={!image}
                className={`px-4 py-2 ${image ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'} text-white rounded-md shadow-md`}>
                Télécharger
            </button>
            <button
                onClick={saveMeme}
                disabled={!image}
                className={`px-4 py-2 ${image ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'} text-white rounded-md shadow-md`}>
                Sauvegarder
            </button>
            <div className="relative">
                <button onClick={() => shareMeme("facebook")}  className={`px-4 py-2 ${image ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'} text-white rounded-md shadow-md`}>Partager</button>
            </div>
        </div>
    );
};

export default MemeActions;

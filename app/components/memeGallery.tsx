import React from "react";

interface MemeGalleryProps {
    memes: any[];
}

const MemeGallery: React.FC<MemeGalleryProps> = ({ memes }) => {
    return (
        <div className="flex flex-col items-center justify-center p-5 w-full">
            <h1 className="font-bold mb-4 text-3xl">Galerie</h1>
            {memes.length === 0 && <div className="flex">Vos mèmes sauvegardés apparaîtront ici.</div>}
            {memes.length > 0 && <div className="grid grid-cols-3 gap-4 p-5 bg-white">
                {memes.map((meme, index) => (
                    <div key={index} className="w-50 h-50 relative bg-white shadow-md rounded-md overflow-hidden">
                        <img src={meme.image} alt="Meme" className="w-full h-full object-cover" />
                        <p className="absolute uppercase top-1 left-1/2 transform -translate-x-1/2 text-xs font-bold" style={{ color: meme.topTextColor, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                            {meme.topText}
                        </p>
                        <p className="absolute uppercase bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-bold" style={{ color: meme.bottomTextColor, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                            {meme.bottomText}
                        </p>
                    </div>
                ))}
            </div>
            }
        </div>

    );
};

export default MemeGallery;

import React from "react";

interface MemePreviewProps {
    image: string;
    topText: string;
    bottomText: string;
    topTextColor: string;
    bottomTextColor: string;
}

const MemePreview: React.FC<MemePreviewProps> = ({ image, topText, bottomText, topTextColor, bottomTextColor }) => {
    return (
        <>
            {image && <div className="relative w-96 h-96 bg-white shadow-lg rounded-md overflow-hidden">
                <img id="meme-preview" src={image} alt="Meme" className="w-full h-full object-cover" />
                <p className="absolute top-4 left-1/2 transform -translate-x-1/2 text-4xl font-bold uppercase" style={{ color: topTextColor, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                    {topText}
                </p>
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-4xl font-bold uppercase" style={{ color: bottomTextColor, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                    {bottomText}
                </p>
            </div>}
        </>
    );
};

export default MemePreview;

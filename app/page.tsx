"use client"; // Pour s'assurer que ce code ne s'exécute que côté client

import React, { useState } from "react";
import ImageUpload from "./components/imageUpload";
import TextEditor from "./components/textEditor";
import MemeGallery from "./components/memeGallery";
import html2canvas from "html2canvas";
import MemeActions from "./components/memeActions";
import MemePreview from "./components/memePreview";

export default function MemeGenerator() {
  const [image, setImage] = useState<any>(null);
  const [topText, setTopText] = useState<any>("");
  const [bottomText, setBottomText] = useState<any>("");
  const [topTextColor, setTopTextColor] = useState<string>("#ffffff");
  const [bottomTextColor, setBottomTextColor] = useState<string>("#ffffff");
  const [memes, setMemes] = useState<any>([]);

  const saveMeme = () => {
    setMemes([...memes, { image, topText, bottomText, topTextColor, bottomTextColor }]);
  };

  const shareMeme = (platform: string) => {
    const memeCanvas = document.getElementById("meme-preview");

    if (!memeCanvas) {
      console.error("Element #meme-preview not found!");
      return;
    }

    html2canvas(memeCanvas as HTMLElement).then((canvas) => {
      const memeUrl = canvas.toDataURL("image/png");

      let shareUrl = "";
      switch (platform) {
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${memeUrl}`;
          break;
        case "x":
          shareUrl = `https://twitter.com/intent/tweet?url=${memeUrl}&text=${topText} ${bottomText}`;
          break;
        case "whatsapp":
          shareUrl = `https://api.whatsapp.com/send?text=${topText} ${bottomText} ${memeUrl}`;
          break;
        default:
          console.log("Platform not supported");
          return;
      }

      window.open(shareUrl, "_blank");
    });
  };

  const downloadMeme = () => {
    const memeCanvas = document.getElementById("meme-preview");

    if (!memeCanvas) {
      console.error("Element #meme-preview not found!");
      return;
    }

    html2canvas(memeCanvas as HTMLElement).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "meme.png";
      document.body.appendChild(link); // Append link to DOM to trigger download
      link.click();
      document.body.removeChild(link); // Clean up the DOM
    });
  };

  return (
    <div className="p-6 flex flex-col items-center gap-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Générateur de Mèmes</h1>

      {/* Image upload */}
      <ImageUpload setImage={setImage} />

      <div className="lg:flex bg-amber-100 p-2">
        {/* Meme preview */}
        <MemePreview
          image={image}
          topText={topText}
          bottomText={bottomText}
          topTextColor={topTextColor}
          bottomTextColor={bottomTextColor}
        />

        <div className="ml-2 p-2">
          {/* Text editor */}
          <TextEditor
            topText={topText}
            setTopText={setTopText}
            topTextColor={topTextColor}
            setTopTextColor={setTopTextColor}
            bottomText={bottomText}
            setBottomText={setBottomText}
            bottomTextColor={bottomTextColor}
            setBottomTextColor={setBottomTextColor}
          />
          {/* Meme actions */}
          <MemeActions
            image={image}
            saveMeme={saveMeme}
            downloadMeme={downloadMeme}
            shareMeme={shareMeme}
          />
        </div>

      </div>

      {/* Meme gallery */}
      <MemeGallery memes={memes} />
    </div>
  );
}

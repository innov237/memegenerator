import React from "react";

interface TextEditorProps {
  topText: string;
  setTopText: React.Dispatch<React.SetStateAction<string>>;
  topTextColor: string;
  setTopTextColor: React.Dispatch<React.SetStateAction<string>>;
  bottomText: string;
  setBottomText: React.Dispatch<React.SetStateAction<string>>;
  bottomTextColor: string;
  setBottomTextColor: React.Dispatch<React.SetStateAction<string>>;
}

const TextEditor: React.FC<TextEditorProps> = ({ 
  topText, setTopText, topTextColor, setTopTextColor, 
  bottomText, setBottomText, bottomTextColor, setBottomTextColor 
}) => {
  return (
    <div className="mt-5 lg:ml-5">
      {/* Top Text and Color Picker */}
      <div className="flex bg-gray-400 p-2 rounded items-center">
        <input
          type="text"
          placeholder="Texte du haut"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          className="w-80 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="color"
          value={topTextColor}
          onChange={(e) => setTopTextColor(e.target.value)}
          className="ml-2 w-16 h-10 border border-gray-300 rounded-md"
        />
      </div>

      {/* Bottom Text and Color Picker */}
      <div className="flex mt-4 bg-gray-400 p-2 rounded items-center">
        <input
          type="text"
          placeholder="Texte du bas"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          className="w-80 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="color"
          value={bottomTextColor}
          onChange={(e) => setBottomTextColor(e.target.value)}
          className="ml-2 w-16 h-10 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default TextEditor;

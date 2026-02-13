// Set layout for one face and use cubeGridLayout.tsx to build the grid cross

export default function GridFace({ face, stickers, onStickerClick }) {
  return (
    <div className="grid-face">
      {stickers.map((color, index) => (
        <div
          key={`${face}-${index}`} // Unique ID: "U-0", "U-1", etc.
          className={`sticker ${color}`}
          onClick={() => 
            onStickerClick(face, index)
          }
        >
        </div>
      ))}
    </div>
  );
}
// components/Face.jsx
function Face({ colors, faceName, onStickerClick }) {
    return (
        <div className={`face-grid ${faceName}`}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="sticker"
                    style={{ backgroundColor: color }}
                    onClick={() => onStickerClick(faceName, index)}
                />
            ))}
        </div>
    );
}

export default Face;
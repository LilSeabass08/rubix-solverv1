// color panel for the user to select for the cube

const colors = ["white", "orange", "green", "red", "blue", "yellow"];

export default function ColorPicker({ activeColor, onColorClick }) {
    return (
        <div className="color-palette">
            {colors.map((color) => (
    <button
        key={color}
        className={`color-btn ${color} ${activeColor === color ? 'selected' : ''}`}
        onClick={() => onColorClick(color)}
    />
))}
        </div>
    )
}
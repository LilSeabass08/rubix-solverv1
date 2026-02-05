// color panel for the user to select the colors for the cube

const colors = ["white", "orange", "green", "red", "blue", "yellow"];

export default function ColorPicker({ activeColor, onColorClick }) {
    return (
        <div className="color-palette">
            {colors.map((color) => (
    <button
        key={color} // React needs a unique ID for lists
        className={`color-btn ${color} ${activeColor === color ? 'selected' : ''}`}
        onClick={() => onColorClick(color)}
    />
))}
        </div>
    )
}